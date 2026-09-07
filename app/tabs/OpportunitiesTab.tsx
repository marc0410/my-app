"use client";

import { C } from "@/app/data/constants";
import { demandOfferGap, typeGap, intentsData } from "@/app/data/datasets";
import MetricCard from "@/app/components/MetricCard";
import Section from "@/app/components/Section";
import DecisionBox from "@/app/components/DecisionBox";
import MiniTable from "@/app/components/MiniTable";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function OpportunitiesTab() {
  return (
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
        <strong>Le calcul :</strong> les 22 communes suivantes ont un ratio &quot;demande/offre&quot; &gt; 5. Si vous recrutez ne serait-ce que 3 résidences par commune sous-servie (soit ~60 nouvelles annonces), et que chacune fait le panier moyen actuel (26k × 4 résa/an), c&apos;est <strong style={{ color: C.gold }}>+6,2M FCFA de GMV annuel</strong> — juste en équilibrant l&apos;offre là où la demande existe déjà.
      </DecisionBox>

      <Section icon="🎯" comment="Chaque ligne = une opportunité de recrutement propriétaire. Trié par priorité d'action.">
        Demande vs Offre par commune (22 principales)
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", overflowX: "auto", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: C.surfaceLight }}>
              {["Commune", "Demande", "Offre", "Ratio", "Priorité", "Action"].map((h, i) => (
                <th key={i} style={{ color: C.textMuted, fontWeight: 700, textAlign: i === 0 || i === 5 ? "left" : "right", padding: "10px 12px", borderBottom: `1px solid ${C.border}`, fontSize: 11, textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {demandOfferGap.map((d, i) => (
              <tr key={d.commune} style={{ background: i % 2 ? C.surfaceLight + "40" : "transparent" }}>
                <td style={{ color: C.text, textAlign: "left", padding: "10px 12px", fontWeight: 700 }}>{d.commune}</td>
                <td style={{ color: C.purple, textAlign: "right", padding: "10px 12px", fontWeight: 800 }}>{d.demand}</td>
                <td style={{ color: d.offer === 0 ? C.red : C.text, textAlign: "right", padding: "10px 12px", fontWeight: 600 }}>{d.offer}</td>
                <td style={{ color: d.ratio === "∞" ? C.red : parseFloat(d.ratio) > 50 ? C.red : parseFloat(d.ratio) > 10 ? C.orange : parseFloat(d.ratio) > 5 ? C.gold : C.green, textAlign: "right", padding: "10px 12px", fontWeight: 800 }}>×{d.ratio}</td>
                <td style={{ color: C.text, textAlign: "right", padding: "10px 12px", fontSize: 11, fontWeight: 600 }}>{d.priority}</td>
                <td style={{ color: C.textMuted, textAlign: "left", padding: "10px 12px", fontSize: 11, fontWeight: 500 }}>
                  {d.offer === 0 ? "Recruter 3-5 hôtes" : parseFloat(d.ratio) > 20 ? "Recruter 5-10 hôtes" : parseFloat(d.ratio) > 5 ? "Ajouter 2-3 hôtes" : "Suffisant"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Section icon="🏗" comment="Découverte majeure : 892 utilisateurs veulent des STUDIOS et le type n'existe pas en base. Idem pour Terrain/Magasin/Bureau/Entrepôt.">
        Demande vs Offre par TYPE de bien
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <MiniTable
          headers={["Type demandé", "Demande", "Offre", "Gap", "Commentaire"]}
          rows={typeGap.map(t => [
            t.type,
            t.demand.toLocaleString("fr-FR"),
            t.offer.toLocaleString("fr-FR"),
            t.gap.toLocaleString("fr-FR"),
            t.comment,
          ])}
          striped
        />
        <DecisionBox type="critical">
          <strong>Type Studio = potentiel énorme perdu :</strong> 892 utilisateurs veulent des studios. Coût de développement : ajouter &quot;studio&quot; au enum property_types + former les proprios existants à repositionner leurs petits appartements en studios. ROI immédiat. Le marché étudiant/jeune actif ivoirien est clairement là.
        </DecisionBox>
      </div>

      <Section icon="🎯" comment="La ventilation du 'pourquoi' des utilisateurs : 84% viennent pour louer.">
        Intentions déclarées des utilisateurs
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ width: 200, height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={intentsData} dataKey="nb" nameKey="intent" cx="50%" cy="50%" innerRadius={45} outerRadius={85} paddingAngle={3} isAnimationActive={true} animationDuration={1400}>
                  {intentsData.map((s, i) => <Cell key={i} fill={s.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            {intentsData.map(i => (
              <div key={i.intent} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${C.border}` }}>
                <span style={{ color: C.text, fontSize: 14, fontWeight: 700 }}>{i.intent}</span>
                <span style={{ color: i.color, fontSize: 16, fontWeight: 800 }}>{i.nb}</span>
              </div>
            ))}
          </div>
        </div>
        <DecisionBox type="info">
          <strong>Opportunité produit :</strong> 151 users veulent &quot;Investir&quot; et 104 veulent &quot;Acheter&quot;. ImmoPlus est positionné 100% location courte durée. Créer un funnel dédié &quot;achat / investissement&quot; (mise en relation avec des agents partenaires, commission de 1-2% sur transaction) = potentiel large.
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
        <strong>3 options pour les Hotels :</strong> (1) <strong>Killer la feature</strong> (récupérer les ressources dev), (2) <strong>Pivoter</strong> vers un modèle qui marche (guesthouses au lieu d&apos;hôtels traditionnels — plus adapté au marché CI), (3) <strong>Relancer</strong> avec un vrai commercial dédié qui signe 10 hôtels. Décision à prendre : cette feature coûte du dev et n&apos;apporte pas de CA.
      </DecisionBox>

      <Section icon="🌍" comment="Les villes à explorer pour l'expansion nationale, basées sur la demande latente.">
        Villes non-Abidjan à prioriser (expansion nationale)
      </Section>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
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
          <strong>Stratégie d&apos;expansion :</strong> avant de partir à Dakar/Lomé, densifiez CI. Yamoussoukro, Bouaké et Jacqueville ont un ratio demande/offre &gt; 7. Recruter 10 propriétaires par ville = 30 nouvelles annonces qui trouveront leur clientèle immédiatement.
        </DecisionBox>
      </div>
    </>
  );
}
