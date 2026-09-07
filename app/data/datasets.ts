import { C } from "./constants";

// ============ GMV DATA ============
export const gmvData = [
  { mois: "Oct 25", gmv: 5, resa: 30, users: 17 },
  { mois: "Nov", gmv: 2, resa: 10, users: 75 },
  { mois: "Déc", gmv: 1, resa: 4, users: 207 },
  { mois: "Jan 26", gmv: 1, resa: 5, users: 955 },
  { mois: "Fév", gmv: 281, resa: 9, users: 932 },
  { mois: "Mar", gmv: 347, resa: 10, users: 1530 },
  { mois: "Avr", gmv: 302, resa: 7, users: 883 },
  { mois: "Mai", gmv: 1372, resa: 33, users: 653 },
  { mois: "Jun", gmv: 1169, resa: 44, users: 828 },
  { mois: "Jul", gmv: 1541, resa: 49, users: 545 },
  { mois: "Aoû", gmv: 2002, resa: 69, users: 372 },
];

// ============ TOP 31 CLIENTS ============
export const top31Clients = [
  { rank: 1, name: "DIBY AMAFOU PIERRE STEPHANE", tel: "+225 07 79 44 19 65", resa: 1, ca: 400000, panier: 400000, type: "One-shot premium" },
  { rank: 2, name: "Kobena Abissa Vincent", tel: "+225 07 77 02 80 65", resa: 6, ca: 386000, panier: 64333, type: "VIP fidèle" },
  { rank: 3, name: "Jamiu Sulaiman", tel: "+225 07 69 26 14 80", resa: 1, ca: 300000, panier: 300000, type: "One-shot premium" },
  { rank: 4, name: "Yeboua Kacou Luc Samuel", tel: "+225 07 08 76 06 72", resa: 1, ca: 220000, panier: 220000, type: "One-shot premium" },
  { rank: 5, name: "Ghislain Kouassi", tel: "+1 651 434 2494", resa: 1, ca: 200000, panier: 200000, type: "Diaspora premium" },
  { rank: 6, name: "Djanman Koffi Désiré", tel: "+225 07 57 13 11 60", resa: 3, ca: 165000, panier: 55000, type: "Récurrent" },
  { rank: 7, name: "OUATTARA Abdoulaye", tel: "+225 07 78 74 20 57", resa: 2, ca: 165000, panier: 82500, type: "Récurrent" },
  { rank: 8, name: "Traore Lognigue", tel: "+225 07 89 74 76 16", resa: 1, ca: 160000, panier: 160000, type: "One-shot premium" },
  { rank: 9, name: "Klutsé Koffi Lionel", tel: "+225 07 47 45 96 21", resa: 1, ca: 151000, panier: 151000, type: "One-shot premium" },
  { rank: 10, name: "Kone Idriss", tel: "+225 07 67 56 41 60", resa: 1, ca: 150000, panier: 150000, type: "One-shot premium" },
  { rank: 11, name: "David Konan", tel: "+225 01 41 69 26 40", resa: 6, ca: 130000, panier: 21667, type: "VIP fidèle" },
  { rank: 12, name: "Diallo Esther", tel: "+225 07 58 52 47 31", resa: 2, ca: 130000, panier: 65000, type: "Récurrent" },
  { rank: 13, name: "Gbeyo Aristophane", tel: "+225 07 88 06 64 66", resa: 2, ca: 120000, panier: 60000, type: "Récurrent" },
  { rank: 14, name: "VOUNKI Olivia", tel: "+225 01 60 61 51 45", resa: 4, ca: 120000, panier: 30000, type: "VIP fidèle" },
  { rank: 15, name: "KOUA BEIRA", tel: "+225 07 48 55 92 55", resa: 4, ca: 102500, panier: 25625, type: "VIP fidèle" },
  { rank: 16, name: "Mariam Traore", tel: "+225 07 99 08 49 00", resa: 4, ca: 100000, panier: 25000, type: "VIP fidèle" },
  { rank: 17, name: "Boris Patrick", tel: "+225 07 79 50 31 10", resa: 3, ca: 100000, panier: 33333, type: "Récurrent" },
  { rank: 18, name: "N'Guessan Ulrich", tel: "+225 05 75 26 43 43", resa: 1, ca: 100000, panier: 100000, type: "One-shot premium" },
  { rank: 19, name: "Joël Nery", tel: "+225 07 79 92 14 65", resa: 1, ca: 90000, panier: 90000, type: "One-shot" },
  { rank: 20, name: "Marina Poli", tel: "+225 05 00 41 38 58", resa: 1, ca: 90000, panier: 90000, type: "One-shot" },
  { rank: 21, name: "Traore Ali", tel: "+225 07 07 90 27 70", resa: 1, ca: 90000, panier: 90000, type: "One-shot" },
  { rank: 22, name: "Marius Ouattara", tel: "+225 07 57 37 64 16", resa: 1, ca: 80000, panier: 80000, type: "One-shot" },
  { rank: 23, name: "Assoko Moune", tel: "+225 07 47 76 44 71", resa: 36, ca: 78100, panier: 2169, type: "⚠️ Anormal" },
  { rank: 24, name: "AKPA Patrick", tel: "+225 07 48 09 46 72", resa: 1, ca: 75000, panier: 75000, type: "One-shot" },
  { rank: 25, name: "Mahamadou Abdoul Rahaman", tel: "+225 07 79 01 85 67", resa: 2, ca: 75000, panier: 37500, type: "Récurrent" },
  { rank: 26, name: "Djiga Lion", tel: "+225 05 02 31 55 37", resa: 1, ca: 75000, panier: 75000, type: "One-shot" },
  { rank: 27, name: "BATOUA Alphonse", tel: "+225 07 07 30 16 68", resa: 1, ca: 70000, panier: 70000, type: "One-shot" },
  { rank: 28, name: "Kouassi Nathan", tel: "+225 07 03 50 92 18", resa: 2, ca: 70000, panier: 35000, type: "Récurrent" },
  { rank: 29, name: "Maiga Al-Hassane Médhy", tel: "+225 05 74 31 55 22", resa: 1, ca: 70000, panier: 70000, type: "One-shot" },
  { rank: 30, name: "Prunelle Miensah", tel: "+225 07 07 54 01 04", resa: 2, ca: 65000, panier: 32500, type: "Récurrent" },
  { rank: 31, name: "Kone Ange Élodie", tel: "+225 05 44 89 47 26", resa: 1, ca: 60000, panier: 60000, type: "One-shot" },
];

// ============ STATUS EVOLUTION ============
export const statusMonthly = [
  { mois: "Oct 25", en_cours: 49, success: 30, client_perte: 0, pro_perte: 0 },
  { mois: "Nov", en_cours: 28, success: 10, client_perte: 0, pro_perte: 0 },
  { mois: "Déc", en_cours: 27, success: 4, client_perte: 0, pro_perte: 0 },
  { mois: "Jan 26", en_cours: 63, success: 5, client_perte: 0, pro_perte: 0 },
  { mois: "Fév", en_cours: 94, success: 9, client_perte: 0, pro_perte: 0 },
  { mois: "Mar", en_cours: 145, success: 10, client_perte: 1, pro_perte: 2 },
  { mois: "Avr", en_cours: 0, success: 7, client_perte: 30, pro_perte: 75 },
  { mois: "Mai", en_cours: 0, success: 33, client_perte: 92, pro_perte: 111 },
  { mois: "Jun", en_cours: 0, success: 44, client_perte: 187, pro_perte: 88 },
  { mois: "Jul", en_cours: 0, success: 49, client_perte: 135, pro_perte: 136 },
  { mois: "Aoû", en_cours: 0, success: 69, client_perte: 152, pro_perte: 152 },
];

// ============ DEMAND vs OFFER GAP ============
export const demandOfferGap = [
  { commune: "Adjamé", demand: 223, offer: 1, ratio: "223", priority: "🔥 Extrême" },
  { commune: "Akoupé", demand: 171, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Treichville", demand: 161, offer: 1, ratio: "161", priority: "🔥 Extrême" },
  { commune: "Agboville", demand: 134, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Aboisso", demand: 133, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Agban", demand: 123, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Adzopé", demand: 113, offer: 0, ratio: "∞", priority: "🔥 Extrême" },
  { commune: "Abobo", demand: 321, offer: 4, ratio: "80.2", priority: "🔥 Extrême" },
  { commune: "Anyama", demand: 140, offer: 2, ratio: "70", priority: "🔴 Haute" },
  { commune: "Bingerville", demand: 486, offer: 10, ratio: "48.6", priority: "🔴 Haute" },
  { commune: "Bonoua", demand: 119, offer: 5, ratio: "23.8", priority: "🔴 Haute" },
  { commune: "Jacqueville", demand: 167, offer: 9, ratio: "18.6", priority: "🟠 Moyenne" },
  { commune: "Plateau", demand: 150, offer: 9, ratio: "16.7", priority: "🟠 Moyenne" },
  { commune: "Daloa", demand: 123, offer: 8, ratio: "15.4", priority: "🟠 Moyenne" },
  { commune: "Marcory", demand: 273, offer: 24, ratio: "11.4", priority: "🟠 Moyenne" },
  { commune: "Port-Bouët", demand: 153, offer: 14, ratio: "10.9", priority: "🟠 Moyenne" },
  { commune: "Koumassi", demand: 196, offer: 19, ratio: "10.3", priority: "🟠 Moyenne" },
  { commune: "San-Pédro", demand: 152, offer: 15, ratio: "10.1", priority: "🟢 Correcte" },
  { commune: "Yamoussoukro", demand: 216, offer: 23, ratio: "9.4", priority: "🟢 Correcte" },
  { commune: "Bouaké", demand: 182, offer: 23, ratio: "7.9", priority: "🟢 Correcte" },
  { commune: "Yopougon", demand: 419, offer: 75, ratio: "5.6", priority: "🟢 Correcte" },
  { commune: "Cocody", demand: 634, offer: 244, ratio: "2.6", priority: "✅ Saturée" },
];

// ============ TYPE DEMAND vs OFFER ============
export const typeGap = [
  { type: "Studio", demand: 892, offer: 0, gap: 892, comment: "❌ Type inexistant en base !" },
  { type: "Appartement", demand: 977, offer: 622, gap: 355, comment: "Bien mais gap réel" },
  { type: "Maison", demand: 648, offer: 40, gap: 608, comment: "Sous-servi ×16" },
  { type: "Villa", demand: 446, offer: 86, gap: 360, comment: "Sous-servi ×5" },
  { type: "Terrain", demand: 294, offer: 0, gap: 294, comment: "❌ Pas au catalogue" },
  { type: "Magasin", demand: 242, offer: 0, gap: 242, comment: "❌ Pas au catalogue" },
  { type: "Bureau", demand: 205, offer: 0, gap: 205, comment: "❌ Pas au catalogue" },
  { type: "Entrepôt", demand: 166, offer: 0, gap: 166, comment: "❌ Pas au catalogue" },
];

// ============ INTENTS ============
export const intentsData = [
  { intent: "Louer", nb: 1378, color: C.green },
  { intent: "Investir", nb: 151, color: C.gold },
  { intent: "Acheter", nb: 104, color: C.accent },
];

// ============ HOTELS PMS ============
export const pmsData = {
  hotels: 3,
  rooms: 25,
  reservations: 7,
  no_show: 6,
  cancelled: 1,
  success: 0,
};

// ============ VIDEO STATS ============
export const videoStats = {
  total: 116,
  ready: 56,
  processing: 60,
  attached: 92,
  views_total: 2194,
  unique_viewers: 701,
  likes: 189,
  unique_likers: 104,
  creators: 68,
  zero_views: 60,
  top_video_views: 260,
};

// ============ NOTIFICATIONS ============
export const notifBreakdown = [
  { subject: "🏠 Nouvelle réservation à valider", nb: 8842 },
  { subject: "Bienvenue sur ImmoPlus !", nb: 2363 },
  { subject: "Nouvelle demande d'alerte immobilière", nb: 1570 },
  { subject: "🏢 Nouveau bien immobilier à valider", nb: 1522 },
  { subject: "🔔 Nouvelle demande de réservation !", nb: 1211 },
  { subject: "🔔 Nouvelle réservation payée !", nb: 931 },
  { subject: "Nouvelle demande Pro Particulier", nb: 886 },
  { subject: "✅ Demande de réservation acceptée !", nb: 520 },
  { subject: "⏰ Demande de réservation expirée", nb: 272 },
  { subject: "⏰ Paiement non reçu", nb: 224 },
];

// ============ FUNNEL ============
export const funnelData = [
  { step: "Demandes totales", value: 1851, pct: 100, cat: "neutral" },
  { step: "En cours (zombies 200j+)", value: 406, pct: 21.9, cat: "warning" },
  { step: "Pro sans réponse", value: 365, pct: 19.7, cat: "bad" },
  { step: "Client annule", value: 345, pct: 18.6, cat: "bad" },
  { step: "Client sans réponse", value: 252, pct: 13.6, cat: "bad" },
  { step: "Pro annule", value: 199, pct: 10.8, cat: "bad" },
  { step: "Terminée ✓", value: 167, pct: 9.0, cat: "good" },
  { step: "Validée ✓", value: 104, pct: 5.6, cat: "good" },
];

// ============ CLIENT SEGMENTS ============
export const clientSegments = [
  { seg: "Nouveau", nb: 5241, color: C.textMuted },
  { seg: "Occasionnel", nb: 278, color: C.accent },
  { seg: "Fidèle", nb: 39, color: C.green },
  { seg: "VIP", nb: 7, color: C.gold },
];
