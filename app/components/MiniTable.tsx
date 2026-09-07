"use client";

import { C } from "@/app/data/constants";

interface MiniTableProps {
  headers: string[];
  rows: (string | number)[][];
  striped?: boolean;
  compact?: boolean;
}

export default function MiniTable({ headers, rows, striped, compact }: MiniTableProps) {
  return (
    <div style={{
      overflowX: "auto",
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      background: "#ffffff",
      boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
    }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: compact ? 12 : 13 }}>
        <thead>
          <tr style={{ background: C.surfaceLight }}>
            {headers.map((h, i) => (
              <th key={i} style={{
                color: C.textMuted,
                fontWeight: 700,
                textAlign: i === 0 ? "left" : "right",
                padding: compact ? "8px 12px" : "10px 14px",
                borderBottom: `1px solid ${C.border}`,
                fontSize: 11,
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                letterSpacing: 0.4,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{
              background: striped && ri % 2 ? C.surfaceLight + "40" : "transparent",
            }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  color: ci === 0 ? C.text : C.text,
                  textAlign: ci === 0 ? "left" : "right",
                  padding: compact ? "8px 12px" : "10px 14px",
                  borderBottom: ri === rows.length - 1 ? "none" : `1px solid ${C.border}`,
                  fontWeight: ci === 0 ? 600 : 700,
                  whiteSpace: "nowrap",
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
