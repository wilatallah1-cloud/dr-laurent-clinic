# Dr. Laurent Clinic — Guide d'utilisation / Handover Guide

**Bienvenue dans votre nouveau système de gestion des leads et de réservation.**

Ce guide explique comment votre équipe utilise le CRM (GoHighLevel), les agents IA (chat et voix), et le site web au quotidien.

---

## 1. Les outils en un coup d'œil

| Outil | À quoi ça sert | Qui l'utilise |
|-------|---------------|---------------|
| **Site web** (drlaurentmedecineprivee.ca) | Vitrine, formulaires de contact, réservation en ligne | Patients |
| **Agent IA chat** (bas-droite du site) | Répond aux questions, qualifie, peut réserver | Patients |
| **GoHighLevel (GHL)** | CRM : contacts, pipeline, rendez-vous, automatisations | Vous + équipe |
| **Vapi** | Moteur derrière l'agent IA (vous n'y touchez presque jamais) | Atasof AI |
| **Stripe** (ou Clover) | Paiements en ligne et cartes au dossier | Vous |

---

## 2. Comment se connecter à GHL

1. Allez sur **app.gohighlevel.com**
2. Entrez vos identifiants (envoyés séparément par courriel sécurisé)
3. Sous-compte : **Dr. Laurent — Médecine Privée et Esthétique**

Bookmark cette URL dans votre navigateur.

---

## 3. Le tableau de bord GHL : ce qu'il y a et où

### Opportunités (Pipeline)
Menu de gauche → **Opportunities**

Chaque fois qu'un patient remplit un formulaire ou parle à l'agent IA, **une carte apparaît ici** dans le pipeline "Dr. Laurent Leads."

**Les 8 étapes :**
1. **New Lead** — vient d'arriver, à contacter
2. **Contacted** — vous avez eu un premier échange
3. **Proposal Sent** — devis envoyé, en attente de décision
4. **Closed** — consultation réservée
5. **Showed** — le patient s'est présenté
6. **Converted** — traitement acheté (revenue secured)
7. **No Show / Follow Up** — manqué le rendez-vous, relancer
8. **Lost** — n'a pas converti

**À faire tous les jours :** ouvrir la colonne "New Lead," traiter les cartes, les faire glisser vers l'étape suivante.

### Conversations
Menu de gauche → **Conversations**

Toutes les conversations SMS, courriel, chat web, et voix arrivent ici dans une seule boîte de réception. Vous pouvez répondre directement depuis GHL (pas besoin d'ouvrir Gmail ou votre téléphone).

### Contacts
Menu de gauche → **Contacts**

Chaque patient a une fiche. Vous y trouvez :
- Coordonnées (nom, téléphone, courriel)
- Tags (website-form, route-aesthetic, etc.)
- Champs personnalisés (Service Interest, Preferred Language, Lead Notes, etc.)
- Historique des opportunités (chaque demande qu'ils ont faite)
- Historique des messages
- Historique des rendez-vous

### Calendrier
Menu de gauche → **Calendars → Consultation Initiale**

Vos créneaux disponibles. Tout ce qui est réservé via le site, l'agent IA, ou par téléphone (manuellement par vous) apparaît ici.

**Horaires :** Lun-Ven 9h00 à 18h00, créneaux de 30 minutes.

**Pour bloquer une période** (vacances, lunch, urgence) : **Calendars → Block time** → choisir la plage.

---

## 4. Les rôles de l'équipe

| Personne | Quand le lead lui arrive |
|----------|--------------------------|
| **Hallaura** | Tous les leads **esthétiques non-pénile** (Botox, lipolyse, lasers, fillers, etc.) |
| **Marcos** | Tous les leads **médicaux + pénile** (médecine générale, hormono, santé sexuelle masculine, etc.) |
| **Dr. Laurent** | Propriétaire du compte, voit tout |

Le système met automatiquement un tag `route-aesthetic` ou `route-medical` sur chaque lead, et attribue l'opportunité au bon membre de l'équipe.

**Notifications :** chaque nouveau lead déclenche une notification dans l'app mobile GHL (téléchargez "LeadConnector" sur iOS/Android et connectez-vous).

---

## 5. Les automatisations actives

Vous n'avez PAS à les déclencher manuellement. Elles roulent seules.

| Automation | Déclencheur | Action |
|------------|-------------|--------|
| Notification nouveau lead | Opportunité créée dans "Dr. Laurent Leads" | Notification interne au propriétaire |
| Confirmation de RDV | Rendez-vous réservé | SMS + courriel au patient |
| Rappel 24h | 24h avant le RDV | SMS + courriel au patient |
| Suivi no-show | Patient ne se présente pas | SMS au patient + tâche de suivi |
| Réactivation dormante *(à venir)* | Patient sans visite depuis 6-12 mois | Séquence drip SMS/courriel |
| Speed-to-lead SMS *(à venir)* | Formulaire rempli | SMS AI dans les 60 secondes |

---

## 6. Les 10 gabarits de messages

Tous les gabarits (FR + EN, courriel + SMS) sont dans : `templates/email-sms-templates.md`

Pour modifier un gabarit :
1. GHL → **Marketing → Templates**
2. Trouver le gabarit par nom
3. Modifier → Enregistrer

---

## 7. Ce que l'agent IA peut faire

### Chat web (en bas à droite du site)
- Répond aux questions courantes (heures, services, prix, adresse)
- Qualifie le patient (service, urgence, langue)
- Réserve un créneau direct dans votre calendrier
- Transfère la conversation à l'équipe si la question est médicale pointue

### Voix (si numéro provisionné)
Même chose que le chat, mais par téléphone. 24/7.

### Ce qu'il NE fait PAS
- Ne donne **pas** de diagnostic médical
- Ne partage **pas** d'info médicale confidentielle
- N'accède **pas** à MYLE/MEDFAR (dossiers cliniques)
- Ne promet **pas** de résultats spécifiques sur un traitement

Tout ça est codé dans son prompt comme garde-fou strict.

---

## 8. Quand appeler Atasof AI

**Tout seul** :
- Bloquer du temps au calendrier
- Modifier un gabarit de message
- Marquer un RDV comme no-show
- Faire avancer une opportunité dans le pipeline
- Ajouter une note à un contact
- Répondre à une conversation SMS/courriel

**Nous contacter** (contact@atasofai.com ou WhatsApp de William) :
- L'agent IA dit quelque chose d'inexact ou mal tourné
- Une automatisation ne s'est pas déclenchée correctement
- Vous voulez ajouter un nouveau service au calendrier
- Vous voulez lancer une campagne (SMS de masse, réactivation, nouvelle offre)
- Vous voulez ajouter un membre de l'équipe (Hallaura / Marcos) comme utilisateur GHL
- Un patient signale qu'il reçoit trop de messages ou se plaint d'un SMS

**Urgence technique** (agent down, site down) :
- WhatsApp William directement, réponse sous 2h en semaine

---

## 9. Dépannage rapide

| Problème | Solution rapide |
|----------|-----------------|
| Je ne reçois pas les notifications | Vérifier que l'app LeadConnector est installée + notifications activées |
| Un lead est arrivé sans être attribué | Vérifier si le champ "Service Interest" est rempli. Sinon, c'est `Unassigned`, vous pouvez l'attribuer manuellement |
| Un patient veut annuler | GHL → trouver le RDV → clic droit → **Cancel**. Un SMS de confirmation d'annulation est envoyé |
| Un patient s'est désabonné des SMS | Son tag devient `unsubscribed`. Il ne recevra plus de SMS marketing. Transactionnels (confirmation de RDV) passent toujours. |
| Je veux voir d'où viennent mes leads | Contacts → filtrer par tag (`ads-facebook`, `website-form`, `website-consultation`, etc.) ou par champ `Lead Source` |

---

## 10. Sécurité

- **Ne partagez jamais votre mot de passe GHL par courriel ou SMS**
- **Activez le 2FA (authentification à deux facteurs)** : GHL Settings → My Profile → Two-Factor Authentication
- Si un membre de l'équipe quitte, révoquez son accès : Settings → Users → remove

---

## 11. Premiers pas (checklist)

- [ ] Se connecter à GHL pour la première fois
- [ ] Activer le 2FA
- [ ] Installer l'app mobile LeadConnector (iOS/Android)
- [ ] Faire le tour du pipeline "Dr. Laurent Leads"
- [ ] Tester la réservation en ligne depuis le site (réserver un créneau fictif, puis l'annuler)
- [ ] Parler à l'agent IA chat sur le site pour voir comment il répond
- [ ] Lire les 10 gabarits de messages
- [ ] Marquer dans votre calendrier : révision avec Atasof dans 2 semaines post-lancement

---

*Questions ? Contactez William : wilatallah1@gmail.com ou WhatsApp.*
