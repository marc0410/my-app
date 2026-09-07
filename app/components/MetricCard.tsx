"use client";

import { C } from "@/app/data/constants";
import Icon from "@/app/components/Icon";

interface MetricCardProps {
  label: string;
  value: string;
  sub?: string;
  status?: string;
  comment?: string;
}

export default function MetricCard({ label, value, sub, status, comment }: MetricCardProps) {
  const borderColor =
    status === "red" ? C.red :
    status === "orange" ? C.orange :
    status === "green" ? C.green :
    status === "purple" ? C.purple :
    status === "gold" ? C.gold :
    C.accent;

  const bgTint =
    status === "red" ? C.redSoft :
    status === "orange" ? C.orangeSoft :
    status === "green" ? C.greenSoft :
    status === "purple" ? C.purpleSoft :
    C.surface;

  return (
    <div
      className="outline-card"
      style={{
        background: bgTint,
        border: `1px solid ${C.border}`,
        borderLeft: `4px solid ${borderColor}`,
        borderRadius: 12,
        padding: "18px 22px",
        flex: "1 1 210px",
        minWidth: 190,
      }}
    >
      <div style={{
        color: C.textMuted,
        fontSize: 11,
        marginBottom: 8,
        letterSpacing: 0.5,
        fontWeight: 700,
        textTransform: "uppercase",
      }}>{label}</div>
      <div style={{
        color: C.text,
        fontSize: 28,
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
      }}>{value}</div>
      {sub && (
        <div style={{ color: C.textMuted, fontSize: 12, marginTop: 6, fontWeight: 500 }}>{sub}</div>
      )}
      {comment && (
        <div style={{
          color: borderColor,
          fontSize: 11.5,
          marginTop: 10,
          fontWeight: 700,
          lineHeight: 1.4,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}>
          <Icon name="Lightbulb" size={13} color={borderColor} />
          <span>{comment}</span>
        </div>
      )}
    </div>
  );
}
