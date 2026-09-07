"use client";

import { C } from "@/app/data/constants";
import { ReactNode } from "react";
import Icon from "@/app/components/Icon";

interface SectionProps {
  children: ReactNode;
  icon: string;
  comment?: string;
}

export default function Section({ children, icon, comment }: SectionProps) {
  return (
    <div style={{ margin: "36px 0 16px" }}>
      <h2 style={{
        color: C.text,
        fontSize: 19,
        fontWeight: 800,
        margin: 0,
        display: "flex",
        alignItems: "center",
        gap: 12,
        letterSpacing: "-0.01em",
      }}>
        <span className="icon-badge" style={{
          background: C.accentSoft,
          border: `1.5px solid ${C.accentBorder}`,
          color: C.accent,
          padding: "6px 9px",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 1px 2px rgba(79, 70, 229, 0.08)",
        }}>
          <Icon name={icon} size={19} color={C.accent} />
        </span>
        <span>{children}</span>
      </h2>
      {comment && (
        <div style={{
          color: C.textMuted,
          fontSize: 13,
          marginTop: 6,
          fontWeight: 500,
          lineHeight: 1.5,
          paddingLeft: 42,
        }}>{comment}</div>
      )}
    </div>
  );
}
