import type { NextRequest } from "next/server";

type LeadBody = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  subject?: string;
  language?: "en" | "fr";
  source?: string;
  referrer?: string;
  pageUrl?: string;
  website?: string;
};

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

const PIPELINE_ID = "ji7MyjSBzqUOfGJSsSNl";
const STAGE_NEW_LEAD_ID = "e3ac7d54-d562-493e-8136-a3d35d1224ac";
const DEFAULT_ASSIGNED_USER_ID = "S9Ho9tuql7u93srWC496";

const CONTACT_FIELDS = {
  serviceInterest: "4XtGDCVjaqIUHg9gYvrC",
  specificConcern: "GLNhxAXQEva7io80vLBd",
  preferredLanguage: "oXdSZKBE7fgcqT3nHPwv",
  preferredCallbackTime: "Fz2UF3SRuTBHSul2aRBZ",
  budgetRange: "fPjcVeqSz9Xe2e5bgEdp",
  leadSource: "CZLOpNKcJGgzRTrWhQbA",
  leadNotes: "x6R5Kopj3KDLfvZIZPtC",
  leadOwner: "yxNyOB9Iiz3eOjx9yBN7",
  chatTranscript: "KIptyBAKDTcDssDXykOT",
  consentContact: "bDn06xULM08TbBxD1xNu",
} as const;

const OPPORTUNITY_FIELDS = {
  serviceRequested: "04UqJQvURzojdGmcVpN7",
  requestDetails: "CFnmpFolMVpSwW1insJs",
  sourcePage: "ORuBSOODdttgFnTPwTZ3",
  sourceCampaign: "DY9p2b71qOKbVSPzRhx7",
} as const;

const LEAD_SOURCE_MAP: Record<string, string> = {
  "website-contact": "Website Form",
  "website-service": "Website Form",
  "website-consultation": "Landing Page",
  "website-chat": "Chat Widget",
  "ads-facebook": "Ads - Facebook",
  "ads-instagram": "Ads - Instagram",
  "ads-google": "Ads - Google",
};

function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = full.trim();
  if (!trimmed) return { firstName: "", lastName: "" };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function mapServiceInterest(service: string): string | null {
  if (!service) return null;
  const s = service.toLowerCase();
  if (/penile|penis enhancement|penis enlarg/.test(s)) return "Penile enhancement";
  if (/scrotox|grotox|holetox|p-shot|o-shot|sexual|sant[eé] sexuel/.test(s))
    return "Sante sexuelle masculine";
  if (/lipoly/.test(s)) return "Lipolyse";
  if (
    /family|famille|hormono|hormone|weight|poids|mental|adhd|emergency|urgent|medicine|m[eé]decine g[eé]n[eé]rale|general/.test(
      s,
    )
  )
    return "Medecine generale";
  if (/botox|filler|comblement|blepharo|thread|injectable|visage|face|eye|regard/.test(s))
    return "Esthetique Visage";
  if (
    /bbl|brazilian|ultraformer|tempsure|microneedl|rf\b|radiofr[eé]quence|body|corps|contour|laser|hair/.test(
      s,
    )
  )
    return "Esthetique Corps";
  return "Autre";
}

function mapLeadOwner(service: string): "Marcos" | "Hallaura" | "Unassigned" {
  if (!service) return "Unassigned";
  const s = service.toLowerCase();
  if (
    /penile|penis|scrotox|grotox|holetox|p-shot|o-shot|sexual|sant[eé] sexuel|family|famille|hormono|hormone|weight|poids|mental|adhd|emergency|urgent|medicine|m[eé]decine/.test(
      s,
    )
  )
    return "Marcos";
  return "Hallaura";
}

function mapRoutingTag(owner: string): string {
  if (owner === "Marcos") return "route-medical";
  if (owner === "Hallaura") return "route-aesthetic";
  return "route-unassigned";
}

function mapLanguage(lang: "en" | "fr"): string {
  return lang === "en" ? "English" : "Francais";
}

function mapLeadSource(source: string): string {
  return LEAD_SOURCE_MAP[source] || "Website Form";
}

function todayISO(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 10;

function getClientIp(request: NextRequest): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = rateLimitStore.get(ip) || [];
  const recent = timestamps.filter((t) => t > windowStart);
  if (recent.length >= RATE_LIMIT_MAX) return false;
  recent.push(now);
  rateLimitStore.set(ip, recent);
  if (rateLimitStore.size > 5000) {
    for (const [key, ts] of rateLimitStore.entries()) {
      if (ts[ts.length - 1] < windowStart) rateLimitStore.delete(key);
    }
  }
  return true;
}

async function ghlFetch(
  path: string,
  init: RequestInit,
  token: string,
): Promise<Response> {
  return fetch(`${GHL_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: GHL_API_VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init.headers || {}),
    },
  });
}

export async function POST(request: NextRequest) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  if (!body.name || !body.email) {
    return Response.json(
      { error: "Missing required fields: name, email" },
      { status: 400 },
    );
  }

  const pit = process.env.GHL_PIT;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!pit || !locationId) {
    console.error("[lead] GHL_PIT or GHL_LOCATION_ID not configured");
    return Response.json({ error: "Not configured" }, { status: 503 });
  }

  const { firstName, lastName } = splitName(body.name);
  const language: "en" | "fr" = body.language === "en" ? "en" : "fr";
  const service = body.service?.trim() || "";
  const subject = body.subject?.trim() || "";
  const message = body.message?.trim() || "";
  const source = body.source || "website";
  const pageUrl = body.pageUrl || "";
  const referrer = body.referrer || "";

  const serviceInterest = mapServiceInterest(service);
  const leadOwner = mapLeadOwner(service);
  const contactLeadNotesLines = [
    subject ? `Subject: ${subject}` : "",
    service && serviceInterest === "Autre" ? `Service (raw): ${service}` : "",
    pageUrl ? `Page: ${pageUrl}` : "",
    referrer ? `Referrer: ${referrer}` : "",
    `Submitted: ${new Date().toISOString()}`,
  ].filter(Boolean);

  const contactCustomFields: { id: string; field_value: string }[] = [
    { id: CONTACT_FIELDS.preferredLanguage, field_value: mapLanguage(language) },
    { id: CONTACT_FIELDS.leadSource, field_value: mapLeadSource(source) },
    { id: CONTACT_FIELDS.leadOwner, field_value: leadOwner },
    { id: CONTACT_FIELDS.leadNotes, field_value: contactLeadNotesLines.join("\n") },
  ];
  if (serviceInterest) {
    contactCustomFields.push({
      id: CONTACT_FIELDS.serviceInterest,
      field_value: serviceInterest,
    });
  }
  if (message) {
    contactCustomFields.push({
      id: CONTACT_FIELDS.specificConcern,
      field_value: message,
    });
  }

  const tags = [
    "website-form",
    language,
    source,
    mapRoutingTag(leadOwner),
  ].filter(Boolean);

  const contactPayload: Record<string, unknown> = {
    locationId,
    firstName,
    lastName,
    name: body.name.trim(),
    email: body.email.trim().toLowerCase(),
    phone: body.phone?.trim() || undefined,
    tags,
    source,
    customFields: contactCustomFields,
  };

  let contactId: string | undefined;

  try {
    const res = await ghlFetch(
      "/contacts/upsert",
      { method: "POST", body: JSON.stringify(contactPayload) },
      pit,
    );
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[lead] contact upsert failed", res.status, text);
      return Response.json(
        { error: "Could not create contact" },
        { status: 502 },
      );
    }
    const data = (await res.json()) as {
      contact?: { id?: string };
      id?: string;
    };
    contactId = data.contact?.id || data.id;
  } catch (err) {
    console.error("[lead] contact upsert error", err);
    return Response.json({ error: "Network error" }, { status: 502 });
  }

  if (!contactId) {
    console.error("[lead] no contactId returned from upsert");
    return Response.json({ ok: true, warn: "no-contact-id" });
  }

  const oppNameParts = [
    serviceInterest || (service ? service.slice(0, 40) : "Consultation"),
    todayISO(),
    body.name.trim(),
  ].filter(Boolean);
  const oppName = oppNameParts.join(" - ");

  const requestDetailsLines = [
    subject ? `Subject: ${subject}` : "",
    service ? `Service requested: ${service}` : "",
    message ? `Message: ${message}` : "",
    `Routed to: ${leadOwner}`,
    `Language: ${mapLanguage(language)}`,
    referrer ? `Referrer: ${referrer}` : "",
    `Submitted: ${new Date().toISOString()}`,
  ].filter(Boolean);

  const opportunityCustomFields: { id: string; field_value: string }[] = [
    {
      id: OPPORTUNITY_FIELDS.serviceRequested,
      field_value: serviceInterest || service || "",
    },
    {
      id: OPPORTUNITY_FIELDS.requestDetails,
      field_value: requestDetailsLines.join("\n"),
    },
    { id: OPPORTUNITY_FIELDS.sourcePage, field_value: pageUrl },
    { id: OPPORTUNITY_FIELDS.sourceCampaign, field_value: source },
  ].filter((f) => f.field_value !== "");

  const opportunityPayload: Record<string, unknown> = {
    pipelineId: PIPELINE_ID,
    pipelineStageId: STAGE_NEW_LEAD_ID,
    locationId,
    contactId,
    name: oppName,
    status: "open",
    monetaryValue: 0,
    assignedTo: DEFAULT_ASSIGNED_USER_ID,
    customFields: opportunityCustomFields,
  };

  try {
    const createRes = await ghlFetch(
      "/opportunities/",
      { method: "POST", body: JSON.stringify(opportunityPayload) },
      pit,
    );
    if (createRes.ok) {
      return Response.json({ ok: true });
    }

    const createText = await createRes.text().catch(() => "");
    const isDuplicate =
      createRes.status === 400 &&
      /duplicate opportunity/i.test(createText);
    if (!isDuplicate) {
      console.error("[lead] opportunity create failed", createRes.status, createText);
      return Response.json({ ok: true, warn: "contact-saved-opp-failed" });
    }

    const searchRes = await ghlFetch(
      `/opportunities/search?location_id=${locationId}&pipeline_id=${PIPELINE_ID}&contact_id=${contactId}&status=open&limit=1`,
      { method: "GET" },
      pit,
    );
    if (!searchRes.ok) {
      const t = await searchRes.text().catch(() => "");
      console.error("[lead] opportunity search failed", searchRes.status, t);
      return Response.json({ ok: true, warn: "opp-dup-search-failed" });
    }
    const searchData = (await searchRes.json()) as {
      opportunities?: Array<{
        id: string;
        customFields?: Array<{ id: string; fieldValueString?: string; value?: string; fieldValue?: string }>;
      }>;
    };
    const existing = searchData.opportunities?.[0];
    if (!existing) {
      console.error("[lead] duplicate error but no existing open opp found");
      return Response.json({ ok: true, warn: "opp-dup-no-existing" });
    }

    const existingDetails = existing.customFields?.find(
      (f) => f.id === OPPORTUNITY_FIELDS.requestDetails,
    );
    const prior =
      existingDetails?.fieldValueString ||
      existingDetails?.value ||
      existingDetails?.fieldValue ||
      "";
    const newEntry = [
      `=== New submission ${new Date().toISOString()} ===`,
      ...requestDetailsLines,
    ].join("\n");
    const merged = prior ? `${newEntry}\n\n${prior}` : newEntry;

    const updatePayload = {
      pipelineId: PIPELINE_ID,
      pipelineStageId: STAGE_NEW_LEAD_ID,
      name: oppName,
      status: "open",
      assignedTo: DEFAULT_ASSIGNED_USER_ID,
      customFields: [
        {
          id: OPPORTUNITY_FIELDS.serviceRequested,
          field_value: serviceInterest || service || "",
        },
        { id: OPPORTUNITY_FIELDS.requestDetails, field_value: merged },
        { id: OPPORTUNITY_FIELDS.sourcePage, field_value: pageUrl },
        { id: OPPORTUNITY_FIELDS.sourceCampaign, field_value: source },
      ].filter((f) => f.field_value !== ""),
    };

    const updateRes = await ghlFetch(
      `/opportunities/${existing.id}`,
      { method: "PUT", body: JSON.stringify(updatePayload) },
      pit,
    );
    if (!updateRes.ok) {
      const t = await updateRes.text().catch(() => "");
      console.error("[lead] opportunity update failed", updateRes.status, t);
      return Response.json({ ok: true, warn: "opp-update-failed" });
    }
  } catch (err) {
    console.error("[lead] opportunity create/update error", err);
    return Response.json({ ok: true, warn: "contact-saved-opp-error" });
  }

  return Response.json({ ok: true });
}
