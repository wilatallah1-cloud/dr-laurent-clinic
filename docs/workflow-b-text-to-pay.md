# Workflow B — Post-Booking Text-to-Pay

**Goal:** once a patient books a consultation, automatically send them a link to save a credit card on file. No card, no confirmed booking.

**Pre-req:** a GHL-compatible payment processor connected. Recommended: **Stripe** (native GHL integration, supports Text-to-Pay and card-on-file). Clover stays for in-person checkout.

**Status:** spec-ready. Build in GHL UI when payment processor is decided and connected.

---

## High-level flow

```
Patient books via AI agent / calendar / form
          │
          ▼
Contact tagged "booked" + Opportunity at "New Lead"
          │
          ▼
Wait 2 minutes (let booking confirmation email land first)
          │
          ▼
Send SMS + Email with Text-to-Pay link ($0 authorization, card on file)
          │
          ▼
If card saved within 24h → tag "card-on-file" + move Opportunity to "Contacted"
If no card after 24h → staff notification ("follow up to collect card")
```

---

## Workflow build steps (GHL UI)

### Setup (do once)
1. **Stripe:** Settings → Integrations → Stripe → Connect → authorize Dr. Laurent's Stripe account (or create one)
2. **Payments → Product** → create product "Card on File Authorization" with price $0 (zero-dollar auth used only to capture card)
3. **Payments → Text-to-Pay** → enable, set default processor to Stripe
4. **Smart List** → create "Awaiting card on file" filter: `Tag = booked AND NOT Tag = card-on-file AND dateAdded within last 48h`

### Workflow
**Trigger:** Appointment Booked (Calendar = Consultation Initiale)

**Step 1 — Add tag**
- Add Contact Tag: `booked`

**Step 2 — Wait**
- Wait: 2 minutes

**Step 3 — Send SMS** (branch by Preferred Language)
- FR:
  ```
  Bonjour {{contact.first_name}}, votre rendez-vous est confirmé pour {{appointment.start_date_formatted}} à {{appointment.start_time}}. Pour finaliser, veuillez ajouter une carte au dossier (aucun débit maintenant) : {{payment_link}}. Annulation : 48h de préavis, frais de 100 $ sinon. Questions : (514) 500-3422.
  ```
- EN:
  ```
  Hi {{contact.first_name}}, your appointment is confirmed for {{appointment.start_date_formatted}} at {{appointment.start_time}}. To finalize, please add a card on file (no charge now): {{payment_link}}. Cancellation: 48h notice, $100 fee otherwise. Questions: (514) 500-3422.
  ```

**Step 4 — Send email** (same content, longer format, with cancellation policy paragraph)

**Step 5 — Wait for event**
- Event: `Payment Method Added` (Stripe webhook into GHL)
- Timeout: 24 hours

**Step 6a — If event received within 24h:**
- Add Contact Tag: `card-on-file`
- Move Opportunity to pipeline stage: `Contacted`
- Send confirmation SMS: "Merci, votre carte est enregistrée. On se voit le {{appointment.start_date}} !"

**Step 6b — If timeout (no card added in 24h):**
- Internal Notification → Dr. Laurent (and Hallaura/Marcos once added): "{{contact.full_name}} hasn't added a card yet. Appointment: {{appointment.start_date}}. Consider calling to collect."
- Add task: "Call {{contact.full_name}} to collect card on file" assigned to Dr. Laurent, due in 4 hours

---

## No-show charge flow (related, build separately)

**Trigger:** Appointment marked as No-Show in GHL calendar

**Action:**
1. Check if Contact has tag `card-on-file`
2. If yes → charge saved card $100 via Stripe action (one-click charge)
3. If no → send SMS asking to add card + settle no-show fee (link to Text-to-Pay for $100 charge)

**Staff approval:** optional. To avoid accidental charges, insert "Create Task: approve no-show charge for {{contact.full_name}}" step assigned to Dr. Laurent before the charge. He clicks "approve" to fire the charge.

---

## If Dr. Laurent insists on Clover-only

Clover Ecommerce API exists but GHL won't talk to it natively. Two paths:

**Path A: Make.com middleware**
- GHL webhook on "Appointment Booked" → Make.com scenario → Clover Ecommerce API creates tokenized card capture link → sends link via SMS/email → Clover webhook fires on tokenization → Make.com sends webhook back to GHL → GHL tags `card-on-file`
- Effort: 4-6 hrs build, brittle, Clover rate limits on Ecommerce API
- Cost: Make.com free tier (1000 ops/mo) is enough for a clinic this size

**Path B: Manual**
- Patient books → staff call to collect card over phone → manual tag in GHL
- Zero tech, slow, not scalable

Stripe path is cleaner. Clover stays for in-person POS at the clinic.

---

## Test checklist before going live

- [ ] Book a test appointment with your own email
- [ ] Receive SMS + email with payment link within 3 min
- [ ] Click link, add test card (Stripe test mode), confirm tag `card-on-file` applied
- [ ] Verify Opportunity moved to `Contacted` stage
- [ ] Cancel the appointment (or wait for timeout) to test the no-card branch fires correctly
- [ ] Test no-show charge: mark appointment as no-show, verify $100 charge prompt appears
