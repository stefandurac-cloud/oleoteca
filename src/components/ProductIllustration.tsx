export type IllustrationType = "oil" | "olives" | "cream" | "preserve";

interface Props {
  type: IllustrationType;
  primaryColor?: string;
  accentColor?: string;
  className?: string;
}

export default function ProductIllustration({
  type,
  primaryColor = "#4a6741",
  accentColor = "#b8962e",
  className = "",
}: Props) {
  switch (type) {
    case "oil":
      return <OilBottle primary={primaryColor} accent={accentColor} className={className} />;
    case "olives":
      return <OlivesJar primary={primaryColor} accent={accentColor} className={className} />;
    case "cream":
      return <CreamJar primary={primaryColor} accent={accentColor} className={className} />;
    case "preserve":
      return <PreserveJar primary={primaryColor} accent={accentColor} className={className} />;
  }
}

/* ── Oil bottle (same as BottleIllustration, kept inline) ── */
function OilBottle({ primary, accent, className }: { primary: string; accent: string; className: string }) {
  return (
    <svg viewBox="0 0 110 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="38" y="18" width="34" height="18" rx="4" fill={accent} />
      <rect x="40" y="36" width="30" height="6" fill={accent} opacity="0.7" />
      <rect x="42" y="42" width="26" height="34" fill={primary} />
      <path d="M42 76 Q36 88 32 106 L78 106 Q74 88 68 76 Z" fill={primary} />
      <rect x="32" y="106" width="46" height="168" rx="2" fill={primary} />
      <rect x="30" y="274" width="50" height="10" rx="3" fill={primary} />
      <rect x="34" y="108" width="42" height="164" rx="1" fill="#c8e6a0" opacity="0.18" />
      <rect x="35" y="148" width="40" height="96" rx="2" fill="white" opacity="0.88" />
      <rect x="38" y="154" width="34" height="0.8" fill={accent} opacity="0.6" />
      <rect x="40" y="160" width="30" height="10" rx="1" fill={primary} opacity="0.12" />
      <rect x="40" y="176" width="26" height="4" rx="1" fill={primary} opacity="0.1" />
      <rect x="40" y="183" width="20" height="4" rx="1" fill={primary} opacity="0.1" />
      <rect x="38" y="195" width="34" height="0.6" fill={primary} opacity="0.2" />
      <rect x="40" y="202" width="22" height="4" rx="1" fill={primary} opacity="0.08" />
      <rect x="40" y="210" width="18" height="4" rx="1" fill={primary} opacity="0.08" />
      <rect x="38" y="238" width="34" height="0.8" fill={accent} opacity="0.5" />
      <rect x="35" y="110" width="3" height="150" rx="1.5" fill="white" opacity="0.22" />
    </svg>
  );
}

/* ── Olives in a glass jar ── */
function OlivesJar({ primary, accent, className }: { primary: string; accent: string; className: string }) {
  return (
    <svg viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Lid */}
      <rect x="38" y="16" width="64" height="18" rx="4" fill={accent} />
      <rect x="34" y="30" width="72" height="6" rx="2" fill={accent} opacity="0.6" />
      {/* Jar body */}
      <path d="M36 36 Q32 40 30 50 L30 128 Q30 140 70 140 Q110 140 110 128 L110 50 Q108 40 104 36 Z" fill="white" stroke={primary} strokeWidth="2" strokeOpacity="0.25" />
      {/* Brine / liquid */}
      <path d="M32 55 L32 128 Q32 138 70 138 Q108 138 108 128 L108 55 Z" fill="#d4e8c2" opacity="0.45" />
      {/* Olives */}
      <ellipse cx="55" cy="100" rx="13" ry="10" fill={primary} opacity="0.85" />
      <ellipse cx="82" cy="98" rx="12" ry="9" fill="#2e4228" opacity="0.8" />
      <ellipse cx="68" cy="118" rx="11" ry="8" fill={primary} opacity="0.75" />
      <ellipse cx="46" cy="117" rx="9" ry="7" fill="#2e4228" opacity="0.7" />
      <ellipse cx="90" cy="115" rx="10" ry="8" fill={primary} opacity="0.8" />
      <ellipse cx="70" cy="82" rx="10" ry="8" fill="#2e4228" opacity="0.6" />
      <ellipse cx="50" cy="80" rx="9" ry="7" fill={primary} opacity="0.55" />
      <ellipse cx="88" cy="82" rx="9" ry="7" fill={primary} opacity="0.5" />
      {/* Pits */}
      <ellipse cx="55" cy="100" rx="4" ry="3" fill={accent} opacity="0.35" />
      <ellipse cx="82" cy="98" rx="4" ry="3" fill={accent} opacity="0.3" />
      <ellipse cx="68" cy="118" rx="3.5" ry="2.5" fill={accent} opacity="0.35" />
      {/* Herb sprig (rosemary) */}
      <line x1="95" y1="60" x2="95" y2="130" stroke="#5a7a50" strokeWidth="1.2" strokeOpacity="0.6" />
      <ellipse cx="92" cy="70" rx="3" ry="5" fill="#5a7a50" opacity="0.5" transform="rotate(-20 92 70)" />
      <ellipse cx="98" cy="80" rx="3" ry="5" fill="#4a6741" opacity="0.5" transform="rotate(15 98 80)" />
      <ellipse cx="92" cy="92" rx="3" ry="5" fill="#5a7a50" opacity="0.5" transform="rotate(-20 92 92)" />
      {/* Jar label */}
      <rect x="38" y="48" width="50" height="28" rx="2" fill="white" opacity="0.7" />
      <rect x="41" y="52" width="44" height="0.6" fill={accent} opacity="0.5" />
      <rect x="43" y="56" width="28" height="5" rx="1" fill={primary} opacity="0.12" />
      <rect x="43" y="64" width="20" height="4" rx="1" fill={primary} opacity="0.08" />
      <rect x="41" y="72" width="44" height="0.6" fill={accent} opacity="0.4" />
      {/* Glass highlight */}
      <path d="M33 52 Q31 60 31 80 L31 125" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

/* ── Cream / paste wide jar ── */
function CreamJar({ primary, accent, className }: { primary: string; accent: string; className: string }) {
  return (
    <svg viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Lid */}
      <ellipse cx="75" cy="26" rx="52" ry="12" fill={accent} />
      <ellipse cx="75" cy="22" rx="52" ry="10" fill={accent} opacity="0.85" />
      <ellipse cx="75" cy="18" rx="48" ry="8" fill={accent} opacity="0.65" />
      {/* Lid knob */}
      <ellipse cx="75" cy="12" rx="10" ry="6" fill={accent} opacity="0.9" />
      {/* Jar body */}
      <path d="M24 28 Q22 32 22 44 L22 108 Q22 120 75 120 Q128 120 128 108 L128 44 Q128 32 126 28 Z" fill="white" stroke={primary} strokeWidth="1.5" strokeOpacity="0.2" />
      {/* Paste / cream fill */}
      <path d="M24 44 L24 108 Q24 118 75 118 Q126 118 126 108 L126 44 Z" fill={primary} opacity="0.82" />
      {/* Cream texture — wavy top surface */}
      <path d="M24 44 Q40 38 55 44 Q70 50 85 44 Q100 38 126 44" stroke="#8aad82" strokeWidth="2.5" fill="none" opacity="0.6" />
      {/* Label band */}
      <rect x="26" y="62" width="98" height="38" fill="white" opacity="0.88" />
      <rect x="30" y="67" width="90" height="0.8" fill={accent} opacity="0.6" />
      <rect x="34" y="72" width="56" height="8" rx="1" fill={primary} opacity="0.12" />
      <rect x="34" y="84" width="42" height="4" rx="1" fill={primary} opacity="0.08" />
      <rect x="34" y="91" width="30" height="4" rx="1" fill={primary} opacity="0.08" />
      <rect x="30" y="97" width="90" height="0.8" fill={accent} opacity="0.5" />
      {/* Olive leaf decoration on label */}
      <ellipse cx="100" cy="82" rx="7" ry="4" fill={primary} opacity="0.12" transform="rotate(-30 100 82)" />
      <ellipse cx="106" cy="78" rx="6" ry="3.5" fill={primary} opacity="0.1" transform="rotate(10 106 78)" />
      {/* Glass highlight */}
      <path d="M27 50 L27 106" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

/* ── Preserve mason jar ── */
function PreserveJar({ primary, accent, className }: { primary: string; accent: string; className: string }) {
  return (
    <svg viewBox="0 0 120 170" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Lid ring */}
      <rect x="30" y="18" width="60" height="10" rx="3" fill={primary} opacity="0.5" />
      {/* Lid */}
      <ellipse cx="60" cy="22" rx="32" ry="8" fill={accent} opacity="0.8" />
      <ellipse cx="60" cy="20" rx="30" ry="6" fill={accent} />
      {/* Jar neck */}
      <rect x="32" y="28" width="56" height="12" rx="1" fill="white" stroke={primary} strokeWidth="1.2" strokeOpacity="0.2" />
      {/* Jar body */}
      <path d="M28 40 Q26 44 26 56 L26 140 Q26 152 60 152 Q94 152 94 140 L94 56 Q94 44 92 40 Z" fill="white" stroke={primary} strokeWidth="1.5" strokeOpacity="0.15" />
      {/* Brine */}
      <path d="M28 56 L28 140 Q28 150 60 150 Q92 150 92 140 L92 56 Z" fill="#e8f4d0" opacity="0.5" />
      {/* Preserved veggies — artichokes / tomatoes / peppers */}
      {/* Artichoke shape */}
      <ellipse cx="45" cy="120" rx="12" ry="16" fill="#6b8c3e" opacity="0.75" />
      <ellipse cx="45" cy="112" rx="8" ry="6" fill="#5a7a50" opacity="0.8" />
      <ellipse cx="45" cy="106" rx="5" ry="4" fill="#4a6741" opacity="0.7" />
      {/* Roasted pepper */}
      <path d="M62 108 Q55 112 54 122 Q60 132 68 130 Q76 128 75 118 Q74 108 68 106 Z" fill="#c8401a" opacity="0.65" />
      <path d="M65 107 Q68 100 70 106" stroke="#a03218" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Sundried tomato */}
      <ellipse cx="78" cy="118" rx="9" ry="7" fill="#b83828" opacity="0.6" />
      <line x1="74" y1="118" x2="82" y2="118" stroke="#8c2010" strokeWidth="1" opacity="0.4" />
      {/* Small caper */}
      <circle cx="38" cy="95" r="4" fill={primary} opacity="0.55" />
      <circle cx="50" cy="90" r="3" fill="#2e4228" opacity="0.5" />
      <circle cx="72" cy="95" r="4" fill={primary} opacity="0.55" />
      {/* Herb sprig */}
      <line x1="85" y1="60" x2="85" y2="105" stroke="#5a7a50" strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="82" cy="68" rx="3" ry="5" fill="#4a6741" opacity="0.45" transform="rotate(-15 82 68)" />
      <ellipse cx="88" cy="78" rx="3" ry="5" fill="#5a7a50" opacity="0.45" transform="rotate(15 88 78)" />
      {/* Label */}
      <rect x="30" y="54" width="50" height="30" rx="1" fill="white" opacity="0.75" />
      <rect x="33" y="58" width="44" height="0.7" fill={accent} opacity="0.55" />
      <rect x="35" y="63" width="32" height="6" rx="1" fill={primary} opacity="0.1" />
      <rect x="35" y="72" width="24" height="4" rx="1" fill={primary} opacity="0.08" />
      <rect x="33" y="80" width="44" height="0.7" fill={accent} opacity="0.45" />
      {/* Glass highlight */}
      <path d="M30 58 L30 138" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
    </svg>
  );
}
