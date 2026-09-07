"use client";

import { C } from "@/app/data/constants";
import { top31Clients } from "@/app/data/datasets";
import MetricCard from "@/app/components/MetricCard";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";
import MiniTable from "@/app/components/MiniTable";
import { clientTypeColor } from "@/app/utils/colors";

export default function TopClientsTab() {
  return (
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

      <Section icon="👥" comment="Ventilation par profil comportemental.">Segmentation</Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {[
            { seg: "One-shot premium", nb: 12, color: C.purple, action: "Relance J+30 offre similaire" },
            { seg: "VIP fidèles (4+ résa)", nb: 6, color: C.gold, action: "Programme VIP dédié" },
            { seg: "Récurrents (2-3 résa)", nb: 10, color: C.green, action: "Booster pour passer VIP" },
            { seg: "One-shot standard", nb: 2, color: C.textMuted, action: "Campagne réactivation" },
            { seg: "Diaspora", nb: 1, color: C.cyan, action: "Offre spéciale voyages CI" },
            { seg: "⚠️ Anormal", nb: 1, color: C.red, action: "Investiguer avant contact" },
          ].map((s) => (
            <div key={s.seg} style={{ padding: 14, background: C.surfaceLight, borderRadius: 8, border: `1px solid ${C.border}`, borderLeft: `4px solid ${s.color}` }}>
              <div style={{ color: C.text, fontSize: 20, fontWeight: 800 }}>{s.nb}</div>
              <div style={{ color: s.color, fontSize: 12, fontWeight: 700, marginTop: 2 }}>{s.seg}</div>
              <div style={{ color: C.textMuted, fontSize: 11, marginTop: 4, fontWeight: 500 }}>{s.action}</div>
            </div>
          ))}
        </div>
      </div>

      <Section icon="📋" comment="Liste nominative complète — contactez dans cet ordre pour lancer le programme VIP.">
        Liste complète Top 31
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", overflowX: "auto", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: C.surfaceLight }}>
              {["#", "Nom", "Téléphone", "Résa", "CA", "Panier", "Profil"].map((h, i) => (
                <th key={i} style={{ color: C.textMuted, fontWeight: 700, textAlign: i === 0 || i === 1 || i === 2 ? "left" : "right", padding: "10px 12px", borderBottom: `1px solid ${C.border}`, fontSize: 11, textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {top31Clients.map((c, i) => (
              <tr key={c.rank} style={{ background: i % 2 ? C.surfaceLight + "40" : "transparent" }}>
                <td style={{ color: c.rank <= 3 ? C.gold : c.rank <= 10 ? C.accent : C.textMuted, textAlign: "left", padding: "10px 12px", fontWeight: 800 }}>{c.rank}</td>
                <td style={{ color: C.text, textAlign: "left", padding: "10px 12px", fontWeight: 700 }}>{c.name}</td>
                <td style={{ color: C.textMuted, textAlign: "left", padding: "10px 12px", fontFamily: "monospace", fontSize: 11, fontWeight: 600 }}>{c.tel}</td>
                <td style={{ color: c.resa >= 4 ? C.gold : c.resa >= 2 ? C.green : C.textMuted, textAlign: "right", padding: "10px 12px", fontWeight: 800 }}>{c.resa}</td>
                <td style={{ color: C.text, textAlign: "right", padding: "10px 12px", fontWeight: 800 }}>{c.ca.toLocaleString("fr-FR")} FCFA</td>
                <td style={{ color: C.textMuted, textAlign: "right", padding: "10px 12px", fontWeight: 500 }}>{c.panier.toLocaleString("fr-FR")} FCFA</td>
                <td style={{ color: clientTypeColor(c.type), textAlign: "right", padding: "10px 12px", fontSize: 11, fontWeight: 700 }}>{c.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Section icon="🎯" comment="Segmentation officielle basée sur client_scores en base : la répartition réelle des 5 565 clients scorés.">
        Segmentation officielle (client_scores.segment_fidelite)
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
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
          <strong>Insight :</strong> vous avez seulement <strong>7 clients VIP officiels</strong> selon votre propre scoring. Programme VIP = les faire passer de 7 à 30 en 6 mois. Chaque VIP = ×4-8 en CA d&apos;un client normal.
        </DecisionBox>
      </div>
    </>
  );
}
