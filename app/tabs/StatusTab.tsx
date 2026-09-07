"use client";

import { C } from "@/app/data/constants";
import { funnelData, statusMonthly } from "@/app/data/datasets";
import MetricCard from "@/app/components/MetricCard";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";
import ChartTooltip from "@/app/components/ChartTooltip";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Legend,
} from "recharts";

export default function StatusTab() {
  return (
    <>
      <Section icon="🔄" comment="1 851 demandes depuis oct 2025 — voici leur destin.">Répartition</Section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <MetricCard label="Succès (✓)" value="271" sub="14,6% — terminées + validées" status="green" />
        <MetricCard label="En cours zombies" value="406" sub="21,9% — bug de fermeture" status="red" />
        <MetricCard label="Perdues" value="1 161" sub="62,7% — le vrai problème" status="red" />
        <MetricCard label="En attente actives" value="13" sub="0,7% — nouvelles" status="orange" />
      </div>

      <Section icon="📊" comment="Distribution détaillée par statut.">Funnel réservations</Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        {funnelData.map((s, i) => {
          const color = s.cat === "good" ? C.green : s.cat === "bad" ? C.red : s.cat === "warning" ? C.orange : C.accent;
          return (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 13, color: C.text, fontWeight: 700 }}>{s.step}</span>
                <span style={{ fontSize: 12, color: C.textMuted, fontWeight: 600 }}>{s.value.toLocaleString("fr-FR")} — {s.pct}%</span>
              </div>
              <div style={{ background: C.surfaceLight, borderRadius: 6, height: 10, overflow: "hidden" }}>
                <div style={{ background: color, height: "100%", width: `${s.pct}%`, borderRadius: 6, transition: "width 1s ease-in-out" }} />
              </div>
            </div>
          );
        })}
      </div>

      <Section icon="📅" comment="Avant avril 2026, TOUT restait 'en_cours' (bug). Depuis avril, les vrais statuts apparaissent.">
        Évolution mensuelle
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "24px 16px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={statusMonthly} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="mois" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={{ stroke: C.border }} tickLine={false} />
            <YAxis tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
            <Bar dataKey="success" name="✓ Succès" stackId="a" fill={C.green} isAnimationActive={true} animationDuration={1200} />
            <Bar dataKey="en_cours" name="En cours" stackId="a" fill={C.orange} isAnimationActive={true} animationDuration={1400} />
            <Bar dataKey="pro_perte" name="Pros" stackId="a" fill={C.red} isAnimationActive={true} animationDuration={1600} />
            <Bar dataKey="client_perte" name="Clients" stackId="a" fill={C.purple} isAnimationActive={true} animationDuration={1800} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <DecisionBox type="warning">
        <strong>Bug historique corrigé partiellement en avril 2026.</strong> Il reste 406 anciennes réservations bloquées à recatégoriser. Script one-shot + cron auto-close à J+3 à mettre en place.
      </DecisionBox>
    </>
  );
}
