# Speed-to-Lead AI SMS System

**Goal:** when a web lead submits a form, an AI agent fires an SMS within 60 seconds, qualifies the lead conversationally, and books the appointment. Reply within 5 minutes has ~10x conversion vs 30-min reply.

**Impact:** this is the single highest-leverage post-launch system. Most ad spend leaks here.

**Status:** spec-ready. Build after launch is stable.

---

## Two options

### Option A: GHL native SMS AI (2-hour build)
Use GHL's Conversation AI bot on SMS channel.
- **Pros:** native, no extra infra, cheap
- **Cons:** less flexible, GPT-3.5-class quality, struggles with nuanced French

### Option B: Vapi SMS agent (4-hour build, recommended)
Vapi has an SMS transport mode. Uses the same assistant prompt as the voice/chat agent but text-only.
- **Pros:** uses the GHL-connected prompt v2 we already built, handles FR + EN cleanly, can call the same native GHL tools (Check Availability, Create Event)
- **Cons:** more moving parts, Vapi SMS pricing (~$0.01/msg + LLM cost)

Recommend starting with **Option B** since we already have the Vapi assistant wired to GHL.

---

## Flow (Option B)

```
Website form submit → /api/lead → GHL contact + opportunity created
          │
          ▼
GHL workflow fires on "Opportunity Created" in "Dr. Laurent Leads"
          │
          ▼
Wait 30 seconds (feels human, not bot-instant)
          │
          ▼
Vapi SMS assistant sends first message (bilingual by language tag)
          │
          ▼
Patient replies → Vapi handles conversation → books via Check Availability + Create Event
          │
          ▼
On book success → Vapi tags "booked" + moves Opportunity to "Booked Consult"
```

---

## Vapi setup

### Create a second assistant (or clone the existing one)
- **Name:** Dr. Laurent SMS Speed-to-Lead
- **Transport:** SMS (not voice/chat)
- **Model:** same as chat agent (GPT-4o or Claude Sonnet)
- **Prompt:** copy from `agent-prompt-chat-v2.md` + prepend the SMS-specific addendum below
- **Tools:** same 5 tools as chat agent (Get Contact, Create Contact, Check Availability, Create Event, submit_lead — though submit_lead is not needed since contact already exists)

### SMS-specific prompt addendum (prepend to v2)

```
You are operating over SMS. Rules:
- Keep messages under 160 characters when possible (1 SMS segment)
- No markdown, no bullet lists, plain text only
- Start every first message by identifying yourself and referencing their recent form submission
- Mirror the patient's language (FR or EN) based on their Preferred Language custom field
- Do not send more than 2 messages in a row without a reply
- If no reply after 4 hours, send ONE follow-up. After that, stop (staff takes over)
- If the patient asks a medical question requiring diagnosis, redirect to booking a consultation
- Never share or ask for sensitive medical info over SMS

First message template (FR):
"Salut {{first_name}}, c'est Vani de la Clinique Dr. Laurent. J'ai vu votre demande pour {{service}}. Je peux vous trouver un créneau cette semaine si ça vous intéresse ?"

First message template (EN):
"Hi {{first_name}}, this is Vani from the Dr. Laurent Clinic. I saw your request about {{service}}. I can find you a time this week if you're interested?"
```

### Trigger from GHL

Option 1 — **GHL Workflow with Webhook action:**
1. Trigger: Opportunity Created in Dr. Laurent Leads
2. Wait: 30 seconds
3. Custom Webhook → POST to Vapi's `/sms` endpoint with:
   ```json
   {
     "assistantId": "SMS_ASSISTANT_ID",
     "phoneNumberId": "VAPI_NUMBER_ID",
     "customer": { "number": "{{contact.phone}}" },
     "assistantOverrides": {
       "variableValues": {
         "first_name": "{{contact.first_name}}",
         "service": "{{opportunity.customField.service_requested}}",
         "language": "{{contact.customField.preferred_language}}"
       }
     }
   }
   ```

Option 2 — **Vapi native GHL trigger** (if Vapi supports GHL event triggers):
- Configure in Vapi dashboard: "On GHL Opportunity Created → start SMS conversation"

Option 1 is more robust.

---

## Tools the SMS assistant uses

1. **Get Contact** (GHL native) — look up contact + last submission details
2. **Check Availability** (GHL native) — find open slots
3. **Create Event** (GHL native) — book the appointment
4. **Tag Contact** (GHL native) — mark `sms-engaged`, `sms-booked`, `sms-no-reply`
5. **Update Opportunity** (custom) — move stage based on outcome

---

## Guardrails

- **Quiet hours:** don't fire SMS between 9 PM and 8 AM local time. Use GHL workflow "Wait until business hours" before sending.
- **Unsubscribe:** first message should include "STOP to opt out" on the FIRST message per campaign
- **A2P 10DLC:** Dr. Laurent's Twilio/Vapi number must be A2P-registered for high-volume SMS (otherwise carrier-blocked). If not registered, start with low volume (<200 msgs/day) and register asap.
- **Handoff:** if the SMS agent gets confused or patient asks for a human, Vapi should send a tag `needs-human` and stop — staff takes over.

---

## Metrics to track

- Avg time from form submit → first SMS (target: <60s)
- Reply rate (target: >40%)
- SMS-to-booking conversion (target: >25%)
- Bookings attributed to SMS speed-to-lead (revenue impact)

Build a Looker Studio dashboard pulling from GHL reporting + Vapi call/SMS logs.

---

## Build order

1. Week 1 post-launch: set up Vapi SMS assistant + test with your own phone
2. Week 2: wire GHL trigger, test end-to-end with 5 real form submits
3. Week 3: enable for all leads, monitor metrics for 7 days
4. Week 4: iterate on prompt based on real transcripts
