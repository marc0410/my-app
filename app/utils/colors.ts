import { C } from "@/app/data/constants";

export function clientTypeColor(type: string): string {
  if (type.includes("VIP")) return C.gold;
  if (type.includes("Anormal")) return C.red;
  if (type.includes("Récurrent")) return C.green;
  if (type.includes("premium") || type.includes("Diaspora")) return C.purple;
  return C.textMuted;
}
