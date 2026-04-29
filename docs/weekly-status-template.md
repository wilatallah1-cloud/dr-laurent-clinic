# Weekly Status Update — Template

**Purpose:** keep Dr. Laurent informed and confident between weekly calls. Sent every **Monday morning** until launch, then every **Friday afternoon** post-launch for the first month.

**Channel:** email (Gmail, send from info@drlaurentmedecineetesthetique.com or wilatallah1@gmail.com).

**Tone:** clear, short, numbers when available, explicit asks.

---

## Pre-launch template (use until DNS cutover)

**Subject:** Mise à jour hebdomadaire — Semaine du {{date}}

```
Bonjour Dr. Laurent,

Voici le résumé de la semaine sur le projet.

✅ Complété cette semaine :
- [item 1]
- [item 2]
- [item 3]

🔄 En cours :
- [item 1] (ETA : [jour])
- [item 2] (ETA : [jour])

⏳ En attente de votre réponse ou action :
- [question 1 ou action requise]
- [question 2]

📅 Planifié pour la semaine prochaine :
- [item 1]
- [item 2]

🎯 Date de lancement visée : [date ou "toujours à déterminer selon vos réponses"]

Des questions ou priorités à ajuster ? Répondez à ce courriel ou réservez un appel quand ça vous convient.

Bonne semaine,
William Atallah
Atasof AI
```

---

## Post-launch template (first 4 weeks)

**Subject:** Rapport hebdomadaire — Semaine {{n}} post-lancement

```
Bonjour Dr. Laurent,

Voici les résultats de la semaine.

📊 Chiffres clés :
- Leads web (formulaires + chat) : [X]
- Leads qualifiés (Service Interest rempli, routés à Hallaura/Marcos) : [X]
- Consultations réservées : [X]
- Consultations complétées (Showed) : [X]
- No-shows : [X]
- Conversions (Converted stage) : [X]
- Taux de conversion lead → booking : [X %]
- Taux de conversion booking → showed : [X %]

🤖 Agent IA :
- Conversations chat : [X]
- Appels voix reçus : [X] (si numéro provisionné)
- Questions fréquentes cette semaine : [top 3]

⚠️ Points d'attention :
- [incident ou observation]
- [bug corrigé ou amélioration faite]

🔧 Ajustements faits cette semaine :
- [item 1]
- [item 2]

📈 Recommandations pour la semaine prochaine :
- [recommandation 1, ex. lancer campagne réactivation]
- [recommandation 2, ex. ajuster prompt sur question X]

Si vous avez 15 minutes cette semaine, on pourrait revoir les chiffres ensemble et décider des priorités.

Bonne semaine,
William
```

---

## Ongoing (month 2+) cadence

**Frequency:** bi-weekly (every other Friday).

**Template:** same as post-launch but with **trend lines** (this week vs 4-week average) and **action items** list.

**Bonus touch:** once a month, send a short video (Loom, 2-3 min) walking through the dashboard numbers. Much higher retention than text.

---

## Data sources for the weekly numbers

| Metric | Where to pull it from |
|--------|----------------------|
| Leads created | GHL → Contacts → filter by `dateAdded` last 7 days AND tag `website-form` |
| Opportunities by stage | GHL → Opportunities → "Dr. Laurent Leads" pipeline → weekly view |
| Consultations booked | GHL → Calendars → Consultation Initiale → events last 7 days |
| No-shows | GHL → Appointments → filter by status `no-show` |
| Conversions | GHL → Opportunities → stage `Converted` |
| Chat conversations | GHL → Conversations → filter by source `chat` |
| Voice calls | Vapi dashboard → Calls → date range |

To speed this up, build a Looker Studio dashboard pulling GHL + Vapi data, screenshot it weekly.

---

## Red flags to call out immediately (not wait for Friday)

- Agent IA saying something medically inaccurate
- A lead reported as "not contacted" after 48h
- No-show rate above 15%
- Form submit → lead in GHL broken
- Payment link failing
- DNS / site down

Text or call Dr. Laurent within 1 hour if any of these happen.
