# Dr. Laurent — Email + SMS Templates

Copy/paste into GHL workflows. Merge fields use GHL's `{{...}}` syntax. Adjust field names if your GHL version uses a different convention (check in GHL by clicking the merge-tag icon in any workflow action).

**Common merge fields used:**
- `{{contact.first_name}}`, `{{contact.last_name}}`, `{{contact.full_name}}`, `{{contact.email}}`, `{{contact.phone}}`
- `{{appointment.start_date_formatted}}`, `{{appointment.start_time}}`, `{{appointment.duration}}`, `{{appointment.calendar_link}}`
- `{{custom_values.business_phone}}`, `{{custom_values.clinic_address}}`, `{{custom_values.cancellation_policy_fr}}`, `{{custom_values.cancellation_policy_en}}`, `{{custom_values.after_hours_fr}}`, `{{custom_values.after_hours_en}}`

**Style:** formal "vous" in French, no em-dashes, keep SMS under 160 characters where possible.

---

## 1. Booking Confirmation

**Trigger:** Appointment booked (AI chat, website form converting into booking, calendar, or phone)
**Fires:** Immediately

### FR — Email
**Subject:** Confirmation de votre rendez-vous avec Dr. Laurent

```
Bonjour {{contact.first_name}},

Votre rendez-vous est confirmé.

Date et heure : {{appointment.start_date_formatted}} à {{appointment.start_time}}
Lieu : 4072 Boul. Le Corbusier, Laval, QC H7L 5R2
Durée prévue : {{appointment.duration}} minutes

À apporter :
- Une pièce d'identité avec photo
- Une liste à jour de vos médicaments (si applicable)
- Vos questions pour Dr. Laurent

Politique d'annulation : 48 heures de préavis requis. Des frais de 100 $ s'appliquent pour une annulation tardive ou une absence.

Des questions avant votre visite ? Répondez à ce courriel ou appelez-nous au (514) 500-3422.

Au plaisir de vous accueillir,
L'équipe de la Clinique Dr. Laurent
```

### FR — SMS
```
Bonjour {{contact.first_name}}, votre rendez-vous avec Dr. Laurent est confirmé le {{appointment.start_date_formatted}} à {{appointment.start_time}}. 4072 Boul. Le Corbusier, Laval. Annulation : 48h d'avis requis. Info : (514) 500-3422.
```

### EN — Email
**Subject:** Appointment confirmation with Dr. Laurent

```
Hi {{contact.first_name}},

Your appointment is confirmed.

Date and time: {{appointment.start_date_formatted}} at {{appointment.start_time}}
Location: 4072 Boul. Le Corbusier, Laval, QC H7L 5R2
Expected duration: {{appointment.duration}} minutes

Please bring:
- Photo ID
- An up-to-date list of your medications (if applicable)
- Your questions for Dr. Laurent

Cancellation policy: 48 hours notice required. A $100 fee applies for late cancellations or missed appointments.

Questions before your visit? Reply to this email or call us at (514) 500-3422.

Looking forward to seeing you,
The Dr. Laurent Clinic team
```

### EN — SMS
```
Hi {{contact.first_name}}, your appointment with Dr. Laurent is confirmed for {{appointment.start_date_formatted}} at {{appointment.start_time}}. 4072 Boul. Le Corbusier, Laval. Cancellation: 48h notice required. Info: (514) 500-3422.
```

---

## 2. 24-Hour Reminder

**Trigger:** 24 hours before appointment start
**Fires:** Once

### FR — Email
**Subject:** Rappel : votre rendez-vous est demain

```
Bonjour {{contact.first_name}},

Un petit rappel : votre rendez-vous avec Dr. Laurent est prévu pour demain.

Date et heure : {{appointment.start_date_formatted}} à {{appointment.start_time}}
Lieu : 4072 Boul. Le Corbusier, Laval, QC

Pour arriver à temps, prévoyez 5 à 10 minutes de marge pour le stationnement et l'accueil.

Besoin de reporter ou d'annuler ? Répondez à ce courriel ou appelez-nous au (514) 500-3422. Rappel : annulation moins de 48 heures à l'avance entraîne des frais de 100 $.

À demain,
L'équipe de la Clinique Dr. Laurent
```

### FR — SMS
```
Rappel : votre rendez-vous avec Dr. Laurent est demain, {{appointment.start_date_formatted}} à {{appointment.start_time}} au 4072 Boul. Le Corbusier, Laval. Pour reporter : (514) 500-3422.
```

### EN — Email
**Subject:** Reminder: your appointment is tomorrow

```
Hi {{contact.first_name}},

Quick reminder: your appointment with Dr. Laurent is scheduled for tomorrow.

Date and time: {{appointment.start_date_formatted}} at {{appointment.start_time}}
Location: 4072 Boul. Le Corbusier, Laval, QC

Please allow 5 to 10 minutes for parking and check-in.

Need to reschedule or cancel? Reply to this email or call us at (514) 500-3422. Reminder: cancellations under 48 hours incur a $100 fee.

See you tomorrow,
The Dr. Laurent Clinic team
```

### EN — SMS
```
Reminder: your appointment with Dr. Laurent is tomorrow, {{appointment.start_date_formatted}} at {{appointment.start_time}} at 4072 Boul. Le Corbusier, Laval. To reschedule: (514) 500-3422.
```

---

## 3. No-Show Follow-up

**Trigger:** Appointment marked as no-show in GHL
**Fires:** 1 hour after scheduled start (if no-show)

### FR — Email
**Subject:** Nous vous avons manqué aujourd'hui

```
Bonjour {{contact.first_name}},

Nous avions réservé du temps pour vous aujourd'hui, mais nous ne vous avons pas vu à la clinique.

Tout va bien ? Si vous souhaitez reprendre un rendez-vous, nous sommes là pour vous accommoder.

Pour reprendre un rendez-vous :
- En ligne : https://drlaurentmedecineprivee.ca/consultation
- Téléphone : (514) 500-3422

À noter : comme mentionné dans notre politique d'annulation (48 heures de préavis requis), des frais de 100 $ seront appliqués à votre dossier. Ceux-ci seront à régler lors de votre prochaine visite.

Merci de votre compréhension. Nous comprenons que des imprévus arrivent.

L'équipe de la Clinique Dr. Laurent
```

### FR — SMS
```
Bonjour {{contact.first_name}}, nous vous avons manqué à votre rendez-vous aujourd'hui. Souhaitez-vous reprendre date ? Répondez ici ou appelez au (514) 500-3422. Des frais de no-show de 100 $ s'appliquent selon notre politique 48h.
```

### EN — Email
**Subject:** We missed you today

```
Hi {{contact.first_name}},

We had time reserved for you today, but you didn't make it to the clinic.

Everything okay? If you'd like to rebook, we're happy to find a new time for you.

To rebook:
- Online: https://drlaurentmedecineprivee.ca/consultation
- Phone: (514) 500-3422

A note: per our cancellation policy (48 hours notice required), a $100 fee will be added to your file. You can settle it at your next visit.

Thanks for understanding. We know things come up.

The Dr. Laurent Clinic team
```

### EN — SMS
```
Hi {{contact.first_name}}, we missed you at your appointment today. Would you like to rebook? Reply here or call (514) 500-3422. A $100 no-show fee applies per our 48h policy.
```

---

## 4. Dormant Patient Reactivation

**Trigger:** Contact with no appointment in the last 6 to 12 months (needs CSV export from MedFar + GHL workflow)
**Fires:** 3-message drip (this template is Message 1; duplicate and soften for 2 and 3)

### FR — Email
**Subject:** Ça fait un moment, {{contact.first_name}} !

```
Bonjour {{contact.first_name}},

Cela fait quelques mois depuis votre dernière visite chez Dr. Laurent. Nous voulions prendre de vos nouvelles et vous rappeler que la clinique reste à votre disposition, que ce soit pour un suivi, un traitement ponctuel ou simplement une consultation.

Nouveautés à la clinique :
- Prise de rendez-vous en ligne 24/7 via notre site
- Assistant virtuel pour répondre à vos questions à tout moment
- Nouveaux traitements en esthétique médicale et santé sexuelle masculine

Envie de reprendre rendez-vous ?
- En ligne : https://drlaurentmedecineprivee.ca/consultation
- Téléphone : (514) 500-3422

Au plaisir de vous revoir,
L'équipe de la Clinique Dr. Laurent

P.S. Si vous préférez ne plus recevoir nos messages, cliquez ici pour vous désabonner : {{unsubscribe_link}}
```

### FR — SMS
```
Bonjour {{contact.first_name}}, c'est l'équipe de Dr. Laurent. Cela fait un moment ! Prêt(e) à reprendre rendez-vous ? Réservez en ligne : drlaurentmedecineprivee.ca/consultation ou appelez (514) 500-3422.
```

### EN — Email
**Subject:** It's been a while, {{contact.first_name}}!

```
Hi {{contact.first_name}},

It's been a few months since your last visit with Dr. Laurent. We wanted to check in and remind you the clinic is still here for you, whether for a follow-up, a one-off treatment, or just a consultation.

What's new at the clinic:
- 24/7 online booking through our website
- A virtual assistant to answer your questions anytime
- New treatments in medical aesthetics and male sexual health

Want to book again?
- Online: https://drlaurentmedecineprivee.ca/consultation
- Phone: (514) 500-3422

Looking forward to seeing you,
The Dr. Laurent Clinic team

P.S. If you'd rather not receive our messages, unsubscribe here: {{unsubscribe_link}}
```

### EN — SMS
```
Hi {{contact.first_name}}, it's the Dr. Laurent team. It's been a while! Ready to rebook? Book online: drlaurentmedecineprivee.ca/consultation or call (514) 500-3422.
```

---

## 5. Post-Consultation Thank-you

**Trigger:** 2 hours after appointment end
**Fires:** Once

### FR — Email
**Subject:** Merci de votre visite, {{contact.first_name}}

```
Bonjour {{contact.first_name}},

Merci d'avoir choisi la Clinique Dr. Laurent pour votre consultation aujourd'hui. Nous espérons que votre visite a répondu à vos attentes.

Prochaines étapes :
- Si un plan de traitement vous a été proposé, n'hésitez pas à nous rappeler pour le réserver ou poser vos questions.
- Pour un suivi ou un prochain rendez-vous : https://drlaurentmedecineprivee.ca/consultation

Votre avis compte. Si vous avez deux minutes, nous apprécierions beaucoup un avis Google : {{google_review_link}}

Des questions ou un suivi nécessaire ? Répondez à ce courriel ou appelez-nous au (514) 500-3422.

Au plaisir de vous revoir,
L'équipe de la Clinique Dr. Laurent
```

### FR — SMS
```
Merci de votre visite aujourd'hui, {{contact.first_name}} ! Si vous avez 30 secondes, un avis Google nous aiderait beaucoup : {{google_review_link}}. Toute question : (514) 500-3422.
```

### EN — Email
**Subject:** Thanks for your visit, {{contact.first_name}}

```
Hi {{contact.first_name}},

Thank you for choosing the Dr. Laurent Clinic for your consultation today. We hope it met your expectations.

Next steps:
- If a treatment plan was proposed, feel free to call us to book or ask any follow-up questions.
- For a follow-up or next appointment: https://drlaurentmedecineprivee.ca/consultation

Your feedback matters. If you have two minutes, we'd really appreciate a Google review: {{google_review_link}}

Questions or need a follow-up? Reply to this email or call us at (514) 500-3422.

Looking forward to seeing you again,
The Dr. Laurent Clinic team
```

### EN — SMS
```
Thanks for your visit today, {{contact.first_name}}! If you have 30 seconds, a Google review would help us a lot: {{google_review_link}}. Questions: (514) 500-3422.
```

---

## Notes for GHL setup

1. **Custom values to create (if not already):**
   - `clinic_address` = 4072 Boul. Le Corbusier, Laval, QC H7L 5R2
   - `business_phone` = (514) 500-3422
   - `after_hours_fr`, `after_hours_en` already exist
   - `google_review_link` = Dr. Laurent's Google My Business review URL (paste once set)

2. **Language routing in workflows:**
   - Split the workflow on the `Preferred Language` custom field (Francais vs English)
   - Send the matching language template down each branch

3. **SMS character limits:**
   - All SMS above are under 160 characters, which keeps them as a single SMS segment (1 credit)
   - If you add merge fields with long values (e.g. a long first name), some may split into 2 segments

4. **Unsubscribe links:**
   - GHL auto-appends an unsubscribe link on marketing emails when you use the marketing email builder
   - Transactional messages (booking confirm, reminder, no-show) should not have unsubscribe links
