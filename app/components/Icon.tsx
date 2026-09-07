"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name?: string;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Map common emojis & names to Lucide icons
const emojiToIconMap: Record<string, string> = {
  "📊": "BarChart3",
  "💰": "Coins",
  "⭐": "Star",
  "🔄": "RefreshCw",
  "🏘": "Building2",
  "💳": "CreditCard",
  "🏠": "Home",
  "📱": "Smartphone",
  "🚀": "Rocket",
  "🎯": "Target",
  "🎤": "Presentation",
  "🚨": "AlertTriangle",
  "⚡": "Zap",
  "💡": "Lightbulb",
  "✅": "CheckCircle2",
  "📈": "TrendingUp",
  "👥": "Users",
  "📋": "ClipboardList",
  "📅": "Calendar",
  "🏗": "Building",
  "🏨": "Hotel",
  "🌍": "Globe",
  "💵": "DollarSign",
  "🔁": "Repeat",
  "🎬": "Video",
  "🔔": "Bell",
  "📬": "Mail",
  "📮": "Inbox",
  "💬": "MessageSquare",
  "🔍": "Search",
  "🤖": "Bot",
  "🎁": "Gift",
  "📞": "PhoneCall",
  "🔮": "Sparkles",
  "⚠️": "AlertCircle",
  "🔥": "Flame",
  "✓": "Check",
};

export default function Icon({ name = "Activity", size = 18, color, style, className }: IconProps) {
  const iconName = emojiToIconMap[name] || name;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = (LucideIcons as any)[iconName] || LucideIcons.Activity;

  return <Component size={size} color={color} style={style} className={className} />;
}
