"use client";

import { C } from "@/app/data/constants";
import { videoStats, notifBreakdown } from "@/app/data/datasets";
import MetricCard from "@/app/components/MetricCard";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";
import MiniTable from "@/app/components/MiniTable";

export default function EngagementTab() {
  return (
    <>
      <Section icon="📱" comment="L'engagement produit — vidéos, notifications, chat AI, alertes.">
        Engagement plateforme
      </Section>

      {/* FEED VIDÉO */}
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
        <strong>Feature vidéo à réanimer :</strong> (1) débloquer les 60 vidéos coincées en processing, (2) seul 12% des résidences ont une vidéo → obliger les propriétaires à en uploader (badge &quot;Résidence avec vidéo&quot; → +30% de conversion prouvé sur Airbnb), (3) pousser le feed vidéo comme nouvelle acquisition (TikTok-like pour l&apos;immobilier CI).
      </DecisionBox>

      {/* NOTIFICATIONS */}
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
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <MiniTable
          headers={["Type notification", "Nb envoyées"]}
          rows={notifBreakdown.map(n => [n.subject, n.nb.toLocaleString("fr-FR")])}
          striped
          compact
        />
        <DecisionBox type="critical">
          <strong>Le vrai problème :</strong> 8 842 notifs &quot;Nouvelle réservation à valider&quot; envoyées aux propriétaires, mais très peu lues. Ce n&apos;est pas un problème de contenu — c&apos;est un problème de canal (email spam ? push non activé ? SMS non facturé ?). Priorité absolue : forcer l&apos;activation des notifications push à l&apos;onboarding, doubler avec SMS pour les demandes critiques.
        </DecisionBox>
      </div>

      {/* CHAT AI ASSISTANT */}
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
        <strong>Opportunité IA :</strong> le chatbot actuel n&apos;est utilisé qu&apos;à sens unique (bot informe, user ne répond pas). Le pivoter en un vrai assistant conversationnel (recherche de bien, comparaison de prix, conseil quartier) pourrait débloquer l&apos;engagement. LLM + RAG sur votre catalogue = MVP en 3 semaines.
      </DecisionBox>

      {/* ALERTES RECHERCHE */}
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
        <strong>157 clients ignorés :</strong> ces gens ont explicitement dit &quot;je veux un bien avec X caractéristiques&quot; et n&apos;ont RIEN reçu. Cron quotidien de matching = quick win énorme.
      </DecisionBox>
    </>
  );
}
