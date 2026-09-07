"use client";

import { C } from "@/app/data/constants";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";

export default function FeaturesTab() {
  const pFeatures = [
    { name: "Auto-close réservations zombies", priority: "P0", impact: "Nettoyer 406 résa bloquées = +36,6M FCFA de visibilité CA", effort: "2h", color: C.red },
    { name: "Ajouter type 'Studio' au catalogue", priority: "P0", impact: "892 utilisateurs attendent ce type — ROI immédiat", effort: "30 min", color: C.red },
    { name: "Fix pipeline vidéo (processing bloqué)", priority: "P0", impact: "60 vidéos bloquées → frustration créateurs", effort: "1-2 jours", color: C.red },
    { name: "SMS/WhatsApp auto après échec paiement", priority: "P1", impact: "Récupérer ~2M FCFA sur les abandons", effort: "1 jour", color: C.orange },
    { name: "Programme VIP automatisé", priority: "P1", impact: "Passer de 7 à 30 VIP en 6 mois", effort: "3 jours", color: C.orange },
    { name: "Badge 'Pro Certifié' sur les annonces", priority: "P1", impact: "Motiver le KYC — 0% certifiés actuellement", effort: "1 jour", color: C.orange },
    { name: "Ajout types Terrain/Magasin/Bureau/Entrepôt", priority: "P2", impact: "907 utilisateurs cherchent ces types", effort: "2h", color: C.gold },
    { name: "Notification push segmentée", priority: "P2", impact: "Passer de 3,5% à 15%+ de taux de lecture", effort: "3 jours", color: C.gold },
    { name: "Funnel Achat/Investissement", priority: "P3", impact: "255 users veulent acheter/investir — nouveau canal CA", effort: "2 semaines", color: C.accent },
    { name: "Décision module Hotels PMS", priority: "P3", impact: "Libérer ressources dev si kill, ou relancer", effort: "Décision", color: C.accent },
  ];

  const axe1Tracking = [
    { t: "Événementiel granulaire (user_events)", d: "Chaque clic tracké : page_view, search, filter_applied, view_property, add_favorite, contact_pro, start_booking, checkout_step, payment_start. Sans ça, impossible d'optimiser le funnel.", effort: "3 semaines", impact: "Pilotage total" },
    { t: "UTM et sources d'acquisition", d: "Ajouter acquisition_source, utm_medium, utm_campaign sur users. Champ 'Comment vous nous avez connu ?' à l'inscription. Savoir enfin ce qui rapporte.", effort: "1 semaine", impact: "ROI marketing" },
    { t: "Session recording (Hotjar/PostHog)", d: "Voir en vidéo comment les users utilisent l'app. Détecter les moments de rage-click, les abandons. Coût 100$/mois.", effort: "1 jour setup", impact: "UX insights" },
    { t: "A/B testing framework", d: "Tester 2 versions d'onboarding, de prix, de photos. Framework simple (feature_flags table). Décisions basées données au lieu d'intuition.", effort: "2 semaines", impact: "Optimisation continue" },
    { t: "Alimenter last_seen_at", d: "Middleware 5 lignes sur chaque appel authentifié. Sans ça, impossible de calculer la vraie rétention.", effort: "1 jour", impact: "Rétention mesurable" },
    { t: "Dashboard admin temps réel", d: "Retool ou Metabase branché sur la prod. Voir en direct : demandes en attente pro, échecs paiement dernière heure, alertes qualité.", effort: "1 semaine", impact: "Pilotage réactif" },
  ];

  const axe2Conversion = [
    { t: "Instant Booking (réservation immédiate)", d: "Certains hôtes acceptent la résa auto sans validation (comme Airbnb Instant Book). Élimine le bottleneck 'sans réponse pro'. Champ instant_booking_enabled EXISTE déjà en base — juste à activer côté produit.", effort: "1 semaine", impact: "+30% conv" },
    { t: "Smart matching alertes → propriétaires", d: "Quand un user crée une alerte, notifier directement les propriétaires matchant les critères. Aujourd'hui : 157 alertes en attente. Potentiel massif.", effort: "1 semaine", impact: "+150 clients/mois" },
    { t: "Retry paiement automatique + SMS", d: "Après échec, SMS 15min plus tard avec nouveau lien Wave. 80 clients perdus/mois récupérables.", effort: "3 jours", impact: "+900k FCFA/an" },
    { t: "Recommandations similaires (fallback)", d: "En cas de non-réponse pro ou de bien indisponible, montrer automatiquement 3 alternatives similaires. Sauve 70% des clients perdus.", effort: "2 semaines", impact: "+conversion" },
    { t: "Réservation groupée (multi-nuits, multi-résidences)", d: "Panier avec plusieurs résidences pour long séjour ou événement (mariage, congrès). Panier moyen ×3.", effort: "3 semaines", impact: "Panier +150%" },
    { t: "Countdown Wave visible sur écran paiement", d: "'⏱ Votre lien expire dans 28:14'. Réduit les échecs 'wave_payment_expired' (186 aujourd'hui, 9,6M FCFA de gisement).", effort: "2 jours", impact: "+3M FCFA/an" },
    { t: "Assistant IA de recherche conversationnelle", d: "« Je cherche une villa avec piscine à Cocody pour 4 personnes ce week-end » → l'IA propose 3 biens. Différenciateur fort vs concurrence.", effort: "1 mois", impact: "Différenciation" },
  ];

  const mobileClientFeatures = [
    "Onboarding avec 3 questions (ville, budget, type) → afficher 5 biens en 30s (aha moment)",
    "Feed vidéo TikTok-like pour découvrir les biens (utiliser l'infra vidéo existante)",
    "Favoris avec notif push si baisse de prix ou dispo",
    "Chat direct avec l'hôte (in-app, pas de fuite WhatsApp)",
    "Partage groupé (« Partager cette résa au groupe WhatsApp ») pour weekends entre amis",
    "Programme de parrainage : 5 000 FCFA offerts par ami parrainé qui réserve",
    "Wallet avec cashback 2% sur chaque résa pour fidéliser",
    "Historique de résa avec possibilité de rebooker en 1 clic",
  ];

  const proAppFeatures = [
    "Notifications push agressives avec son personnalisé pour nouvelles demandes",
    "Boutons 1 clic pour accepter/refuser (aujourd'hui : trop d'étapes)",
    "Calendar sync avec Google Calendar / iCal",
    "Dashboard performance mensuel envoyé par email (taux de réponse, CA, ranking)",
    "Reminders WhatsApp automatiques si non-réponse à H+2",
    "Photos avec IA : suggestion d'amélioration des photos existantes (fake staging IA)",
    "Génération auto de description via GPT à partir des photos",
    "Système de badges (Répondant express, Super hôte, Vidéo premium) pour gamifier",
    "Formation onboarding vidéo obligatoire (5 min) avant première publication",
  ];

  const axe4IA = [
    { t: "🔍 Recherche naturelle", d: "« Villa avec piscine, Cocody, 4 pers, weekend prochain » → résultats instantanés" },
    { t: "📸 Génération description IA", d: "Upload photos → GPT génère une description accrocheuse + tags SEO" },
    { t: "💰 Pricing dynamique IA", d: "Suggestion de prix optimal selon dispo marché, saison, événements" },
    { t: "🎯 Scoring qualité annonce", d: "Note automatique 0-100 chaque annonce (photos, description, prix) + suggestions" },
    { t: "📱 Assistant réservation vocal", d: "Appel dans un IVR IA pour réserver par téléphone (pour non-tech users)" },
    { t: "🌍 Traduction auto multilingue", d: "Annonces traduites automatiquement pour diaspora (français, anglais, arabe)" },
    { t: "🎨 Home Staging IA", d: "Transformer photos vides en photos meublées via IA (Runway/Stability)" },
    { t: "💬 Chatbot support intelligent", d: "Répond aux 80% de questions communes avant qu'un humain intervienne" },
    { t: "📈 Prédiction risque annulation", d: "Score de probabilité qu'une résa soit annulée → alerte préventive" },
    { t: "🎯 Matching sémantique alertes", d: "Alertes basées sur similarité de biens plutôt que critères stricts" },
  ];

  const axe5Business = [
    { t: "ImmoPlus Vérifié (badge)", d: "Programme de certification propriétaire avec inspection physique. Badge premium = +40% de résa (comme Airbnb Plus). Prix : 15 000 FCFA/an d'abonnement pro." },
    { t: "Assurance dépôt de garantie", d: "Partenariat avec un assureur pour couvrir la caution (au lieu de bloquer 50k FCFA en wallet). Commission ImmoPlus 2%." },
    { t: "Marketplace services", d: "Ménage, taxi, chef privé, gardien à la demande dans la résa. Commission 15%. Panier moyen +30%." },
    { t: "Long stay (mensuel)", d: "Négocier des tarifs mensuels pour longs séjours (étudiants, expat). Marché différent, moins de rotation, plus stable." },
    { t: "B2B corporate", d: "Compte entreprise pour héberger équipes en déplacement. Contrats annuels, volumes importants, moins de KO." },
    { t: "Programme parrainage 2 sens", d: "Parrain (client existant) : 5k FCFA. Filleul : 5k FCFA. Viralité organique." },
    { t: "Événementiel (mariages, séminaires)", d: "Location groupée de plusieurs biens pour un événement. Panier moyen ×10." },
  ];

  return (
    <>
      <Section icon="🚀" comment="Fonctionnalités à mettre en place pour (1) plus de conversion, (2) plus de data, (3) plus de différenciation. Priorisées par impact/effort.">
        Roadmap features — 5 axes stratégiques
      </Section>

      {/* SYNTHÈSE PRIORISÉE */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)", marginBottom: 24 }}>
        <div style={{ color: C.text, fontSize: 15, fontWeight: 800, marginBottom: 14 }}>⚡ P0 - P3 Quick Wins produit</div>
        {pFeatures.map((f, i) => (
          <div key={i} style={{
            padding: "12px 14px",
            borderBottom: i < pFeatures.length - 1 ? `1px solid ${C.border}` : "none",
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
          }}>
            <div style={{
              background: f.color + "15",
              color: f.color,
              padding: "4px 10px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 800,
              whiteSpace: "nowrap",
              border: `1px solid ${f.color}40`,
            }}>{f.priority}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: C.text, fontSize: 13.5, fontWeight: 700 }}>{f.name}</div>
              <div style={{ color: C.textMuted, fontSize: 12, marginTop: 3, fontWeight: 500 }}>{f.impact}</div>
            </div>
            <div style={{
              color: C.textMuted,
              fontSize: 11.5,
              fontWeight: 600,
              whiteSpace: "nowrap",
              background: C.surfaceLight,
              border: `1px solid ${C.border}`,
              padding: "4px 10px",
              borderRadius: 6,
            }}>⏱ {f.effort}</div>
          </div>
        ))}
      </div>

      {/* AXE 1 — TRACKING */}
      <Section icon="📊" comment="Ces features permettent de PILOTER (data = décisions).">
        AXE 1 — Features tracking (data pour décider)
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)", marginBottom: 24 }}>
        {axe1Tracking.map((f, i) => (
          <div key={i} style={{ padding: "14px 0", borderBottom: i < axe1Tracking.length - 1 ? `1px solid ${C.border}` : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4, alignItems: "center" }}>
              <div style={{ color: C.text, fontSize: 14, fontWeight: 700 }}>{f.t}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ background: C.greenSoft, color: C.green, fontSize: 11, padding: "3px 9px", borderRadius: 6, fontWeight: 700, border: `1px solid ${C.green}30` }}>{f.impact}</span>
                <span style={{ background: C.surfaceLight, color: C.textMuted, fontSize: 11, padding: "3px 9px", borderRadius: 6, fontWeight: 600, border: `1px solid ${C.border}` }}>{f.effort}</span>
              </div>
            </div>
            <div style={{ color: C.textMuted, fontSize: 12.5, lineHeight: 1.5, fontWeight: 500 }}>{f.d}</div>
          </div>
        ))}
      </div>

      {/* AXE 2 — CONVERSION */}
      <Section icon="💡" comment="Ces features augmentent directement les résa payées.">
        AXE 2 — Features conversion (plus de résa)
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)", marginBottom: 24 }}>
        {axe2Conversion.map((f, i) => (
          <div key={i} style={{ padding: "14px 0", borderBottom: i < axe2Conversion.length - 1 ? `1px solid ${C.border}` : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4, alignItems: "center" }}>
              <div style={{ color: C.text, fontSize: 14, fontWeight: 700 }}>{f.t}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ background: C.greenSoft, color: C.green, fontSize: 11, padding: "3px 9px", borderRadius: 6, fontWeight: 700, border: `1px solid ${C.green}30` }}>{f.impact}</span>
                <span style={{ background: C.surfaceLight, color: C.textMuted, fontSize: 11, padding: "3px 9px", borderRadius: 6, fontWeight: 600, border: `1px solid ${C.border}` }}>{f.effort}</span>
              </div>
            </div>
            <div style={{ color: C.textMuted, fontSize: 12.5, lineHeight: 1.5, fontWeight: 500 }}>{f.d}</div>
          </div>
        ))}
      </div>

      {/* AXE 3 — CIBLE */}
      <Section icon="🎯" comment="Features spécifiques par cible : Mobile client, App pro.">
        AXE 3 — Features par cible (mobile client / app pro)
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)", marginBottom: 24 }}>
        <div style={{ color: C.accent, fontSize: 14, fontWeight: 800, marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>📱 MOBILE CLIENT</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 10 }}>
          {mobileClientFeatures.map((f, i) => (
            <div key={i} style={{ padding: "8px 12px", background: C.surfaceLight, borderRadius: 8, border: `1px solid ${C.border}`, color: C.text, fontSize: 12.5, fontWeight: 600, lineHeight: 1.4 }}>
              • {f}
            </div>
          ))}
        </div>

        <div style={{ color: C.gold, fontSize: 14, fontWeight: 800, marginTop: 24, marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>💼 APP PROPRIÉTAIRES (PRO)</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 10 }}>
          {proAppFeatures.map((f, i) => (
            <div key={i} style={{ padding: "8px 12px", background: C.orangeSoft, borderRadius: 8, border: `1px solid ${C.orange}30`, color: C.text, fontSize: 12.5, fontWeight: 600, lineHeight: 1.4 }}>
              • {f}
            </div>
          ))}
        </div>
      </div>

      {/* AXE 4 — FEATURES IA */}
      <Section icon="🤖" comment="Features IA innovantes pour se différencier de la concurrence.">
        AXE 4 — Features IA & Intelligence Produit
      </Section>
      <div style={{
        background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)",
        border: `1.5px solid ${C.accent}40`,
        borderRadius: 12,
        padding: "24px",
        boxShadow: "0 2px 8px rgba(79, 70, 229, 0.06)",
        marginBottom: 24,
      }}>
        {axe4IA.map((f, i) => (
          <div key={i} style={{ padding: "12px 0", borderBottom: i < axe4IA.length - 1 ? `1px solid ${C.border}` : "none" }}>
            <div style={{ color: C.accent, fontSize: 14, fontWeight: 800, marginBottom: 3 }}>{f.t}</div>
            <div style={{ color: C.textMuted, fontSize: 12.5, fontWeight: 500, lineHeight: 1.4 }}>{f.d}</div>
          </div>
        ))}
      </div>

      {/* AXE 5 — BUSINESS */}
      <Section icon="🎁" comment="Features à effet levier fort pour accroître l'engagement et le CA.">
        AXE 5 — Innovations business & levier CA
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)", marginBottom: 24 }}>
        {axe5Business.map((f, i) => (
          <div key={i} style={{ padding: "14px 0", borderBottom: i < axe5Business.length - 1 ? `1px solid ${C.border}` : "none" }}>
            <div style={{ color: C.text, fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{f.t}</div>
            <div style={{ color: C.textMuted, fontSize: 12.5, lineHeight: 1.5, fontWeight: 500 }}>{f.d}</div>
          </div>
        ))}
      </div>

      {/* GOLDMINE RECOMMENDATION */}
      <DecisionBox type="goldmine">
        <strong>Ma recommandation top 5 features à shipper avant fin 2026 :</strong>
        <br />1. <strong>Instant Booking</strong> (déjà en base, à activer) — +30% conv immédiate
        <br />2. <strong>Ajout type &quot;Studio&quot; au catalogue</strong> — 892 users en attente
        <br />3. <strong>Retry paiement auto par SMS</strong> — +900k FCFA/an
        <br />4. <strong>Cron matching alertes → propriétaires</strong> — 157 clients à récupérer
        <br />5. <strong>Countdown Wave sur écran paiement</strong> — +3M FCFA/an
        <br /><br />
        <strong>Effort cumulé :</strong> 5 semaines de dev. <strong>Impact estimé :</strong> +10M FCFA/an de CA + 300 clients récupérés. ROI x100.
      </DecisionBox>
    </>
  );
}
