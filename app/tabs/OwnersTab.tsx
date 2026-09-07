"use client";

import { C } from "@/app/data/constants";
import MetricCard from "@/app/components/MetricCard";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";
import MiniTable from "@/app/components/MiniTable";

export default function OwnersTab() {
  return (
    <>
      <Section icon="🏠" comment="Le CA perdu par les propriétaires dépasse le CA réalisé.">
        Diagnostic propriétaires
      </Section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <MetricCard label="CA perdu (sans réponse)" value="29,5M" sub="FCFA sur 365 demandes" status="red" />
        <MetricCard label="Clients perdus après KO" value="70,2%" sub="221 partent définitivement" status="red" />
        <MetricCard label="Réponse < 1h → conv" value="31,6%" sub="vs 3,3% si > 6h (10×)" status="green" />
        <MetricCard label="KYC 'en progression'" value="100%" sub="1 171 pros / 1 171 non certifiés" status="red" comment="Processus cassé" />
      </div>

      <DecisionBox type="critical">
        <strong>KYC totalement cassé :</strong> 1 171 propriétaires ont une certification, 100% sont en statut &quot;en_progression&quot;. AUCUN n&apos;est certifié. Soit le processus est trop compliqué, soit personne ne le finit. Investigation nécessaire.
      </DecisionBox>

      <Section icon="📞" comment="5 appels = potentiellement 13,3M FCFA récupérés.">
        Top propriétaires CA perdu
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
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

      <Section icon="📊" comment="Activité des propriétaires sur la plateforme.">
        Engagement propriétaires
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <MiniTable
          headers={["Niveau", "Nb propriétaires", "%", "Action"]}
          rows={[
            ["Très actif (répond < 1h)", "45", "3,8%", "Récompenser"],
            ["Actif (répond < 24h)", "180", "15,4%", "Maintenir"],
            ["Lent (répond > 24h)", "320", "27,3%", "Former"],
            ["Inactif (ne répond pas)", "365", "31,2%", "Relancer"],
            ["Fantôme (0 résidence)", "261", "22,3%", "Réactiver ou supprimer"],
          ]}
          striped
        />
      </div>

      <DecisionBox type="warning">
        <strong>53,5% des propriétaires sont inactifs ou fantômes.</strong> Plan : (1) campagne SMS ciblée sur les 365 inactifs, (2) call direct top 10 non-répondants, (3) onboarding automatisé avec tutoriel vidéo pour les nouveaux inscrits.
      </DecisionBox>
    </>
  );
}
