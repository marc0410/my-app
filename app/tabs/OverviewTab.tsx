"use client";

import { C } from "@/app/data/constants";
import { gmvData } from "@/app/data/datasets";
import MetricCard from "@/app/components/MetricCard";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";
import ChartTooltip from "@/app/components/ChartTooltip";
import {
  ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Cell,
} from "recharts";

export default function OverviewTab() {
  return (
    <>
      <Section icon="📊" comment="Photo instantanée après 11 mois — sur données brutes SQL, y compris soft-deletes.">État réel</Section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <MetricCard label="Utilisateurs actifs" value="6 740" sub="267 supprimés (soft-delete)" status="green" />
        <MetricCard label="Résidences actives" value="748" sub="374 supprimées (33%)" status="orange" comment="Churn important côté offre" />
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
        <strong>La vraie histoire :</strong> ImmoPlus a un CA réel de 7M mais une demande latente estimée à <strong style={{ color: C.gold }}>120M FCFA</strong>. Le problème n&apos;est pas l&apos;acquisition, c&apos;est le matching offre/demande. 5 767 utilisateurs ont exprimé leurs préférences géographiques et 82% cherchent dans des communes où il n&apos;y a AUCUNE résidence. Voir l&apos;onglet Opportunités.
      </DecisionBox>

      <Section icon="🚨" comment="Actions à traiter cette semaine — chaque jour de retard coûte de l'argent.">Les 8 alertes rouges consolidées</Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
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
          <div key={i} style={{ padding: "12px 0", borderBottom: i < 7 ? `1px solid ${C.border}` : "none", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ background: C.red, color: "#fff", width: 24, height: 24, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
            <div>
              <div style={{ color: C.text, fontSize: 13, fontWeight: 700 }}>{item.t}</div>
              <div style={{ color: C.textMuted, fontSize: 12, marginTop: 3, fontWeight: 500 }}>{item.d}</div>
            </div>
          </div>
        ))}
      </div>

      <Section icon="📈" comment="Croissance GMV en kFCFA avec animation sur les courbes. Fév = point de bascule.">Courbe GMV & Réservations</Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "24px 16px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <ResponsiveContainer width="100%" height={260}>
          <ComposedChart data={gmvData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="mois" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={{ stroke: C.border }} tickLine={false} />
            <YAxis yAxisId="left" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="right" orientation="right" tick={{ fill: C.textMuted, fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} />
            <Bar yAxisId="left" dataKey="gmv" name="GMV (kFCFA)" radius={[6, 6, 0, 0]} isAnimationActive={true} animationDuration={1200}>
              {gmvData.map((_, i) => <Cell key={i} fill={i >= 4 ? C.accent : C.border} />)}
            </Bar>
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="resa"
              name="Nb résa"
              stroke={C.gold}
              strokeWidth={3.5}
              dot={{ fill: "#ffffff", stroke: C.gold, strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8, stroke: C.gold, strokeWidth: 3, fill: "#ffffff" }}
              isAnimationActive={true}
              animationDuration={1800}
              animationEasing="ease-in-out"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
