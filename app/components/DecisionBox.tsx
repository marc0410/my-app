"use client";

import { C } from "@/app/data/constants";
import { ReactNode } from "react";
import Icon from "@/app/components/Icon";

interface DecisionBoxProps {
  children: ReactNode;
  type?: "critical" | "warning" | "info" | "success" | "goldmine";
}

const colorMap = {
  critical: { bg: C.redSoft, border: C.red, icon: "AlertTriangle", label: "DÉCISION CRITIQUE" },
  warning: { bg: C.orangeSoft, border: C.orange, icon: "Zap", label: "DÉCISION URGENTE" },
  info: { bg: C.accentSoft, border: C.accent, icon: "Lightbulb", label: "À DÉCIDER" },
  success: { bg: C.greenSoft, border: C.green, icon: "CheckCircle2", label: "BONNE NOUVELLE" },
  goldmine: { bg: C.goldSoft, border: C.gold, icon: "Coins", label: "GISEMENT DE CA" },
};

export default function DecisionBox({ children, type = "info" }: DecisionBoxProps) {
  const c = colorMap[type];
  return (
    <div
      className="outline-card"
      style={{
        background: c.bg,
        border: `1px solid ${c.border}50`,
        borderLeft: `4px solid ${c.border}`,
        borderRadius: 12,
        padding: "16px 20px",
        marginTop: 16,
        marginBottom: 12,
      }}
    >
      <div style={{
        color: c.border,
        fontSize: 11.5,
        fontWeight: 800,
        marginBottom: 8,
        letterSpacing: 0.6,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}>
        <Icon name={c.icon} size={15} color={c.border} />
        <span>{c.label}</span>
      </div>
      <div style={{
        color: C.text,
        fontSize: 13.5,
        lineHeight: 1.6,
        fontWeight: 500,
      }}>{children}</div>
    </div>
  );
}
