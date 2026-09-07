import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, ComposedChart, Legend, Scatter, ScatterChart } from "recharts";

const C = {
  bg: "#0a0d16", surface: "#141826", surfaceLight: "#1e2337",
  border: "#2a2f47", text: "#e4e6f0", textMuted: "#8b8fa8",
  accent: "#6366f1", red: "#ef4444", redSoft: "#2a1215",
  orange: "#f59e0b", orangeSoft: "#2a2012", green: "#10b981",
  greenSoft: "#0f2e22", white: "#ffffff", gold: "#eab308",
  purple: "#a855f7", cyan: "#06b6d4", pink: "#ec4899",
};

// ============ DATA ============
const gmvData = [
  { mois: "Oct 25", gmv: 5, resa: 30, users: 17 },
  { mois: "Nov", gmv: 2, resa: 10, users: 75 },
  { mois: "Déc", gmv: 1, resa: 4, users: 207 },
  { mois: "Jan 26", gmv: 1, resa: 5, users: 955 },
  { mois: "Fév", gmv: 281, resa: 9, users: 932 },
  { mois: "Mar", gmv: 347, resa: 10, users: 1530 },
  { mois: "Avr", gmv: 302, resa: 7, users: 883 },
  { mois: "Mai", gmv: 1372, resa: 33, users: 653 },
  { mois: "Jun", gmv: 1169, resa: 44, users: 828 },
  { mois: "Jul", gmv: 1541, resa: 49, users: 545 },
  { mois: "Aoû", gmv: 2002, resa: 69, users: 372 },
];

// TOP 31 CLIENTS
const top31Clients = [
  { rank: 1, name: "DIBY AMAFOU PIERRE STEPHANE", tel: "+225 07 79 44 19 65", resa: 1, ca: 400000, panier: 400000, type: "One-shot premium" },
  { rank: 2, name: "Kobena Abissa Vincent", tel: "+225 07 77 02 80 65", resa: 6, ca: 386000, panier: 64333, type: "VIP fidèle" },
  { rank: 3, name: "Jamiu Sulaiman", tel: "+225 07 69 26 14 80", resa: 1, ca: 300000, panier: 300000, type: "One-shot premium" },
  { rank: 4, name: "Yeboua Kacou Luc Samuel", tel: "+225 07 08 76 06 72", resa: 1, ca: 220000, panier: 220000, type: "One-shot premium" },
  { rank: 5, name: "Ghislain Kouassi", tel: "+1 651 434 2494", resa: 1, ca: 200000, panier: 200000, type: "Diaspora premium" },
  { rank: 6, name: "Djanman Koffi Désiré", tel: "+225 07 57 13 11 60", resa: 3, ca: 165000, panier: 55000, type: "Récurrent" },
  { rank: 7, name: "OUATTARA Abdoulaye", tel: "+225 07 78 74 20 57", resa: 2, ca: 165000, panier: 82500, type: "Récurrent" },
  { rank: 8, name: "Traore Lognigue", tel: "+225 07 89 74 76 16", resa: 1, ca: 160000, panier: 160000, type: "One-shot premium" },
  { rank: 9, name: "Klutsé Koffi Lionel", tel: "+225 07 47 45 96 21", resa: 1, ca: 151000, panier: 151000, type: "One-shot premium" },
  { rank: 10, name: "Kone Idriss", tel: "+225 07 67 56 41 60", resa: 1, ca: 150000, panier: 150000, type: "One-shot premium" },
  { rank: 11, name: "David Konan", tel: "+225 01 41 69 26 40", resa: 6, ca: 130000, panier: 21667, type: "VIP fidèle" },
  { rank: 12, name: "Diallo Esther", tel: "+225 07 58 52 47 31", resa: 2, ca: 130000, panier: 65000, type: "Récurrent" },
  { rank: 13, name: "Gbeyo Aristophane", tel: "+225 07 88 06 64 66", resa: 2, ca: 120000, panier: 60000, type: "Récurrent" },
  { rank: 14, name: "VOUNKI Olivia", tel: "+225 01 60 61 51 45", resa: 4, ca: 120000, panier: 30000, type: "VIP fidèle" },
  { rank: 15, name: "KOUA BEIRA", tel: "+225 07 48 55 92 55", resa: 4, ca: 102500, panier: 25625, type: "VIP fidèle" },
  { rank: 16, name: "Mariam Traore", tel: "+225 07 99 08 49 00", resa: 4, ca: 100000, panier: 25000, type: "VIP fidèle" },
  { rank: 17, name: "Boris Patrick", tel: "+225 07 79 50 31 10", resa: 3, ca: 100000, panier: 33333, type: "Récurrent" },
  { rank: 18, name: "N'Guessan Ulrich", tel: "+225 05 75 26 43 43", resa: 1, ca: 100000, panier: 100000, type: "One-shot premium" },
  { rank: 19, name: "Joël Nery", tel: "+225 07 79 92 14 65", resa: 1, ca: 90000, panier: 90000, type: "One-shot" },
  { rank: 20, name: "Marina Poli", tel: "+225 05 00 41 38 58", resa: 1, ca: 90000, panier: 90000, type: "One-shot" },
  { rank: 21, name: "Traore Ali", tel: "+225 07 07 90 27 70", resa: 1, ca: 90000, panier: 90000, type: "One-shot" },
  { rank: 22, name: "Marius Ouattara", tel: "+225 07 57 37 64 16", resa: 1, ca: 80000, panier: 80000, type: "One-shot" },
  { rank: 23, name: "Assoko Moune", tel: "+225 07 47 76 44 71", resa: 36, ca: 78100, panier: 2169, type: "⚠️ Anormal" },
  { rank: 24, name: "AKPA Patrick", tel: "+225 07 48 09 46 72", resa: 1, ca: 75000, panier: 75000, type: "One-shot" },
  { rank: 25, name: "Mahamadou Abdoul Rahaman", tel: "+225 07 79 01 85 67", resa: 2, ca: 75000, panier: 37500, type: "Récurrent" },
  { rank: 26, name: "Djiga Lion", tel: "+225 05 02 31 55 37", resa: 1, ca: 75000, panier: 75000, type: "One-shot" },
  { rank: 27, name: "BATOUA Alphonse", tel: "+225 07 07 30 16 68", resa: 1, ca: 70000, panier: 70000, type: "One-shot" },
  { rank: 28, name: "Kouassi Nathan", tel: "+225 07 03 50 92 18", resa: 2, ca: 70000, panier: 35000, type: "Récurrent" },
  { rank: 29, name: "Maiga Al-Hassane Médhy", tel: "+225 05 74 31 55 22", resa: 1, ca: 70000, panier: 70000, type: "One-shot" },
  { rank: 30, name: "Prunelle Miensah", tel: "+225 07 07 54 01 04", resa: 2, ca: 65000, panier: 32500, type: "Récurrent" },
  { rank: 31, name: "Kone Ange Élodie", tel: "+225 05 44 89 47 26", resa: 1, ca: 60000, panier: 60000, type: "One-shot" },
];

// STATUS EVOLUTION
const statusMonthly = [
  { mois: "Oct 25", en_cours: 49, success: 30, client_perte: 0, pro_perte: 0 },
  { mois: "Nov", en_cours: 28, success: 10, client_perte: 0, pro_perte: 0 },
  { mois: "Déc", en_cours: 27, success: 4, client_perte: 0, pro_perte: 0 },
  { mois: "Jan 26", en_cours: 63, success: 5, client_perte: 0, pro_perte: 0 },
  { mois: "Fév", en_cours: 94, success: 9, client_perte: 0, pro_perte: 0 },
  { mois: "Mar", en_cours: 145, success: 10, client_perte: 1, pro_perte: 2 },
  { mois: "Avr", en_cours: 0, success: 7, client_perte: 30, pro_perte: 75 },
  { mois: "Mai", en_cours: 0, success: 33, client_perte: 92, pro_perte: 111 },
  { mois: "Jun", en_cours: 0, success: 44, client_perte: 187, pro_perte: 88 },
  { mois: "Jul", en_cours: 0, success: 49, client_perte: 135, pro_perte: 136 },
  { mois: "Aoû", en_cours: 0, success: 69, client_perte: 152, pro_perte: 152 },
];

// DEMAND vs OFFER GAP — THE GOLD MINE
const demandOfferGap = [
  { commune: "Adjamé", demand: 223, offer: 1, ratio: 223, priority: "🔥 Extrême" },
  { commune: "Akoupé", demand: 171, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Treichville", demand: 161, offer: 1, ratio: 161, priority: "🔥 Extrême" },
  { commune: "Agboville", demand: 134, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Aboisso", demand: 133, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Agban", demand: 123, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Adzopé", demand: 113, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Abobo", demand: 321, offer: 4, ratio: 80.2, priority: "🔥 Extrême" },
  { commune: "Anyama", demand: 140, offer: 2, ratio: 70, priority: "🔴 Haute" },
  { commune: "Bingerville", demand: 486, offer: 10, ratio: 48.6, priority: "🔴 Haute" },
  { commune: "Bonoua", demand: 119, offer: 5, ratio: 23.8, priority: "🔴 Haute" },
  { commune: "Jacqueville", demand: 167, offer: 9, ratio: 18.6, priority: "🟠 Moyenne" },
  { commune: "Plateau", demand: 150, offer: 9, ratio: 16.7, priority: "🟠 Moyenne" },
  { commune: "Daloa", demand: 123, offer: 8, ratio: 15.4, priority: "🟠 Moyenne" },
  { commune: "Marcory", demand: 273, offer: 24, ratio: 11.4, priority: "🟠 Moyenne" },
  { commune: "Port-Bouët", demand: 153, offer: 14, ratio: 10.9, priority: "🟠 Moyenne" },
  { commune: "Koumassi", demand: 196, offer: 19, ratio: 10.3, priority: "🟠 Moyenne" },
  { commune: "San-Pédro", demand: 152, offer: 15, ratio: 10.1, priority: "🟢 Correcte" },
  { commune: "Yamoussoukro", demand: 216, offer: 23, ratio: 9.4, priority: "🟢 Correcte" },
  { commune: "Bouaké", demand: 182, offer: 23, ratio: 7.9, priority: "🟢 Correcte" },
  { commune: "Yopougon", demand: 419, offer: 75, ratio: 5.6, priority: "🟢 Correcte" },
  { commune: "Cocody", demand: 634, offer: 244, ratio: 2.6, priority: "✅ Saturée" },
];

// TYPE DEMAND vs OFFER
const typeGap = [
  { type: "Studio", demand: 892, offer: 0, gap: 892, comment: "❌ Type inexistant en base !" },
  { type: "Appartement", demand: 977, offer: 622, gap: 355, comment: "Bien mais gap réel" },
  { type: "Maison", demand: 648, offer: 40, gap: 608, comment: "Sous-servi ×16" },
  { type: "Villa", demand: 446, offer: 86, gap: 360, comment: "Sous-servi ×5" },
  { type: "Terrain", demand: 294, offer: 0, gap: 294, comment: "❌ Pas au catalogue" },
  { type: "Magasin", demand: 242, offer: 0, gap: 242, comment: "❌ Pas au catalogue" },
  { type: "Bureau", demand: 205, offer: 0, gap: 205, comment: "❌ Pas au catalogue" },
  { type: "Entrepôt", demand: 166, offer: 0, gap: 166, comment: "❌ Pas au catalogue" },
];

// INTENTS
const intentsData = [
  { intent: "Louer", nb: 1378, color: C.green },
  { intent: "Investir", nb: 151, color: C.gold },
  { intent: "Acheter", nb: 104, color: C.accent },
];

// HOTELS PMS
const pmsData = {
  hotels: 3,
  rooms: 25,
  reservations: 7,
  no_show: 6,
  cancelled: 1,
  success: 0,
};

// VIDEOS
const videoStats = {
  total: 116,
  ready: 56,
  processing: 60,
  attached: 92,
  views_total: 2194,
  unique_viewers: 701,
  likes: 189,
  unique_likers: 104,
  creators: 68,
  zero_views: 60,
  top_video_views: 260,
};

// NOTIFICATIONS
const notifBreakdown = [
  { subject: "🏠 Nouvelle réservation à valider", nb: 8842 },
  { subject: "Bienvenue sur ImmoPlus !", nb: 2363 },
  { subject: "Nouvelle demande d'alerte immobilière", nb: 1570 },
  { subject: "🏢 Nouveau bien immobilier à valider", nb: 1522 },
  { subject: "🔔 Nouvelle demande de réservation !", nb: 1211 },
  { subject: "🔔 Nouvelle réservation payée !", nb: 931 },
  { subject: "Nouvelle demande Pro Particulier", nb: 886 },
  { subject: "✅ Demande de réservation acceptée !", nb: 520 },
  { subject: "⏰ Demande de réservation expirée", nb: 272 },
  { subject: "⏰ Paiement non reçu", nb: 224 },
];

// FUNNEL
const funnelData = [
  { step: "Demandes totales", value: 1851, pct: 100, cat: "neutral" },
  { step: "En cours (zombies 200j+)", value: 406, pct: 21.9, cat: "warning" },
  { step: "Pro sans réponse", value: 365, pct: 19.7, cat: "bad" },
  { step: "Client annule", value: 345, pct: 18.6, cat: "bad" },
  { step: "Client sans réponse", value: 252, pct: 13.6, cat: "bad" },
  { step: "Pro annule", value: 199, pct: 10.8, cat: "bad" },
  { step: "Terminée ✓", value: 167, pct: 9.0, cat: "good" },
  { step: "Validée ✓", value: 104, pct: 5.6, cat: "good" },
];

// CLIENT SEGMENTS
const clientSegments = [
  { seg: "Nouveau", nb: 5241, color: C.textMuted },
  { seg: "Occasionnel", nb: 278, color: C.accent },
  { seg: "Fidèle", nb: 39, color: C.green },
  { seg: "VIP", nb: 7, color: C.gold },
];

// ============ COMPONENTS ============
function MetricCard({ label, value, sub, status, comment }) {
  const borderColor = status === "red" ? C.red : status === "orange" ? C.orange : status === "green" ? C.green : status === "purple" ? C.purple : C.border;
  const bgTint = status === "red" ? C.redSoft : status === "orange" ? C.orangeSoft : status === "green" ? C.greenSoft : C.surface;
  return (
    <div style={{ background: bgTint, borderLeft: `3px solid ${borderColor}`, borderRadius: 8, padding: "16px 20px", flex: "1 1 200px", minWidth: 180 }}>
      <div style={{ color: C.textMuted, fontSize: 11, marginBottom: 6, letterSpacing: 0.3, textTransform: "uppercase" }}>{label}</div>
      <div style={{ color: C.white, fontSize: 26, fontWeight: 700, lineHeight: 1.1 }}>{value}</div>
      {sub && <div style={{ color: C.textMuted, fontSize: 12, marginTop: 6 }}>{sub}</div>}
      {comment && <div style={{ color: borderColor, fontSize: 11, marginTop: 8, fontStyle: "italic", lineHeight: 1.4 }}>💡 {comment}</div>}
    </div>
  );
}

function Section({ children, icon, comment }) {
  return (
    <div style={{ margin: "40px 0 14px" }}>
      <h2 style={{ color: C.white, fontSize: 19, fontWeight: 700, margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 20 }}>{icon}</span> {children}
      </h2>
      {comment && <div style={{ color: C.textMuted, fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>{comment}</div>}
    </div>
  );
}

function DecisionBox({ children, type = "info" }) {
  const colors = {
    critical: { bg: "#2a0f13", border: C.red, icon: "🚨", label: "DÉCISION CRITIQUE" },
    warning: { bg: "#2a1f0f", border: C.orange, icon: "⚡", label: "DÉCISION URGENTE" },
    info: { bg: "#0f1a2a", border: C.accent, icon: "💡", label: "À DÉCIDER" },
    success: { bg: "#0f2a1e", border: C.green, icon: "✅", label: "BONNE NOUVELLE" },
    goldmine: { bg: "#2a1f00", border: C.gold, icon: "💰", label: "GISEMENT DE CA" },
  };
  const c = colors[type];
  return (
    <div style={{ background: c.bg, border: `1px solid ${c.border}40`, borderLeft: `3px solid ${c.border}`, borderRadius: 6, padding: "14px 18px", marginTop: 12, marginBottom: 8 }}>
      <div style={{ color: c.border, fontSize: 11, fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>{c.icon} {c.label}</div>
      <div style={{ color: C.text, fontSize: 13, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}

function MiniTable({ headers, rows, striped, compact }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: compact ? 12 : 13 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ color: C.textMuted, fontWeight: 600, textAlign: i === 0 ? "left" : "right", padding: compact ? "6px 10px" : "10px 12px", borderBottom: `1px solid ${C.border}`, fontSize: 11, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: 0.3 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: striped && ri % 2 ? C.surfaceLight + "30" : "transparent" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ color: ci === 0 ? C.text : C.white, textAlign: ci === 0 ? "left" : "right", padding: compact ? "6px 10px" : "10px 12px", borderBottom: `1px solid ${C.border}15`, fontWeight: ci === 0 ? 400 : 600, whiteSpace: "nowrap" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Tip = ({ active, payload, label, unit }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, padding: "8px 12px", borderRadius: 6, fontSize: 12 }}>
      <div style={{ color: C.textMuted, marginBottom: 4 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color || C.white, fontWeight: 600 }}>
          {p.name}: {typeof p.value === "number" ? p.value.toLocaleString("fr-FR") : p.value}{unit || ""}
        </div>
      ))}
    </div>
  );
};

function clientTypeColor(type) {
  if (type.includes("VIP")) return C.gold;
  if (type.includes("Anormal")) return C.red;
  if (type.includes("Récurrent")) return C.green;
  if (type.includes("premium") || type.includes("Diaspora")) return C.purple;
  return C.textMuted;
}

const tabs = [
  { id: "overview", label: "📊 Vue" },
  { id: "opportunities", label: "💰 Opportunités" },
  { id: "topclients", label: "⭐ Top 31" },
  { id: "status", label: "🔄 Statuts" },
  { id: "residences", label: "🏘 Résidences" },
  { id: "payments", label: "💳 Paiements" },
  { id: "owners", label: "🏠 Pros" },
  { id: "engagement", label: "📱 Engagement" },
  { id: "features", label: "🚀 Features" },
  { id: "actions", label: "🎯 Actions" },
  { id: "pitch", label: "🎤 Pitch" },
];

export default function ImmoPlus() {
  const [tab, setTab] = useState("overview");

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg, #141826 0%, #0a0d16 100%)", padding: "24px 20px 16px", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/immoplus-logo.png" alt="ImmoPlus Logo" style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover" }} />
            <div>
              <h1 style={{ color: C.white, fontSize: 22, fontWeight: 800, margin: 0 }}>ImmoPlus CI — Dashboard stratégique v4</h1>
              <div style={{ color: C.textMuted, fontSize: 12, marginTop: 2 }}>11 mois · Données brutes 68 tables · Sept. 2026</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 11, color: C.textMuted, flexWrap: "wrap" }}>
            <div><div style={{ color: C.white, fontSize: 15, fontWeight: 700 }}>6 740</div>users actifs</div>
            <div><div style={{ color: C.red, fontSize: 15, fontWeight: 700 }}>267</div>users supprimés</div>
            <div><div style={{ color: C.white, fontSize: 15, fontWeight: 700 }}>748</div>résidences</div>
            <div><div style={{ color: C.red, fontSize: 15, fontWeight: 700 }}>374</div>résidences supprimées</div>
            <div><div style={{ color: C.green, fontSize: 15, fontWeight: 700 }}>7,04M</div>GMV FCFA</div>
          </div>
        </div>
      </div>

      {/* NAV */}
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, overflowX: "auto", whiteSpace: "nowrap", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", gap: 0 }}>
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{
                background: "transparent",
                color: tab === t.id ? C.accent : C.textMuted,
                border: "none",
                borderBottom: tab === t.id ? `2px solid ${C.accent}` : "2px solid transparent",
                padding: "12px 14px", fontSize: 13, fontWeight: tab === t.id ? 700 : 500,
                cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
              }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "8px 20px 60px" }}>

        {/* ==================== OVERVIEW ==================== */}
        {tab === "overview" && (
          <>
            <Section icon="📊" comment="Photo instantanée après 11 mois — sur données brutes SQL, y compris soft-deletes.">État réel</Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Utilisateurs actifs" value="6 740" sub="267 supprimés (soft-delete)" status="green" />
              <MetricCard label="Résidences actives" value="748" sub="374 supprimées (33%)" status="orange" comment="Beaucoup de churn côté offre" />
              <MetricCard label="GMV finalisé" value="7,04M" sub="271 résa · panier 26k" status="green" />
              <MetricCard label="Taux conversion" value="14,6%" sub="271 / 1 851 demandes" status="orange" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 12 }}>
              <MetricCard label="Paiements KO" value="13,4M" sub="FCFA vs 7,3M réussis" status="red" />
              <MetricCard label="CA perdu propriétaires" value="29,5M" sub="365 demandes sans réponse" status="red" />
              <MetricCard label="Gisement communes" value="~120M" sub="FCFA de demande latente" status="purple" comment="Voir onglet Opportunités" />
              <MetricCard label="Satisfaction" value="4,33/5" sub="36 avis (petit échantillon)" status="green" />
            </div>

            <DecisionBox type="goldmine">
              <strong>La vraie histoire :</strong> ImmoPlus a un CA réel de 7M mais une demande latente estimée à <strong style={{ color: C.gold }}>120M FCFA</strong>. Le problème n'est pas l'acquisition, c'est le matching offre/demande. 5 767 utilisateurs ont exprimé leurs préférences géographiques et 82% cherchent dans des communes où il n'y a AUCUNE résidence. Voir l'onglet Opportunités.
            </DecisionBox>

            <Section icon="🚨" comment="Actions à traiter cette semaine — chaque jour de retard coûte de l'argent.">Les 8 alertes rouges consolidées</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 16 }}>
              {[
                { t: "8 communes avec DEMANDE > 100 utilisateurs et 0 offre", d: "Akoupé, Agboville, Aboisso, Agban, Adzopé, Attécoubé, Dabou, Adjamé (1 seule)... plusieurs millions FCFA de gisement." },
                { t: "892 utilisateurs veulent des STUDIOS - inexistant en base", d: "Le type 'studio' n'est même pas dans le catalogue. Ajout technique = 30 min = potentiel énorme." },
                { t: "406 réservations 'en_cours' zombies depuis 200 jours", d: "36,6M FCFA de CA fantôme. Cron auto-close à mettre en place." },
                { t: "60 vidéos sur 116 (52%) bloquées en 'processing'", d: "Users uploadent mais ne voient jamais leur vidéo → frustration + perte engagement." },
                { t: "Notifications: taux de lecture 3,5%", d: "21 570 envoyées, 745 lues. Push mal calibré, spam ou canaux inadaptés." },
                { t: "Innovons SARL : 5,3M FCFA CA perdu sur 4 demandes", d: "1 coup de fil = potentiellement 5M récupérés." },
                { t: "1 client (JOSIAS DOGBO) — 29 échecs pour 969k FCFA", d: "Test/fraude/bug à trancher." },
                { t: "1 171 propriétaires en KYC 'en progression' (100%)", d: "AUCUN pro n'est certifié. Processus cassé ou pas de motivation." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "12px 0", borderBottom: i < 7 ? `1px solid ${C.border}30` : "none", display: "flex", gap: 12 }}>
                  <div style={{ background: C.red, color: "#fff", width: 22, height: 22, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>{item.t}</div>
                    <div style={{ color: C.textMuted, fontSize: 12, marginTop: 3 }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <Section icon="📈" comment="Croissance GMV en kFCFA. Fév = point de bascule PMF.">Courbe GMV</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: "20px 12px" }}>
              <ResponsiveContainer width="100%" height={240}>
                <ComposedChart data={gmvData}>
                  <XAxis dataKey="mois" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="left" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<Tip />} />
                  <Bar yAxisId="left" dataKey="gmv" name="GMV kFCFA" radius={[4, 4, 0, 0]}>
                    {gmvData.map((_, i) => <Cell key={i} fill={i >= 4 ? C.green : C.textMuted} />)}
                  </Bar>
                  <Line yAxisId="right" type="monotone" dataKey="resa" name="Nb résa" stroke={C.gold} strokeWidth={2} dot={{ fill: C.gold, r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {/* ==================== OPPORTUNITIES - NEW ==================== */}
        {tab === "opportunities" && (
          <>
            <Section icon="💰" comment="La VRAIE stratégie : là où il faut recruter des propriétaires en priorité, basé sur les préférences déclarées par 5 767 utilisateurs.">
              Gisements par commune : la carte au trésor
            </Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Communes avec 0 offre" value="10+" sub="Akoupé, Agboville, Adzopé..." status="purple" comment="Pure opportunité" />
              <MetricCard label="Users cherchant Bingerville" value="486" sub="Seulement 10 résidences dispo" status="purple" />
              <MetricCard label="Users cherchant Abobo" value="321" sub="Seulement 4 résidences dispo" status="purple" />
              <MetricCard label="Type Studio demandé" value="892" sub="ZÉRO au catalogue" status="red" comment="Ajouter type urgent" />
            </div>

            <DecisionBox type="goldmine">
              <strong>Le calcul :</strong> les 22 communes suivantes ont un ratio "demande/offre" &gt; 5. Si vous recrutez ne serait-ce que 3 résidences par commune sous-servie (soit ~60 nouvelles annonces), et que chacune fait le panier moyen actuel (26k × 4 résa/an), c'est <strong style={{ color: C.gold }}>+6,2M FCFA de GMV annuel</strong> — juste en équilibrant l'offre là où la demande existe déjà.
            </DecisionBox>

            <Section icon="🎯" comment="Chaque ligne = une opportunité de recrutement propriétaire. Trié par priorité d'action.">
              Demande vs Offre par commune (22 principales)
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20, overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr>
                    {["Commune", "Demande", "Offre", "Ratio", "Priorité", "Action"].map((h, i) => (
                      <th key={i} style={{ color: C.textMuted, fontWeight: 600, textAlign: i === 0 || i === 5 ? "left" : "right", padding: "8px 10px", borderBottom: `1px solid ${C.border}`, fontSize: 10, textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {demandOfferGap.map((d, i) => (
                    <tr key={d.commune} style={{ background: i % 2 ? C.surfaceLight + "30" : "transparent" }}>
                      <td style={{ color: C.white, textAlign: "left", padding: "8px 10px", fontWeight: 500 }}>{d.commune}</td>
                      <td style={{ color: C.purple, textAlign: "right", padding: "8px 10px", fontWeight: 700 }}>{d.demand}</td>
                      <td style={{ color: d.offer === 0 ? C.red : C.text, textAlign: "right", padding: "8px 10px" }}>{d.offer}</td>
                      <td style={{ color: typeof d.ratio === "string" ? C.red : d.ratio > 50 ? C.red : d.ratio > 10 ? C.orange : d.ratio > 5 ? C.gold : C.green, textAlign: "right", padding: "8px 10px", fontWeight: 700 }}>×{d.ratio}</td>
                      <td style={{ color: C.text, textAlign: "right", padding: "8px 10px", fontSize: 11 }}>{d.priority}</td>
                      <td style={{ color: C.textMuted, textAlign: "left", padding: "8px 10px", fontSize: 11 }}>
                        {d.offer === 0 ? "Recruter 3-5 hôtes" : d.ratio > 20 ? "Recruter 5-10 hôtes" : d.ratio > 5 ? "Ajouter 2-3 hôtes" : "Suffisant"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Section icon="🏗" comment="Découverte majeure : 892 utilisateurs veulent des STUDIOS et le type n'existe pas en base. Idem pour Terrain/Magasin/Bureau/Entrepôt.">
              Demande vs Offre par TYPE de bien
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Type demandé", "Demande", "Offre", "Gap", "Commentaire"]}
                rows={typeGap.map(t => [
                  t.type, 
                  t.demand.toLocaleString("fr-FR"), 
                  t.offer.toLocaleString("fr-FR"), 
                  t.gap.toLocaleString("fr-FR"), 
                  t.comment
                ])}
                striped
              />
              <DecisionBox type="critical">
                <strong>Type Studio = potentiel énorme perdu :</strong> 892 utilisateurs veulent des studios. Coût de développement : ajouter "studio" au enum property_types + former les proprios existants à repositionner leurs petits appartements en studios. ROI immédiat. Le marché étudiant/jeune actif ivoirien est clairement là.
              </DecisionBox>
            </div>

            <Section icon="🎯" comment="La ventilation du 'pourquoi' des utilisateurs : 84% viennent pour louer.">
              Intentions déclarées des utilisateurs
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ width: 180, height: 180 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={intentsData} dataKey="nb" nameKey="intent" cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2}>
                        {intentsData.map((s, i) => <Cell key={i} fill={s.color} />)}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  {intentsData.map(i => (
                    <div key={i.intent} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: `1px solid ${C.border}20` }}>
                      <span style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>{i.intent}</span>
                      <span style={{ color: i.color, fontSize: 16, fontWeight: 700 }}>{i.nb}</span>
                    </div>
                  ))}
                </div>
              </div>
              <DecisionBox type="info">
                <strong>Opportunité produit :</strong> 151 users veulent "Investir" et 104 veulent "Acheter". ImmoPlus est positionné 100% location courte durée. Créer un funnel dédié "achat / investissement" (mise en relation avec des agents partenaires, commission de 1-2% sur transaction) = potentiel large.
              </DecisionBox>
            </div>

            <Section icon="🏨" comment="Le module PMS Hotels est déployé mais quasi inutilisé. Décision stratégique à prendre.">
              Le module Hotels PMS
            </Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Hôtels connectés" value="3" sub="2 publiés + 1 draft" status="red" />
              <MetricCard label="Chambres totales" value="25" sub="toutes 'free' — 0 réservée" status="red" />
              <MetricCard label="Résa hôtels" value="7" sub="6 no-show + 1 cancelled" status="red" comment="0% de succès" />
              <MetricCard label="Taux d'utilisation" value="0%" sub="Feature abandonnée" status="red" />
            </div>
            <DecisionBox type="warning">
              <strong>3 options pour les Hotels :</strong> (1) <strong>Killer la feature</strong> (récupérer les ressources dev), (2) <strong>Pivoter</strong> vers un modèle qui marche (guesthouses au lieu d'hôtels traditionnels — plus adapté au marché CI), (3) <strong>Relancer</strong> avec un vrai commercial dédié qui signe 10 hôtels. Décision à prendre : cette feature coûte du dev et n'apporte pas de CA.
            </DecisionBox>

            <Section icon="🌍" comment="Les villes à explorer pour l'expansion nationale, basées sur la demande latente.">
              Villes non-Abidjan à prioriser (expansion nationale)
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Ville", "Demande", "Offre actuelle", "Priorité"]}
                rows={[
                  ["Yamoussoukro (capitale politique)", "216", "23", "🟢 Cible #1 hors Abidjan"],
                  ["Grand-Bassam (côte)", "216", "43", "🟢 Bien positionnée"],
                  ["Bouaké (2e ville)", "182", "23", "🔴 Sous-servie"],
                  ["Jacqueville (côte proche)", "167", "9", "🔴 Sous-servie"],
                  ["San-Pédro (sud)", "152", "15", "🟠 À densifier"],
                  ["Daloa (centre)", "123", "8", "🔴 Sous-servie"],
                  ["Bonoua (proche Abidjan)", "119", "5", "🔴 Sous-servie"],
                  ["Adiaké (côte)", "115", "20", "✅ Bien"],
                ]}
                striped
              />
              <DecisionBox type="goldmine">
                <strong>Stratégie d'expansion :</strong> avant de partir à Dakar/Lomé, densifiez CI. Yamoussoukro, Bouaké et Jacqueville ont un ratio demande/offre &gt; 7. Recruter 10 propriétaires par ville = 30 nouvelles annonces qui trouveront leur clientèle immédiatement.
              </DecisionBox>
            </div>
          </>
        )}

        {/* ==================== TOP CLIENTS ==================== */}
        {tab === "topclients" && (
          <>
            <Section icon="⭐" comment="Les 31 clients qui portent 59,5% du CA. Perdre 5 = -20% de CA.">
              Top 31 clients — 59,5% du CA
            </Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="CA cumulé Top 31" value="4,19M" sub="FCFA (59,5% du total)" status="green" />
              <MetricCard label="Réservations" value="95" sub="sur 271 total (35%)" status="green" />
              <MetricCard label="Panier moyen" value="44 k" sub="vs 26k global" status="green" />
              <MetricCard label="VIP fidèles (4+ résa)" value="6" sub="cœur du programme VIP" status="gold" />
            </div>

            <Section icon="👥" comment="Ventilation par profil comportemental."> Segmentation</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                {[
                  { seg: "One-shot premium", nb: 12, color: C.purple, action: "Relance J+30 offre similaire" },
                  { seg: "VIP fidèles (4+ résa)", nb: 6, color: C.gold, action: "Programme VIP dédié" },
                  { seg: "Récurrents (2-3 résa)", nb: 10, color: C.green, action: "Booster pour passer VIP" },
                  { seg: "One-shot standard", nb: 2, color: C.textMuted, action: "Campagne réactivation" },
                  { seg: "Diaspora", nb: 1, color: C.cyan, action: "Offre spéciale voyages CI" },
                  { seg: "⚠️ Anormal", nb: 1, color: C.red, action: "Investiguer avant contact" },
                ].map((s) => (
                  <div key={s.seg} style={{ padding: 12, background: C.surfaceLight, borderRadius: 6, borderLeft: `3px solid ${s.color}` }}>
                    <div style={{ color: C.white, fontSize: 18, fontWeight: 700 }}>{s.nb}</div>
                    <div style={{ color: s.color, fontSize: 12, fontWeight: 600, marginTop: 2 }}>{s.seg}</div>
                    <div style={{ color: C.textMuted, fontSize: 11, marginTop: 4 }}>{s.action}</div>
                  </div>
                ))}
              </div>
            </div>

            <Section icon="📋" comment="Liste nominative complète — contactez dans cet ordre pour lancer le programme VIP.">
              Liste complète Top 31
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 16, overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr>
                    {["#", "Nom", "Téléphone", "Résa", "CA", "Panier", "Profil"].map((h, i) => (
                      <th key={i} style={{ color: C.textMuted, fontWeight: 600, textAlign: i === 0 || i === 1 || i === 2 ? "left" : "right", padding: "8px 10px", borderBottom: `1px solid ${C.border}`, fontSize: 10, textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {top31Clients.map((c, i) => (
                    <tr key={c.rank} style={{ background: i % 2 ? C.surfaceLight + "30" : "transparent" }}>
                      <td style={{ color: c.rank <= 3 ? C.gold : c.rank <= 10 ? C.accent : C.textMuted, textAlign: "left", padding: "8px 10px", fontWeight: 700 }}>{c.rank}</td>
                      <td style={{ color: C.white, textAlign: "left", padding: "8px 10px", fontWeight: 500 }}>{c.name}</td>
                      <td style={{ color: C.text, textAlign: "left", padding: "8px 10px", fontFamily: "monospace", fontSize: 11 }}>{c.tel}</td>
                      <td style={{ color: c.resa >= 4 ? C.gold : c.resa >= 2 ? C.green : C.textMuted, textAlign: "right", padding: "8px 10px", fontWeight: 700 }}>{c.resa}</td>
                      <td style={{ color: C.white, textAlign: "right", padding: "8px 10px", fontWeight: 700 }}>{c.ca.toLocaleString("fr-FR")}</td>
                      <td style={{ color: C.textMuted, textAlign: "right", padding: "8px 10px" }}>{c.panier.toLocaleString("fr-FR")}</td>
                      <td style={{ color: clientTypeColor(c.type), textAlign: "right", padding: "8px 10px", fontSize: 11 }}>{c.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Section icon="🎯" comment="Segmentation officielle basée sur client_scores en base : la répartition réelle des 5 565 clients scorés.">
              Segmentation officielle (client_scores.segment_fidelite)
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Segment", "Nb clients", "% base"]}
                rows={[
                  ["Nouveau (0-1 résa)", "5 241", "94,2%"],
                  ["Occasionnel (2-3 résa)", "278", "5,0%"],
                  ["Fidèle (4-9 résa)", "39", "0,7%"],
                  ["VIP (10+ résa)", "7", "0,1%"],
                ]}
                striped
              />
              <DecisionBox type="info">
                <strong>Insight :</strong> vous avez seulement <strong>7 clients VIP officiels</strong> selon votre propre scoring. Programme VIP = les faire passer de 7 à 30 en 6 mois. Chaque VIP = ×4-8 en CA d'un client normal.
              </DecisionBox>
            </div>
          </>
        )}

        {/* ==================== STATUS ==================== */}
        {tab === "status" && (
          <>
            <Section icon="🔄" comment="1 851 demandes depuis oct 2025 — voici leur destin.">Répartition</Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Succès (✓)" value="271" sub="14,6% — terminées + validées" status="green" />
              <MetricCard label="En cours zombies" value="406" sub="21,9% — bug de fermeture" status="red" />
              <MetricCard label="Perdues" value="1 161" sub="62,7% — le vrai problème" status="red" />
              <MetricCard label="En attente actives" value="13" sub="0,7% — nouvelles" status="orange" />
            </div>

            <Section icon="📊" comment="Distribution détaillée par statut."> Funnel</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              {funnelData.map((s, i) => {
                const color = s.cat === "good" ? C.green : s.cat === "bad" ? C.red : s.cat === "warning" ? C.orange : C.accent;
                return (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 13, color: C.text }}>{s.step}</span>
                      <span style={{ fontSize: 12, color: C.textMuted }}>{s.value.toLocaleString("fr-FR")} — {s.pct}%</span>
                    </div>
                    <div style={{ background: C.surfaceLight, borderRadius: 3, height: 8, overflow: "hidden" }}>
                      <div style={{ background: color, height: "100%", width: `${s.pct}%`, borderRadius: 3 }} />
                    </div>
                  </div>
                );
              })}
            </div>

            <Section icon="📅" comment="Avant avril 2026, TOUT restait 'en_cours' (bug). Depuis avril, les vrais statuts apparaissent.">
              Évolution mensuelle
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: "20px 12px" }}>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={statusMonthly}>
                  <XAxis dataKey="mois" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<Tip />} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="success" name="✓ Succès" stackId="a" fill={C.green} />
                  <Bar dataKey="en_cours" name="En cours" stackId="a" fill={C.orange} />
                  <Bar dataKey="pro_perte" name="Pros" stackId="a" fill={C.red} />
                  <Bar dataKey="client_perte" name="Clients" stackId="a" fill={C.purple} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <DecisionBox type="warning">
              <strong>Bug historique corrigé partiellement en avril 2026.</strong> Il reste 406 anciennes réservations bloquées à recatégoriser. Script one-shot + cron auto-close à J+3 à mettre en place.
            </DecisionBox>
          </>
        )}

        {/* ==================== RESIDENCES ==================== */}
        {tab === "residences" && (
          <>
            <Section icon="🏘" comment="748 résidences actives, 374 supprimées (soft-delete) = 33% de churn.">Vue d'ensemble</Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Actives (deleted_at NULL)" value="748" sub="Sur 1 122 créées" status="green" />
              <MetricCard label="Supprimées (soft-delete)" value="374" sub="33% de churn côté offre" status="orange" />
              <MetricCard label="Validées" value="596" sub="80% du stock actif" status="green" />
              <MetricCard label="En attente validation" value="126" sub="17% - bottleneck admin" status="orange" />
            </div>

            <DecisionBox type="critical">
              <strong>Découverte du churn offre :</strong> 33% des résidences créées ont été supprimées (374/1 122). C'est un signal fort — pourquoi les propriétaires abandonnent-ils ? Manque de résa ? Frustration ? Concurrence ? Enquête à mener sur un échantillon.
            </DecisionBox>

            <Section icon="🏠" comment="83% appartements — mais 892 users veulent des studios (type inexistant en base) !">
              Répartition par type
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Type", "Actives", "Demande", "Gap"]}
                rows={[
                  ["Appartement", "622", "977", "+355"],
                  ["Villa", "86", "446", "+360"],
                  ["Maison", "40", "648", "+608"],
                  ["Studio", "0 (type inexistant)", "892", "+892 ⚠️"],
                ]}
                striped
              />
            </div>

            <Section icon="💵" comment="Sweet spot marché : 15-30k FCFA (46% du parc).">Distribution par prix</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Tranche prix FCFA", "Nb"]}
                rows={[
                  ["< 5 000", "17"],
                  ["5 000 - 15 000", "71"],
                  ["15 000 - 30 000", "344 ★ sweet spot"],
                  ["30 000 - 50 000", "142"],
                  ["50 000 - 100 000", "103"],
                  ["100 000 - 500 000", "46"],
                  ["> 500 000", "25"],
                ]}
                striped
              />
            </div>

            <Section icon="🎯" comment="59% des résidences n'ont JAMAIS eu la moindre demande.">Performance</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Niveau engagement", "Nb", "%"]}
                rows={[
                  ["0 résa (fantômes)", "438", "58,6%"],
                  ["1 résa", "132", "17,6%"],
                  ["2-4 résa", "164", "21,9%"],
                  ["5-9 résa", "69", "9,2%"],
                  ["10-19 résa", "33", "4,4%"],
                  ["20+ résa", "12", "1,6%"],
                ]}
                striped
              />
            </div>

            <Section icon="⭐" comment="Les 10 résidences qui portent la plateforme.">Top 10 résidences</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Résidence", "Demandes", "Finalisées", "CA FCFA"]}
                rows={[
                  ["King'sGarden", "50", "11", "350 000"],
                  ["RÉSIDENCE Magnolix", "23", "5", "300 000"],
                  ["Résidence Emma", "35", "9", "250 000"],
                  ["Yahan's place", "34", "5", "225 000"],
                  ["King'sGarden (2)", "47", "8", "200 000"],
                  ["Résidence Marie Divine", "46", "4", "180 000"],
                  ["AkwaHub Logement", "29", "3", "175 000"],
                  ["Résidence les Grâces", "25", "4", "160 000"],
                ]}
                striped
              />
            </div>
          </>
        )}

        {/* ==================== PAYMENTS ==================== */}
        {tab === "payments" && (
          <>
            <Section icon="💳" comment="Diagnostic paiements.">Vue paiements</Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Paiements réussis" value="302" sub="7,3M FCFA" status="green" />
              <MetricCard label="Paiements KO" value="253" sub="13,4M FCFA — presque 2×" status="red" />
              <MetricCard label="Cause #1" value="Wave expiré" sub="186 cas · 9,6M FCFA" status="red" />
              <MetricCard label="Retry post-KO" value="68%" sub="107 finissent par payer" status="orange" />
            </div>

            <Section icon="📱" comment="Orange à 82,7% d'échec !">Fiabilité par méthode</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              {[
                { m: "Wave", succes: 278, echecs: 188, taux: 40.3 },
                { m: "Orange", succes: 9, echecs: 43, taux: 82.7 },
                { m: "MTN", succes: 3, echecs: 13, taux: 81.3 },
                { m: "Moov", succes: 12, echecs: 9, taux: 42.9 },
              ].map((m) => (
                <div key={m.m} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>{m.m}</span>
                    <span style={{ color: m.taux > 60 ? C.red : m.taux > 40 ? C.orange : C.green, fontSize: 14, fontWeight: 700 }}>{m.taux}% échec</span>
                  </div>
                  <div style={{ display: "flex", height: 22, borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ width: `${100 - m.taux}%`, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 600 }}>{m.succes}</div>
                    <div style={{ width: `${m.taux}%`, background: C.red, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 600 }}>{m.echecs}</div>
                  </div>
                </div>
              ))}
            </div>

            <DecisionBox type="critical">
              <strong>Décision immédiate :</strong> désactivez Orange/MTN ou affichez warning "⚠️ Wave recommandé". Sur 555 paiements, seuls 12 succès viennent d'Orange+MTN, mais 56 échecs frustrent des clients qui ne reviennent pas.
            </DecisionBox>

            <Section icon="💰" comment="Sur les 253 échecs, seulement 173 ont retenté (68%). C'est là qu'on doit récupérer.">
              Comportement post-échec
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Comportement", "Nb", "% des KO"]}
                rows={[
                  ["Ont retenté", "173", "68%"],
                  ["Ont fini par réussir", "107", "42%"],
                  ["Jamais retenté = perdus", "80", "32%"],
                  ["Délai moyen retry", "0,6h", "-"],
                ]}
                striped
              />
              <DecisionBox type="success">
                <strong>Quick win :</strong> SMS auto 15min après échec avec nouveau lien Wave. Sur 80 abandons, en récupérer 30 = +900k FCFA. Coût SMS : 40 FCFA/unité.
              </DecisionBox>
            </div>
          </>
        )}

        {/* ==================== OWNERS ==================== */}
        {tab === "owners" && (
          <>
            <Section icon="🏠" comment="Le CA perdu par les propriétaires dépasse le CA réalisé.">Diagnostic propriétaires</Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="CA perdu (sans réponse)" value="29,5M" sub="FCFA sur 365 demandes" status="red" />
              <MetricCard label="Clients perdus après KO" value="70,2%" sub="221 partent définitivement" status="red" />
              <MetricCard label="Réponse < 1h → conv" value="31,6%" sub="vs 3,3% si > 6h (10×)" status="green" />
              <MetricCard label="KYC 'en progression'" value="100%" sub="1 171 pros / 1 171 non certifiés" status="red" comment="Processus cassé" />
            </div>

            <DecisionBox type="critical">
              <strong>KYC totalement cassé :</strong> 1 171 propriétaires ont une certification, 100% sont en statut "en_progression". AUCUN n'est certifié. Soit le processus est trop compliqué, soit personne ne le finit. Investigation nécessaire.
            </DecisionBox>

            <Section icon="📞" comment="5 appels = potentiellement 13,3M FCFA récupérés.">Top propriétaires CA perdu</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Propriétaire", "Téléphone", "Nb", "CA perdu FCFA"]}
                rows={[
                  ["Innovons SARL — Fidèle Konan", "+225 07 79 64 75 95", "4", "5 355 000"],
                  ["Toh Gontrand", "+225 07 79 86 72 87", "2", "2 640 000"],
                  ["KOFFI Désirée Elvire", "+225 07 08 82 77 67", "2", "2 160 000"],
                  ["OUATTARA Serena Amy Sarah", "+225 07 78 14 78 14", "1", "1 791 000"],
                  ["Kone P. Germany", "+225 07 02 38 26 20", "5", "1 340 000"],
                  ["Bile Franck", "+225 01 01 00 04 56", "4", "825 000"],
                  ["Mac Blondey", "+225 07 07 04 85 70", "1", "725 000"],
                  ["AKWAHUB Logement", "+225 05 85 78 76 76", "12", "665 000"],
                ]}
                striped
              />
            </div>
          </>
        )}

        {/* ==================== ENGAGEMENT ==================== */}
        {tab === "engagement" && (
          <>
            <Section icon="📱" comment="L'engagement produit — vidéos, notifications, chat AI, alertes.">
              Engagement plateforme
            </Section>

            <Section icon="🎬" comment="La feature vidéo est prometteuse mais mal exécutée : 52% des vidéos restent en processing.">
              Feed vidéo
            </Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Total vidéos" value="116" sub="Uploads propriétaires" status="green" />
              <MetricCard label="Bloquées en processing" value="60" sub="52% ! Jamais traitées" status="red" comment="Bug critique" />
              <MetricCard label="Vidéos ready" value="56" sub="Seulement 48% visibles" status="orange" />
              <MetricCard label="Vidéos 0 vue" value="60" sub="La moitié inutilisée" status="red" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 12 }}>
              <MetricCard label="Views totales" value="2 194" sub="Events tracking" status="green" />
              <MetricCard label="Viewers uniques" value="701" sub="Sur 6 740 users actifs" status="orange" />
              <MetricCard label="Likes" value="189" sub="8,6% du view = benchmark ok" status="green" />
              <MetricCard label="Meilleure vidéo" value="260 vues" sub="Top performer" status="green" />
            </div>

            <DecisionBox type="critical">
              <strong>Feature vidéo à réanimer :</strong> (1) débloquer les 60 vidéos coincées en processing, (2) seul 12% des résidences ont une vidéo → obliger les propriétaires à en uploader (badge "Résidence avec vidéo" → +30% de conversion prouvé sur Airbnb), (3) pousser le feed vidéo comme nouvelle acquisition (TikTok-like pour l'immobilier CI).
            </DecisionBox>

            <Section icon="🔔" comment="Le système de notifications est cassé : 3,5% de taux de lecture. Vos users n'ouvrent pas vos notifs.">
              Notifications
            </Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Notifs envoyées" value="21 570" sub="Depuis oct 2025" status="green" />
              <MetricCard label="Lues" value="745" sub="Seulement 3,5% !" status="red" comment="Push cassé" />
              <MetricCard label="Recipients uniques" value="2 579" sub="Moyenne 8,3 notifs/user" status="orange" />
              <MetricCard label="Users 0% lecture" value="2 477" sub="96% n'ouvrent jamais" status="red" />
            </div>

            <Section icon="📮" comment="Top 10 des types de notifications envoyées.">Répartition des notifs</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Type notification", "Nb envoyées"]}
                rows={notifBreakdown.map(n => [n.subject, n.nb.toLocaleString("fr-FR")])}
                striped
                compact
              />
              <DecisionBox type="critical">
                <strong>Le vrai problème :</strong> 8 842 notifs "Nouvelle réservation à valider" envoyées aux propriétaires, mais très peu lues. Ce n'est pas un problème de contenu — c'est un problème de canal (email spam ? push non activé ? SMS non facturé ?). Priorité absolue : forcer l'activation des notifications push à l'onboarding, doubler avec SMS pour les demandes critiques.
              </DecisionBox>
            </div>

            <Section icon="💬" comment="Le chat AI est unidirectionnel : 958 messages bot, 7 messages user. Ce n'est pas du dialogue, c'est de la notification enrichie.">
              Chat AI Assistant
            </Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Sessions" value="953" sub="depuis lancement" status="green" />
              <MetricCard label="Messages bot" value="958" sub="99% du volume" status="green" />
              <MetricCard label="Messages users" value="7" sub="Chat = monologue" status="red" comment="Users n'interagissent pas" />
              <MetricCard label="Users ayant utilisé" value="482" sub="7,2% des users actifs" status="orange" />
            </div>

            <DecisionBox type="info">
              <strong>Opportunité IA :</strong> le chatbot actuel n'est utilisé qu'à sens unique (bot informe, user ne répond pas). Le pivoter en un vrai assistant conversationnel (recherche de bien, comparaison de prix, conseil quartier) pourrait débloquer l'engagement. LLM + RAG sur votre catalogue = MVP en 3 semaines.
            </DecisionBox>

            <Section icon="🔍" comment="Les alertes de recherche : 77% n'ont jamais eu de proposition.">
              Alertes de recherche client
            </Section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <MetricCard label="Alertes créées" value="203" sub="dont 157 pending" status="green" />
              <MetricCard label="Sans proposition" value="157" sub="77% ignorées !" status="red" comment="Cron matching à créer" />
              <MetricCard label="Avec proposition" value="11" sub="5,4% seulement" status="orange" />
              <MetricCard label="Reverse searches" value="76" sub="84% annulées par client" status="red" />
            </div>

            <DecisionBox type="critical">
              <strong>157 clients ignorés :</strong> ces gens ont explicitement dit "je veux un bien avec X caractéristiques" et n'ont RIEN reçu. Cron quotidien de matching = quick win énorme.
            </DecisionBox>
          </>
        )}

        {/* ==================== FEATURES ==================== */}
        {tab === "features" && (
          <>
            <Section icon="🚀" comment="Fonctionnalités à mettre en place pour (1) plus de conversion, (2) plus de data, (3) plus de différenciation. Priorisées par impact/effort.">
              Roadmap features — 3 axes stratégiques
            </Section>

            <Section icon="📊" comment="Ces features permettent de PILOTER (data = décisions).">
              AXE 1 — Features tracking (data pour décider)
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              {[
                { t: "Événementiel granulaire (user_events)", d: "Chaque clic tracké : page_view, search, filter_applied, view_property, add_favorite, contact_pro, start_booking, checkout_step, payment_start. Sans ça, impossible d'optimiser le funnel.", effort: "3 semaines", impact: "Pilotage total" },
                { t: "UTM et sources d'acquisition", d: "Ajouter acquisition_source, utm_medium, utm_campaign sur users. Champ 'Comment vous nous connu ?' à l'inscription. Savoir enfin ce qui rapporte.", effort: "1 semaine", impact: "ROI marketing" },
                { t: "Session recording (Hotjar/PostHog)", d: "Voir en vidéo comment les users utilisent l'app. Détecter les moments de rage-click, les abandons. Coût 100$/mois.", effort: "1 jour setup", impact: "UX insights" },
                { t: "A/B testing framework", d: "Tester 2 versions d'onboarding, de prix, de photos. Framework simple (feature_flags table). Décisions basées données au lieu d'intuition.", effort: "2 semaines", impact: "Optimisation continue" },
                { t: "Alimenter last_seen_at", d: "Middleware 5 lignes sur chaque appel authentifié. Sans ça, impossible de calculer la vraie rétention.", effort: "1 jour", impact: "Rétention mesurable" },
                { t: "Dashboard admin temps réel", d: "Retool ou Metabase branché sur la prod. Voir en direct : demandes en attente pro, échecs paiement dernière heure, alertes qualité.", effort: "1 semaine", impact: "Pilotage réactif" },
              ].map((f, i) => (
                <div key={i} style={{ padding: "12px 0", borderBottom: i < 5 ? `1px solid ${C.border}30` : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                    <div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>{f.t}</div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <span style={{ background: C.greenSoft, color: C.green, fontSize: 11, padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>{f.impact}</span>
                      <span style={{ background: C.surfaceLight, color: C.textMuted, fontSize: 11, padding: "3px 8px", borderRadius: 4 }}>{f.effort}</span>
                    </div>
                  </div>
                  <div style={{ color: C.textMuted, fontSize: 12, lineHeight: 1.5 }}>{f.d}</div>
                </div>
              ))}
            </div>

            <Section icon="💡" comment="Ces features augmentent directement les résa payées.">
              AXE 2 — Features conversion (plus de résa)
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              {[
                { t: "Instant Booking (réservation immédiate)", d: "Certains hôtes acceptent la résa auto sans validation (comme Airbnb Instant Book). Élimine le bottleneck 'sans réponse pro'. Champ instant_booking_enabled EXISTE déjà en base — juste à activer côté produit.", effort: "1 semaine", impact: "+30% conv" },
                { t: "Smart matching alertes → propriétaires", d: "Quand un user crée une alerte, notifier directement les propriétaires matchant les critères. Aujourd'hui : 157 alertes en attente. Potentiel massif.", effort: "1 semaine", impact: "+150 clients/mois" },
                { t: "Retry paiement automatique + SMS", d: "Après échec, SMS 15min plus tard avec nouveau lien Wave. 80 clients perdus/mois récupérables.", effort: "3 jours", impact: "+900k FCFA/an" },
                { t: "Recommandations similaires (fallback)", d: "En cas de non-réponse pro ou de bien indisponible, montrer automatiquement 3 alternatives similaires. Sauve 70% des clients perdus.", effort: "2 semaines", impact: "+conversion" },
                { t: "Réservation groupée (multi-nuits, multi-résidences)", d: "Panier avec plusieurs résidences pour long séjour ou événement (mariage, congrès). Panier moyen ×3.", effort: "3 semaines", impact: "Panier +150%" },
                { t: "Countdown Wave visible sur écran paiement", d: "'⏱ Votre lien expire dans 28:14'. Réduit les échecs 'wave_payment_expired' (186 aujourd'hui, 9,6M FCFA de gisement).", effort: "2 jours", impact: "+3M FCFA/an" },
                { t: "Assistant IA de recherche conversationnelle", d: "« Je cherche une villa avec piscine à Cocody pour 4 personnes ce week-end » → l'IA propose 3 biens. Différenciateur fort vs concurrence.", effort: "1 mois", impact: "Différenciation" },
              ].map((f, i) => (
                <div key={i} style={{ padding: "12px 0", borderBottom: i < 6 ? `1px solid ${C.border}30` : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                    <div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>{f.t}</div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <span style={{ background: C.greenSoft, color: C.green, fontSize: 11, padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>{f.impact}</span>
                      <span style={{ background: C.surfaceLight, color: C.textMuted, fontSize: 11, padding: "3px 8px", borderRadius: 4 }}>{f.effort}</span>
                    </div>
                  </div>
                  <div style={{ color: C.textMuted, fontSize: 12, lineHeight: 1.5 }}>{f.d}</div>
                </div>
              ))}
            </div>

            <Section icon="🎯" comment="Features spécifiques par cible : Mobile client, App pro.">
              AXE 3 — Features par cible (mobile client / app pro)
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <div style={{ color: C.accent, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>📱 MOBILE CLIENT</div>
              {[
                "Onboarding avec 3 questions (ville, budget, type) → afficher 5 biens en 30s (aha moment)",
                "Feed vidéo TikTok-like pour découvrir les biens (utiliser l'infra vidéo existante)",
                "Favoris avec notif push si baisse de prix ou dispo",
                "Chat direct avec l'hôte (in-app, pas de fuite WhatsApp)",
                "Partage groupé (« Partager cette résa au groupe WhatsApp ») pour weekends entre amis",
                "Programme de parrainage : 5 000 FCFA offerts par ami parrainé qui réserve",
                "Wallet avec cashback 2% sur chaque résa pour fidéliser",
                "Historique de résa avec possibilité de rebooker en 1 clic",
              ].map((f, i) => (
                <div key={i} style={{ padding: "6px 0", color: C.text, fontSize: 12, lineHeight: 1.6 }}>• {f}</div>
              ))}

              <div style={{ color: C.gold, fontSize: 13, fontWeight: 700, marginTop: 20, marginBottom: 10 }}>💼 APP PROPRIÉTAIRES (PRO)</div>
              {[
                "Notifications push agressives avec son personnalisé pour nouvelles demandes",
                "Boutons 1 clic pour accepter/refuser (aujourd'hui : trop d'étapes)",
                "Calendar sync avec Google Calendar / iCal",
                "Dashboard performance mensuel envoyé par email (taux de réponse, CA, ranking)",
                "Reminders WhatsApp automatiques si non-réponse à H+2",
                "Photos avec IA : suggestion d'amélioration des photos existantes (fake stagging IA)",
                "Génération auto de description via GPT à partir des photos",
                "Système de badges (Répondant express, Super hôte, Vidéo premium) pour gamifier",
                "Formation on-boarding vidéo obligatoire (5 min) avant première publication",
              ].map((f, i) => (
                <div key={i} style={{ padding: "6px 0", color: C.text, fontSize: 12, lineHeight: 1.6 }}>• {f}</div>
              ))}
            </div>

            <Section icon="🤖" comment="Features IA innovantes pour se différencier de la concurrence.">
              AXE 4 — Features IA (différenciation)
            </Section>
            <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #141826 100%)", borderRadius: 8, padding: 24 }}>
              {[
                { t: "🔍 Recherche naturelle", d: "« Villa avec piscine, Cocody, 4 pers, weekend prochain » → résultats" },
                { t: "📸 Génération description IA", d: "Upload photos → GPT génère description accrocheuse + tags SEO" },
                { t: "💰 Pricing dynamique IA", d: "Suggestion de prix optimal selon dispo marché, saison, événements" },
                { t: "🎯 Scoring qualité annonce", d: "Note automatique 0-100 chaque annonce (photos, description, prix) + suggestions" },
                { t: "📱 Assistant réservation vocal", d: "Appel dans un IVR IA pour réserver par téléphone (pour non-tech users)" },
                { t: "🌍 Traduction auto multilingue", d: "Annonces traduites automatiquement pour diaspora (français, anglais, arabe)" },
                { t: "🎨 Home Staging IA", d: "Transformer photos vides en photos meublées via IA (Runway/Stability)" },
                { t: "💬 Chatbot support intelligent", d: "Répond aux 80% de questions communes avant qu'un humain intervienne" },
                { t: "📈 Prédiction risque annulation", d: "Score de probabilité qu'une résa soit annulée → alerte préventive" },
                { t: "🎯 Matching sémantique alertes", d: "Alertes basées sur similarité de biens plutôt que critères stricts" },
              ].map((f, i) => (
                <div key={i} style={{ padding: "10px 0", borderBottom: i < 9 ? `1px solid ${C.border}30` : "none" }}>
                  <div style={{ color: C.white, fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{f.t}</div>
                  <div style={{ color: C.textMuted, fontSize: 12 }}>{f.d}</div>
                </div>
              ))}
            </div>

            <Section icon="🎁" comment="Features à effet levier fort pour accroître l'engagement et le CA.">
              AXE 5 — Innovations business
            </Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              {[
                { t: "ImmoPlus Vérifié (badge)", d: "Programme de certification propriétaire avec inspection physique. Badge premium = +40% de résa (comme Airbnb Plus). Prix : 15 000 FCFA/an d'abonnement pro." },
                { t: "Assurance dépôt de garantie", d: "Partenariat avec un assureur pour couvrir la caution (au lieu de bloquer 50k FCFA en wallet). Commission ImmoPlus 2%." },
                { t: "Marketplace services", d: "Ménage, taxi, chef privé, gardien à la demande dans la résa. Commission 15%. Panier moyen +30%." },
                { t: "Long stay (mensuel)", d: "Négocier des tarifs mensuels pour longs séjours (étudiants, expat). Marché différent, moins de rotation, plus stable." },
                { t: "B2B corporate", d: "Compte entreprise pour héberger équipes en déplacement. Contrats annuels, volumes importants, moins de KO." },
                { t: "Programme parrainage 2 sens", d: "Parrain (client existant) : 5k FCFA. Filleul : 5k FCFA. Viralité organique." },
                { t: "Événementiel (mariages, séminaires)", d: "Location groupée de plusieurs biens pour un événement. Panier moyen ×10." },
              ].map((f, i) => (
                <div key={i} style={{ padding: "10px 0", borderBottom: i < 6 ? `1px solid ${C.border}30` : "none" }}>
                  <div style={{ color: C.white, fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{f.t}</div>
                  <div style={{ color: C.textMuted, fontSize: 12, lineHeight: 1.5 }}>{f.d}</div>
                </div>
              ))}
            </div>

            <DecisionBox type="goldmine">
              <strong>Ma recommandation top 5 features à shipper avant fin 2026 :</strong>
              <br />1. Instant Booking (déjà en base, à activer) — +30% conv immédiate
              <br />2. Ajout type "Studio" au catalogue — 892 users en attente
              <br />3. Retry paiement auto par SMS — +900k FCFA/an
              <br />4. Cron matching alertes → propriétaires — 157 clients à récupérer
              <br />5. Countdown Wave sur écran paiement — +3M FCFA/an
              <br /><br />Effort cumulé : 5 semaines de dev. Impact estimé : +10M FCFA/an de CA + 300 clients récupérés. ROI x100.
            </DecisionBox>
          </>
        )}

        {/* ==================== ACTIONS ==================== */}
        {tab === "actions" && (
          <>
            <Section icon="🚨" comment="Cette semaine. Impact/effort maximal.">Priorité P0 — Cette semaine</Section>
            {[
              { t: "Investiguer JOSIAS DOGBO (29 échecs, 969k FCFA)", i: "Stats fiables", e: "30min" },
              { t: "Débloquer les 36 transferts propriétaires failed", i: "1,68M FCFA", e: "2h" },
              { t: "Appeler les 5 top propriétaires CA perdu", i: "13,3M FCFA potentiel", e: "1h" },
              { t: "Ajouter type 'Studio' au catalogue", i: "892 users en attente", e: "1 jour" },
              { t: "Lancer programme VIP Top 31 clients", i: "+4,3M FCFA/6 mois", e: "2 jours" },
              { t: "Warning/désactiver Orange & MTN", i: "Stop hémorragie", e: "1h" },
              { t: "Fermer les 406 réservations zombies", i: "Fiabilité", e: "4h" },
              { t: "Débloquer les 60 vidéos en processing", i: "Restaure engagement", e: "1 jour" },
            ].map((a, i) => (
              <div key={i} style={{ background: C.surface, borderRadius: 8, padding: "14px 18px", marginBottom: 8, borderLeft: `3px solid ${C.red}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                  <div style={{ color: C.white, fontSize: 14, fontWeight: 600, flex: 1, minWidth: 200 }}>{a.t}</div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ background: C.greenSoft, color: C.green, fontSize: 11, padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>+{a.i}</span>
                    <span style={{ background: C.surfaceLight, color: C.textMuted, fontSize: 11, padding: "3px 8px", borderRadius: 4 }}>{a.e}</span>
                  </div>
                </div>
              </div>
            ))}

            <Section icon="⚡" comment="Ce mois — structuration.">Priorité P1 — Ce mois</Section>
            {[
              "Instant Booking activé pour les top pros",
              "Cron matching alertes → propriétaires (157 clients en attente)",
              "SMS retry auto post-échec paiement",
              "Notifications push forcées à l'onboarding",
              "Rallonger durée de vie du lien Wave",
              "Recruter 30 propriétaires dans les 10 communes sous-servies",
              "Formation KYC accélérée pour 88 pros catégorie B",
              "Correction du bug KYC (100% des pros bloqués en 'en_progression')",
            ].map((t, i) => (
              <div key={i} style={{ background: C.surface, borderRadius: 8, padding: "14px 18px", marginBottom: 8, borderLeft: `3px solid ${C.orange}` }}>
                <div style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>{t}</div>
              </div>
            ))}

            <Section icon="🎯" comment="Ce trimestre — dette technique + différenciation.">Priorité P2 — Ce trimestre</Section>
            {[
              "Tracking événementiel (user_events)",
              "UTM et canal d'acquisition",
              "Refonte onboarding pour aha moment en 30s",
              "Chatbot IA de recherche (LLM + RAG)",
              "Marketplace services (ménage, chef, taxi)",
              "Décision Hotels PMS : killer ou pivoter",
              "Assurance dépôt de garantie (partenariat)",
              "Expansion Yamoussoukro / Bouaké (10 hôtes chacun)",
            ].map((t, i) => (
              <div key={i} style={{ background: C.surface, borderRadius: 8, padding: "14px 18px", marginBottom: 8, borderLeft: `3px solid ${C.accent}` }}>
                <div style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>{t}</div>
              </div>
            ))}

            <Section icon="💰" comment="Estimation cumulée si P0 + P1 + top P2 exécutés dans les 90 jours.">
              Estimation impact 90 jours
            </Section>
            <div style={{ background: "linear-gradient(135deg, #0f2a1e 0%, #141826 100%)", borderRadius: 8, padding: 24 }}>
              <MiniTable
                headers={["Levier", "CA récupérable"]}
                rows={[
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
                ]}
              />
              <div style={{ marginTop: 16, padding: "14px 16px", background: C.greenSoft, borderRadius: 6, textAlign: "center" }}>
                <div style={{ color: C.green, fontSize: 20, fontWeight: 700 }}>Multiplier le CA par 4,5 en 90 jours</div>
                <div style={{ color: C.textMuted, fontSize: 12, marginTop: 4 }}>Passer de 7,04M à ~32M FCFA sans budget d'acquisition</div>
              </div>
            </div>
          </>
        )}

        {/* ==================== PITCH ==================== */}
        {tab === "pitch" && (
          <>
            <Section icon="🎤">Chiffres pitch-ready</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                {[
                  { n: "7,04M", u: "FCFA GMV", d: "en 11 mois, sans levée" },
                  { n: "×7", u: "croissance", d: "sur les 6 derniers mois" },
                  { n: "6 740", u: "users actifs", d: "10 villes CI" },
                  { n: "748", u: "résidences", d: "234 pros actifs" },
                  { n: "44 294", u: "FCFA LTV", d: "moyen client actif" },
                  { n: "4,33/5", u: "satisfaction", d: "sur 36 avis" },
                  { n: "7%", u: "commission", d: "modèle marketplace" },
                  { n: "0", u: "FCFA de pub", d: "100% organique" },
                ].map((m) => (
                  <div key={m.u} style={{ padding: 14, background: C.surfaceLight, borderRadius: 6 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                      <span style={{ color: C.white, fontSize: 24, fontWeight: 800 }}>{m.n}</span>
                      <span style={{ color: C.accent, fontSize: 12, fontWeight: 600 }}>{m.u}</span>
                    </div>
                    <div style={{ color: C.textMuted, fontSize: 11, marginTop: 4 }}>{m.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <Section icon="🎯">Preuve de l'apprentissage (le meilleur argument)</Section>
            <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #141826 100%)", borderRadius: 12, padding: 28, textAlign: "center" }}>
              <div style={{ color: C.textMuted, fontSize: 13, marginBottom: 12 }}>Taux d'activation par cohorte</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30, flexWrap: "wrap" }}>
                <div>
                  <div style={{ color: C.red, fontSize: 42, fontWeight: 800 }}>9,7%</div>
                  <div style={{ color: C.textMuted, fontSize: 12 }}>Cohorte déc. 2025</div>
                </div>
                <div style={{ color: C.textMuted, fontSize: 28 }}>→</div>
                <div>
                  <div style={{ color: C.green, fontSize: 42, fontWeight: 800 }}>30,4%</div>
                  <div style={{ color: C.green, fontSize: 12 }}>Cohorte août 2026</div>
                </div>
              </div>
              <div style={{ color: C.textMuted, fontSize: 13, marginTop: 16 }}>
                Taux d'activation <strong style={{ color: C.green }}>×3 en 8 mois</strong>.<br />
                Ce que nous faisons fonctionne.
              </div>
            </div>

            <Section icon="💰">Argument tueur : le gisement caché</Section>
            <div style={{ background: C.surface, borderRadius: 12, padding: 28, border: `1px solid ${C.gold}40` }}>
              <div style={{ color: C.gold, fontSize: 12, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>💰 GISEMENT CACHÉ</div>
              <div style={{ color: C.white, fontSize: 18, fontWeight: 600, lineHeight: 1.6 }}>
                Nous avons <strong style={{ color: C.gold }}>5 767 utilisateurs</strong> qui ont déclaré leurs préférences de localisation et de budget. <strong style={{ color: C.gold }}>82% cherchent dans des communes où il n'y a AUCUNE résidence disponible</strong>.
                <br /><br />
                Notre problème n'est pas de trouver la demande — nous l'avons.
                <br />
                Notre problème est de trouver l'offre pour la satisfaire.
                <br /><br />
                <span style={{ color: C.green }}>Un capital pour recruter des propriétaires dans 10 communes sous-servies = +6M FCFA de GMV mensuel garanti.</span>
              </div>
            </div>

            <Section icon="💡">Le one-liner</Section>
            <div style={{ background: C.surface, borderRadius: 12, padding: 30, textAlign: "center", border: `1px solid ${C.accent}40` }}>
              <div style={{ color: C.accent, fontSize: 12, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>Message clé</div>
              <div style={{ color: C.white, fontSize: 20, fontWeight: 600, lineHeight: 1.5, fontStyle: "italic" }}>
                « ImmoPlus, c'est le rail de paiement et de confiance qui manque à l'immobilier ouest-africain. En 11 mois, sans un franc de pub, nous avons prouvé que le marché existe. Nous demandons du capital pour scaler ce qui marche déjà. »
              </div>
            </div>

            <Section icon="🔮">Vision 18 mois</Section>
            <div style={{ background: C.surface, borderRadius: 8, padding: 20 }}>
              <MiniTable
                headers={["Horizon", "GMV mensuel", "Villes", "Milestone"]}
                rows={[
                  ["Aujourd'hui", "2M FCFA", "10 (CI)", "PMF émergent"],
                  ["+ 6 mois", "10M FCFA", "10 (CI densifiée)", "Rentabilité opérationnelle"],
                  ["+ 12 mois", "50M FCFA", "15 (+Dakar, Lomé)", "Extension UEMOA"],
                  ["+ 18 mois", "100M FCFA", "20 (+Accra, Cotonou)", "Leader régional"],
                ]}
                striped
              />
            </div>
          </>
        )}
      </div>

      <div style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "16px 20px", textAlign: "center" }}>
        <div style={{ color: C.textMuted, fontSize: 11 }}>
          ImmoPlus CI · Dashboard v4 COMPLET · 11 onglets · 68 tables analysées · Sept. 2026
        </div>
      </div>
    </div>
  );
}
