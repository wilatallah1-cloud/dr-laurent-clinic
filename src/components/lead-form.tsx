"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, Shield } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

type LeadFormProps = {
  source: string;
  service?: string;
  formOptions?: string[];
  showSubject?: boolean;
  showMessage?: boolean;
  showServiceSelect?: boolean;
  submitLabelKey?: "submit";
  redirectTo?: string;
};

declare global {
  interface Window {
    fbq?: (
      event: string,
      action: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

type Status = "idle" | "sending" | "success" | "error";

export function LeadForm({
  source,
  service,
  formOptions = [],
  showSubject = false,
  showMessage = false,
  showServiceSelect = false,
  redirectTo,
}: LeadFormProps) {
  const locale = useLocale();
  const t = getTranslations(locale);
  const s = t.service;

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: service || "",
    subject: "",
    message: "",
    website: "",
  });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          language: locale,
          source,
          referrer: typeof document !== "undefined" ? document.referrer : "",
          pageUrl:
            typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        try {
          window.fbq("track", "Lead", {
            content_name: source,
            content_category: service || form.service || "",
          });
        } catch {
          // ignore pixel errors
        }
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: service || "",
        subject: "",
        message: "",
        website: "",
      });

      if (redirectTo && typeof window !== "undefined") {
        const base = redirectTo.startsWith("/")
          ? `/${locale}${redirectTo === "/" ? "" : redirectTo}`
          : redirectTo;
        window.location.assign(base);
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-8 px-4">
        <div className="p-4 rounded-full bg-gold/10 mb-4">
          <CheckCircle className="w-10 h-10 text-gold" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-navy mb-2">
          {s.successTitle}
        </h3>
        <p className="text-muted-foreground text-sm max-w-sm">
          {s.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={update("website")}
          />
        </label>
      </div>
      <div>
        <label className="text-sm font-medium text-navy block mb-1.5">
          {s.fullName}
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={update("name")}
          className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-navy block mb-1.5">
          {s.emailAddress}
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-navy block mb-1.5">
          {s.phoneNumber}
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
        />
      </div>

      {showServiceSelect && formOptions.length > 0 && (
        <div>
          <label className="text-sm font-medium text-navy block mb-1.5">
            {s.interestedIn}
          </label>
          <select
            required
            value={form.service}
            onChange={update("service")}
            className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
          >
            <option value="">{s.selectTreatment}</option>
            {formOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      {showSubject && (
        <div>
          <label className="text-sm font-medium text-navy block mb-1.5">
            {locale === "fr" ? "Objet" : "Subject"}
          </label>
          <input
            type="text"
            value={form.subject}
            onChange={update("subject")}
            className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
          />
        </div>
      )}

      {showMessage && (
        <div>
          <label className="text-sm font-medium text-navy block mb-1.5">
            {locale === "fr" ? "Message" : "Message"}
          </label>
          <textarea
            rows={5}
            required
            value={form.message}
            onChange={update("message")}
            className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold resize-none"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gold hover:bg-gold-light text-navy py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? s.sending : s.submit}
      </button>

      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <p className="font-semibold">{s.errorTitle}</p>
          <p>{s.errorBody}</p>
        </div>
      )}

      <p className="text-xs text-center text-muted-foreground">
        <Shield className="w-3 h-3 inline mr-1" />
        {s.confidential}
      </p>
    </form>
  );
}
