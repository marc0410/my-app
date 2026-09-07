"use client";

import { C } from "@/app/data/constants";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";
import MetricCard from "@/app/components/MetricCard";
import MiniTable from "@/app/components/MiniTable";

export default function PitchTab() {
  const pitchMetrics = [
    { n: "7,04M", u: "FCFA GMV", d: "en 11 mois, sans levée" },
    { n: "×7", u: "croissance", d: "sur les 6 derniers mois" },
    { n: "6 740", u: "users actifs", d: "10 villes CI" },
    { n: "748", u: "résidences", d: "234 pros actifs" },
    { n: "44 294", u: "FCFA LTV", d: "moyen client actif" },
    { n: "4,33/5", u: "satisfaction", d: "sur 36 avis" },
    { n: "7%", u: "commission", d: "modèle marketplace" },
    { n: "0", u: "FCFA de pub", d: "100% organique" },
  ];

  return (
    <>
      <Section icon="🎤" comment="Les chiffres clés et la thèse d'investissement.">
        Chiffres pitch-ready
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
          {pitchMetrics.map((m) => (
            <div key={m.u} style={{ padding: "14px 16px", background: C.surfaceLight, borderRadius: 10, border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ color: C.text, fontSize: 24, fontWeight: 800 }}>{m.n}</span>
                <span style={{ color: C.accent, fontSize: 12, fontWeight: 700 }}>{m.u}</span>
              </div>
              <div style={{ color: C.textMuted, fontSize: 11.5, marginTop: 4, fontWeight: 500 }}>{m.d}</div>
            </div>
          ))}
        </div>
      </div>

      <Section icon="🎯" comment="Preuve d'amélioration continue du produit.">
        Preuve de l&apos;apprentissage (le meilleur argument)
      </Section>
      <div style={{
        background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)",
        border: `1.5px solid ${C.accent}40`,
        borderRadius: 12,
        padding: "28px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(79, 70, 229, 0.06)",
      }}>
        <div style={{ color: C.textMuted, fontSize: 13, marginBottom: 12, fontWeight: 600 }}>Taux d&apos;activation par cohorte</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30, flexWrap: "wrap" }}>
          <div>
            <div style={{ color: C.red, fontSize: 42, fontWeight: 800 }}>9,7%</div>
            <div style={{ color: C.textMuted, fontSize: 12, fontWeight: 600 }}>Cohorte déc. 2025</div>
          </div>
          <div style={{ color: C.textMuted, fontSize: 28, fontWeight: 700 }}>→</div>
          <div>
            <div style={{ color: C.green, fontSize: 42, fontWeight: 800 }}>30,4%</div>
            <div style={{ color: C.green, fontSize: 12, fontWeight: 700 }}>Cohorte août 2026</div>
          </div>
        </div>
        <div style={{ color: C.text, fontSize: 13.5, marginTop: 16, fontWeight: 600 }}>
          Taux d&apos;activation <strong style={{ color: C.green }}>×3 en 8 mois</strong>.<br />
          Ce que nous faisons fonctionne.
        </div>
      </div>

      <Section icon="💰" comment="Argument tueur d'opportunité marché.">
        Argument tueur : le gisement caché
      </Section>
      <div style={{ background: C.surface, border: `1.5px solid ${C.gold}60`, borderRadius: 12, padding: "28px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <div style={{ color: C.gold, fontSize: 12, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase", fontWeight: 800 }}>💰 GISEMENT CACHÉ</div>
        <div style={{ color: C.text, fontSize: 16, fontWeight: 600, lineHeight: 1.6 }}>
          Nous avons <strong style={{ color: C.gold }}>5 767 utilisateurs</strong> qui ont déclaré leurs préférences de localisation et de budget. <strong style={{ color: C.gold }}>82% cherchent dans des communes où il n&apos;y a AUCUNE résidence disponible</strong>.
          <br /><br />
          Notre problème n&apos;est pas de trouver la demande — nous l&apos;avons.
          <br />
          Notre problème est de trouver l&apos;offre pour la satisfaire.
          <br /><br />
          <span style={{ color: C.green, fontWeight: 700 }}>Un capital pour recruter des propriétaires dans 10 communes sous-servies = +6M FCFA de GMV mensuel garanti.</span>
        </div>
      </div>

      <Section icon="💡" comment="Le message clé en une phrase.">
        Le one-liner
      </Section>
      <div style={{ background: C.surface, border: `1.5px solid ${C.accent}40`, borderRadius: 12, padding: "28px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <div style={{ color: C.accent, fontSize: 12, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase", fontWeight: 800 }}>Message clé</div>
        <div style={{ color: C.text, fontSize: 18, fontWeight: 700, lineHeight: 1.6, fontStyle: "italic" }}>
          « ImmoPlus, c&apos;est le rail de paiement et de confiance qui manque à l&apos;immobilier ouest-africain. En 11 mois, sans un franc de pub, nous avons prouvé que le marché existe. Nous demandons du capital pour scaler ce qui marche déjà. »
        </div>
      </div>

      <Section icon="🔮" comment="Trajectoire de croissance sur 18 mois.">
        Vision 18 mois
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
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

      <DecisionBox type="goldmine">
        <strong>Le pitch en 1 phrase :</strong> ImmoPlus a prouvé le Product-Market Fit avec 7M FCFA de transactions en 11 mois et 0€ de pub, sur un marché avec <strong style={{ color: C.gold }}>120M FCFA de demande latente identifiée</strong>. Nous avons besoin de capital pour équilibrer l&apos;offre là où la demande existe déjà.
      </DecisionBox>
    </>
  );
}
