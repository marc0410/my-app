"use client";

import { C } from "@/app/data/constants";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";
import MiniTable from "@/app/components/MiniTable";
import Icon from "@/app/components/Icon";

export default function ActionsTab() {
  const p0Actions = [
    { t: "Investiguer JOSIAS DOGBO (29 échecs, 969k FCFA)", i: "Stats fiables", e: "30min" },
    { t: "Débloquer les 36 transferts propriétaires failed", i: "1,68M FCFA", e: "2h" },
    { t: "Appeler les 5 top propriétaires CA perdu", i: "13,3M FCFA potentiel", e: "1h" },
    { t: "Ajouter type 'Studio' au catalogue", i: "892 users en attente", e: "1 jour" },
    { t: "Lancer programme VIP Top 31 clients", i: "+4,3M FCFA/6 mois", e: "2 jours" },
    { t: "Warning/désactiver Orange & MTN", i: "Stop hémorragie", e: "1h" },
    { t: "Fermer les 406 réservations zombies", i: "Fiabilité", e: "4h" },
    { t: "Débloquer les 60 vidéos en processing", i: "Restaure engagement", e: "1 jour" },
  ];

  const p1Actions = [
    "Instant Booking activé pour les top pros",
    "Cron matching alertes → propriétaires (157 clients en attente)",
    "SMS retry auto post-échec paiement",
    "Notifications push forcées à l'onboarding",
    "Rallonger durée de vie du lien Wave",
    "Recruter 30 propriétaires dans les 10 communes sous-servies",
    "Formation KYC accélérée pour 88 pros catégorie B",
    "Correction du bug KYC (100% des pros bloqués en 'en_progression')",
  ];

  const p2Actions = [
    "Tracking événementiel (user_events)",
    "UTM et canal d'acquisition",
    "Refonte onboarding pour aha moment en 30s",
    "Chatbot IA de recherche (LLM + RAG)",
    "Marketplace services (ménage, chef, taxi)",
    "Décision Hotels PMS : killer ou pivoter",
    "Assurance dépôt de garantie (partenariat)",
    "Expansion Yamoussoukro / Bouaké (10 hôtes chacun)",
  ];

  const impactRows = [
    ["Instant Booking activé (+30% conv)", "+2,1M FCFA"],
    ["Wave liens expirés (30% récup)", "+2,9M FCFA"],
    ["Non-réponse propriétaire (20%)", "+5,9M FCFA"],
    ["Programme VIP Top 31", "+4,3M FCFA"],
    ["Type Studio ajouté (100 résa/an)", "+2,5M FCFA"],
    ["SMS retry post-échec", "+900k FCFA"],
    ["Cron matching alertes (157 clients)", "+1,5M FCFA"],
    ["Débloquer transferts pro failed", "+1,68M FCFA"],
    ["Densification 6 communes sous-servies", "+3M FCFA"],
    ["TOTAL POTENTIEL", "~24,8M FCFA"],
  ];

  const weeks = [
    {
      label: "SEMAINE 1 — Quick wins techniques",
      items: [
        { task: "Ajouter type 'Studio' au enum property_types", owner: "Dev", done: false },
        { task: "Script auto-close des 406 réservations zombies", owner: "Dev", done: false },
        { task: "Fix pipeline vidéo (60 en processing)", owner: "Dev", done: false },
        { task: "Appeler Innovons SARL (5,3M FCFA potentiel)", owner: "Commercial", done: false },
        { task: "Investiguer JOSIAS DOGBO (29 échecs paiement)", owner: "Support", done: false },
      ],
    },
    {
      label: "SEMAINE 2 — Paiements & rétention",
      items: [
        { task: "SMS/WhatsApp auto post-échec paiement", owner: "Dev", done: false },
        { task: "Investiguer Orange Money (82,7% échec)", owner: "Dev + CinetPay", done: false },
        { task: "Lancer campagne relance top 10 propriétaires inactifs", owner: "Commercial", done: false },
        { task: "Ajouter types Terrain/Magasin/Bureau/Entrepôt", owner: "Dev", done: false },
      ],
    },
    {
      label: "SEMAINE 3-4 — Croissance offre",
      items: [
        { task: "Recruter 5 propriétaires Adjamé (223 users, 1 offre)", owner: "Commercial", done: false },
        { task: "Recruter 5 propriétaires Bingerville (486 users, 10 offres)", owner: "Commercial", done: false },
        { task: "Recruter 3 propriétaires Abobo (321 users, 4 offres)", owner: "Commercial", done: false },
        { task: "Lancer programme VIP (badge + avantages)", owner: "Produit", done: false },
        { task: "Badge Pro Certifié pour motiver le KYC", owner: "Dev + Design", done: false },
      ],
    },
    {
      label: "MOIS 2 — Expansion",
      items: [
        { task: "Recruter 10 propriétaires Yamoussoukro", owner: "Commercial", done: false },
        { task: "Recruter 10 propriétaires Bouaké", owner: "Commercial", done: false },
        { task: "Push notification segmenté par profil", owner: "Dev", done: false },
        { task: "Décision Go/No-Go module Hotels PMS", owner: "Direction", done: false },
        { task: "Funnel Achat/Investissement (v1)", owner: "Produit + Dev", done: false },
      ],
    },
  ];

  return (
    <>
      {/* PRIORITÉ P0 */}
      <Section icon="AlertTriangle" comment="Cette semaine. Impact/effort maximal.">Priorité P0 — Cette semaine</Section>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {p0Actions.map((a, i) => (
          <div key={i} className="outline-card" style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderLeft: `4px solid ${C.red}`,
            borderRadius: 12,
            padding: "14px 18px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
              <div style={{ color: C.text, fontSize: 13.5, fontWeight: 700, flex: 1, minWidth: 220 }}>{a.t}</div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ background: C.greenSoft, color: C.green, fontSize: 11, padding: "4px 10px", borderRadius: 6, fontWeight: 700, border: `1px solid ${C.green}30` }}>+{a.i}</span>
                <span style={{ background: C.surfaceLight, color: C.textMuted, fontSize: 11, padding: "4px 10px", borderRadius: 6, fontWeight: 600, border: `1px solid ${C.border}` }}>⏱ {a.e}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PRIORITÉ P1 */}
      <Section icon="Zap" comment="Ce mois — structuration.">Priorité P1 — Ce mois</Section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 10, marginBottom: 24 }}>
        {p1Actions.map((t, i) => (
          <div key={i} className="outline-card" style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderLeft: `4px solid ${C.orange}`,
            borderRadius: 10,
            padding: "14px 16px",
            color: C.text,
            fontSize: 13,
            fontWeight: 700,
          }}>
            {t}
          </div>
        ))}
      </div>

      {/* PRIORITÉ P2 */}
      <Section icon="Target" comment="Ce trimestre — dette technique + différenciation.">Priorité P2 — Ce trimestre</Section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 10, marginBottom: 24 }}>
        {p2Actions.map((t, i) => (
          <div key={i} className="outline-card" style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderLeft: `4px solid ${C.accent}`,
            borderRadius: 10,
            padding: "14px 16px",
            color: C.text,
            fontSize: 13,
            fontWeight: 700,
          }}>
            {t}
          </div>
        ))}
      </div>

      {/* ESTIMATION IMPACT 90 JOURS */}
      <Section icon="Coins" comment="Estimation cumulée si P0 + P1 + top P2 exécutés dans les 90 jours.">
        Estimation impact 90 jours
      </Section>
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: "24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
        marginBottom: 24,
      }}>
        <MiniTable
          headers={["Levier", "CA récupérable"]}
          rows={impactRows}
          striped
        />
        <div style={{ marginTop: 18, padding: "16px 20px", background: C.greenSoft, border: `1px solid ${C.green}40`, borderRadius: 10, textAlign: "center" }}>
          <div style={{ color: C.green, fontSize: 20, fontWeight: 800 }}>Multiplier le CA par 4,5 en 90 jours</div>
          <div style={{ color: C.textMuted, fontSize: 12.5, marginTop: 4, fontWeight: 600 }}>Passer de 7,04M à ~32M FCFA sans budget d&apos;acquisition</div>
        </div>
      </div>

      {/* ROADMAP 60 JOURS PAR HORIZON DE TEMPS */}
      <Section icon="Calendar" comment="Feuille de route calendaire de l'équipe produit & commerciale.">
        Feuille de route 60 jours par horizon
      </Section>
      {weeks.map((week, wi) => (
        <div key={wi} style={{ marginBottom: 20 }}>
          <div style={{
            color: wi === 0 ? C.red : wi === 1 ? C.orange : wi === 2 ? C.gold : C.accent,
            fontSize: 13,
            fontWeight: 800,
            marginBottom: 10,
            letterSpacing: 0.4,
          }}>{week.label}</div>
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
            {week.items.map((item, ii) => (
              <div key={ii} style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "10px 4px",
                borderBottom: ii < week.items.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6,
                  border: `2px solid ${C.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, color: C.green, flexShrink: 0,
                  background: "#ffffff",
                }}>
                  {item.done ? <Icon name="Check" size={14} color={C.green} /> : null}
                </div>
                <div style={{ flex: 1, color: C.text, fontSize: 13, fontWeight: 600 }}>{item.task}</div>
                <div style={{
                  color: C.textMuted, fontSize: 11, fontWeight: 600,
                  background: C.surfaceLight, border: `1px solid ${C.border}`, padding: "4px 10px", borderRadius: 6,
                  whiteSpace: "nowrap",
                }}>👤 {item.owner}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <DecisionBox type="goldmine">
        <strong>Estimation CA récupérable en 60-90 jours :</strong> Si vous exécutez ce plan, le CA potentiel total récupérable est estimé à <strong style={{ color: C.gold }}>~24,8M FCFA</strong> via : fix paiements (~2M), relance propriétaires (~5,9M), recrutement communes sous-servies (~3M), programme VIP (~4,3M), studios (~2,5M).
      </DecisionBox>
    </>
  );
}
