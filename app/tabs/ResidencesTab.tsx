"use client";

import { C } from "@/app/data/constants";
import MetricCard from "@/app/components/MetricCard";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";
import MiniTable from "@/app/components/MiniTable";

export default function ResidencesTab() {
  return (
    <>
      <Section icon="🏘" comment="748 résidences actives, 374 supprimées (soft-delete) = 33% de churn.">Vue d&apos;ensemble</Section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <MetricCard label="Actives (deleted_at NULL)" value="748" sub="Sur 1 122 créées" status="green" />
        <MetricCard label="Supprimées (soft-delete)" value="374" sub="33% de churn côté offre" status="orange" />
        <MetricCard label="Validées" value="596" sub="80% du stock actif" status="green" />
        <MetricCard label="En attente validation" value="126" sub="17% - bottleneck admin" status="orange" />
      </div>

      <DecisionBox type="critical">
        <strong>Découverte du churn offre :</strong> 33% des résidences créées ont été supprimées (374/1 122). C&apos;est un signal fort — pourquoi les propriétaires abandonnent-ils ? Manque de résa ? Frustration ? Concurrence ? Enquête à mener sur un échantillon.
      </DecisionBox>

      <Section icon="🏠" comment="83% appartements — mais 892 users veulent des studios (type inexistant en base) !">
        Répartition par type
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
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
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
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
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
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
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
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
  );
}
