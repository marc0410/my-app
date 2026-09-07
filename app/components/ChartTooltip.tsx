"use client";

import { C } from "@/app/data/constants";

interface ChartTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
  unit?: string;
}

export default function ChartTooltip({ active, payload, label, unit }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#ffffff",
      border: `1px solid ${C.border}`,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      padding: "10px 14px",
      borderRadius: 8,
      fontSize: 12,
    }}>
      <div style={{ color: C.textMuted, marginBottom: 4, fontWeight: 600 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color || C.text, fontWeight: 700, margin: "2px 0" }}>
          {p.name}: {typeof p.value === "number" ? p.value.toLocaleString("fr-FR") : p.value}{unit || ""}
        </div>
      ))}
    </div>
  );
}
