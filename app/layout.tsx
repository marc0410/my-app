import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ImmoPlus CI — Dashboard Stratégique",
  description: "Dashboard stratégique ImmoPlus CI — 11 mois de données, KPIs, opportunités et plan d'action.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
