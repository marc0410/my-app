"use client";

import { useState } from "react";
import { C, tabs } from "@/app/data/constants";
import Icon from "@/app/components/Icon";
import OverviewTab from "@/app/tabs/OverviewTab";
import OpportunitiesTab from "@/app/tabs/OpportunitiesTab";
import TopClientsTab from "@/app/tabs/TopClientsTab";
import StatusTab from "@/app/tabs/StatusTab";
import ResidencesTab from "@/app/tabs/ResidencesTab";
import PaymentsTab from "@/app/tabs/PaymentsTab";
import OwnersTab from "@/app/tabs/OwnersTab";
import EngagementTab from "@/app/tabs/EngagementTab";
import FeaturesTab from "@/app/tabs/FeaturesTab";
import ActionsTab from "@/app/tabs/ActionsTab";
import PitchTab from "@/app/tabs/PitchTab";

export default function ImmoPlus() {
  const [tab, setTab] = useState("overview");

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* HEADER WITH OUTLINE STYLE & SVG BADGES */}
      <div style={{ background: C.surface, padding: "20px 24px", borderBottom: `1px solid ${C.border}`, boxShadow: "0 1px 2px rgba(15, 23, 42, 0.02)" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              background: C.accentSoft,
              border: `1.5px solid ${C.accent}`,
              width: 46,
              height: 46,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 18,
              color: C.accent,
              boxShadow: "0 2px 8px rgba(79, 70, 229, 0.12)",
            }}>I+</div>
            <div>
              <h1 style={{ color: C.text, fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                ImmoPlus CI — Dashboard Stratégique
              </h1>
              <div style={{ color: C.textMuted, fontSize: 12, marginTop: 2, fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                <Icon name="Activity" size={13} color={C.accent} />
                <span>11 mois d&apos;analyse · 69 tables brutes · Sept. 2026</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <div style={{ background: C.surfaceLight, border: `1px solid ${C.border}`, padding: "6px 14px", borderRadius: 10, textAlign: "center" }}>
              <div style={{ color: C.text, fontSize: 14, fontWeight: 800 }}>6 740</div>
              <div style={{ color: C.textMuted, fontSize: 10, textTransform: "uppercase", fontWeight: 700 }}>Users Actifs</div>
            </div>
            <div style={{ background: C.redSoft, border: `1px solid ${C.redBorder}`, padding: "6px 14px", borderRadius: 10, textAlign: "center" }}>
              <div style={{ color: C.red, fontSize: 14, fontWeight: 800 }}>267</div>
              <div style={{ color: C.red, fontSize: 10, textTransform: "uppercase", fontWeight: 700 }}>Users Supprimés</div>
            </div>
            <div style={{ background: C.surfaceLight, border: `1px solid ${C.border}`, padding: "6px 14px", borderRadius: 10, textAlign: "center" }}>
              <div style={{ color: C.text, fontSize: 14, fontWeight: 800 }}>748</div>
              <div style={{ color: C.textMuted, fontSize: 10, textTransform: "uppercase", fontWeight: 700 }}>Résidences</div>
            </div>
            <div style={{ background: C.greenSoft, border: `1px solid ${C.greenBorder}`, padding: "6px 14px", borderRadius: 10, textAlign: "center" }}>
              <div style={{ color: C.green, fontSize: 14, fontWeight: 800 }}>7,04M</div>
              <div style={{ color: C.green, fontSize: 10, textTransform: "uppercase", fontWeight: 700 }}>GMV FCFA</div>
            </div>
          </div>
        </div>
      </div>

      {/* OUTLINE NAVIGATION TABS WITH SVG ICONS */}
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, overflowX: "auto", whiteSpace: "nowrap", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1150, margin: "0 auto", display: "flex", gap: 8, padding: "10px 16px" }}>
          {tabs.map((t) => {
            const isActive = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{
                  background: isActive ? C.accentSoft : "transparent",
                  color: isActive ? C.accent : C.textMuted,
                  border: isActive ? `1.5px solid ${C.accent}` : `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: "8px 14px",
                  fontSize: 12.5,
                  fontWeight: isActive ? 700 : 600,
                  cursor: "pointer",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  whiteSpace: "nowrap",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  boxShadow: isActive ? "0 2px 6px rgba(79, 70, 229, 0.1)" : "none",
                }}>
                <Icon name={t.icon} size={15} color={isActive ? C.accent : C.textMuted} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB CONTENT CONTAINER WITH ANIMATED ENTRANCE */}
      <div style={{ maxWidth: 1150, margin: "0 auto", padding: "20px 20px 60px" }}>
        <div key={tab} className="tab-content-enter">
          {tab === "overview" && <OverviewTab />}
          {tab === "opportunities" && <OpportunitiesTab />}
          {tab === "topclients" && <TopClientsTab />}
          {tab === "status" && <StatusTab />}
          {tab === "residences" && <ResidencesTab />}
          {tab === "payments" && <PaymentsTab />}
          {tab === "owners" && <OwnersTab />}
          {tab === "engagement" && <EngagementTab />}
          {tab === "features" && <FeaturesTab />}
          {tab === "actions" && <ActionsTab />}
          {tab === "pitch" && <PitchTab />}
        </div>
      </div>
    </div>
  );
}
