"use client";

import { C } from "@/app/data/constants";
import MetricCard from "@/app/components/MetricCard";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";

export default function PaymentsTab() {
  return (
    <>
      <Section icon="💳" comment="Diagnostic paiements.">Vue paiements</Section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <MetricCard label="Paiements réussis" value="302" sub="7,3M FCFA" status="green" />
        <MetricCard label="Paiements KO" value="253" sub="13,4M FCFA — presque 2×" status="red" />
        <MetricCard label="Cause #1" value="Wave expiré" sub="186 cas · 9,6M FCFA" status="red" />
        <MetricCard label="Retry post-KO" value="68%" sub="107 finissent par payer" status="orange" />
      </div>

      <Section icon="📱" comment="Orange à 82,7% d'échec !">Fiabilité par méthode</Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        {[
          { m: "Wave", succes: 278, echecs: 188, taux: 40.3 },
          { m: "Orange", succes: 9, echecs: 43, taux: 82.7 },
          { m: "MTN", succes: 3, echecs: 13, taux: 81.3 },
          { m: "Moov", succes: 12, echecs: 9, taux: 42.9 },
        ].map((m) => (
          <div key={m.m} style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ color: C.text, fontSize: 14, fontWeight: 700 }}>{m.m}</span>
              <span style={{ color: m.taux > 60 ? C.red : m.taux > 40 ? C.orange : C.green, fontSize: 14, fontWeight: 800 }}>{m.taux}% échec</span>
            </div>
            <div style={{ display: "flex", height: 24, borderRadius: 6, overflow: "hidden" }}>
              <div style={{ width: `${100 - m.taux}%`, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700 }}>{m.succes} Succès</div>
              <div style={{ width: `${m.taux}%`, background: C.red, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700 }}>{m.echecs} KO</div>
            </div>
          </div>
        ))}
      </div>

      <DecisionBox type="critical">
        <strong>Orange Money et MTN MoMo :</strong> plus de 80% d&apos;échec chacun. Ces opérateurs sont probablement mal intégrés ou le timeout est trop court. Investiguer avec le prestataire de paiement (CinetPay ?) en urgence. Chaque paiement sauvé = CA immédiat.
      </DecisionBox>

      <Section icon="🔁" comment="La bonne nouvelle : 68% des échecs finissent par réessayer et payer.">
        Comportement post-échec
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 200, padding: 18, background: C.greenSoft, borderRadius: 10, border: `1px solid ${C.green}40`, borderLeft: `4px solid ${C.green}` }}>
            <div style={{ color: C.green, fontSize: 26, fontWeight: 800 }}>68%</div>
            <div style={{ color: C.text, fontSize: 13, marginTop: 4, fontWeight: 700 }}>des users réessaient et paient</div>
            <div style={{ color: C.textMuted, fontSize: 12, marginTop: 4, fontWeight: 500 }}>107 sur 157 retentent</div>
          </div>
          <div style={{ flex: 1, minWidth: 200, padding: 18, background: C.redSoft, borderRadius: 10, border: `1px solid ${C.red}40`, borderLeft: `4px solid ${C.red}` }}>
            <div style={{ color: C.red, fontSize: 26, fontWeight: 800 }}>32%</div>
            <div style={{ color: C.text, fontSize: 13, marginTop: 4, fontWeight: 700 }}>abandonnent définitivement</div>
            <div style={{ color: C.textMuted, fontSize: 12, marginTop: 4, fontWeight: 500 }}>~50 réservations perdues</div>
          </div>
        </div>
      </div>

      <DecisionBox type="warning">
        <strong>Action immédiate :</strong> Envoyer un SMS/WhatsApp automatique 15 min après chaque échec de paiement avec un lien de retry. Potentiel de récupération estimé : <strong style={{ color: C.gold }}>+2M FCFA</strong> sur les 50 abandons définitifs.
      </DecisionBox>
    </>
  );
}
