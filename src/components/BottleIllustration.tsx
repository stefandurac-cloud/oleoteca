interface BottleProps {
  fillColor?: string;
  capColor?: string;
  opacity?: number;
  className?: string;
}

export default function BottleIllustration({
  fillColor = "#4a6741",
  capColor = "#b8962e",
  opacity = 1,
  className = "",
}: BottleProps) {
  return (
    <svg
      viewBox="0 0 110 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {/* Cap */}
      <rect x="38" y="18" width="34" height="18" rx="4" fill={capColor} />

      {/* Foil / neck top */}
      <rect x="40" y="36" width="30" height="6" fill={capColor} opacity="0.7" />

      {/* Neck */}
      <rect x="42" y="42" width="26" height="34" fill={fillColor} />

      {/* Shoulder — curves outward */}
      <path
        d="M42 76 Q36 88 32 106 L78 106 Q74 88 68 76 Z"
        fill={fillColor}
      />

      {/* Body */}
      <rect x="32" y="106" width="46" height="168" rx="2" fill={fillColor} />

      {/* Base */}
      <rect x="30" y="274" width="50" height="10" rx="3" fill={fillColor} />

      {/* Liquid tint inside */}
      <rect
        x="34"
        y="108"
        width="42"
        height="164"
        rx="1"
        fill="#c8e6a0"
        opacity="0.18"
      />

      {/* Label */}
      <rect x="35" y="148" width="40" height="96" rx="2" fill="white" opacity="0.88" />

      {/* Label top gold rule */}
      <rect x="38" y="154" width="34" height="0.8" fill={capColor} opacity="0.6" />

      {/* Label heading block */}
      <rect x="40" y="160" width="30" height="10" rx="1" fill={fillColor} opacity="0.12" />

      {/* Label subtext lines */}
      <rect x="40" y="176" width="26" height="4" rx="1" fill={fillColor} opacity="0.1" />
      <rect x="40" y="183" width="20" height="4" rx="1" fill={fillColor} opacity="0.1" />

      {/* Label center divider */}
      <rect x="38" y="195" width="34" height="0.6" fill={fillColor} opacity="0.2" />

      {/* Label footer lines */}
      <rect x="40" y="202" width="22" height="4" rx="1" fill={fillColor} opacity="0.08" />
      <rect x="40" y="210" width="18" height="4" rx="1" fill={fillColor} opacity="0.08" />

      {/* Label bottom gold rule */}
      <rect x="38" y="238" width="34" height="0.8" fill={capColor} opacity="0.5" />

      {/* Glass highlight left */}
      <rect x="35" y="110" width="3" height="150" rx="1.5" fill="white" opacity="0.22" />

      {/* Glass highlight right small */}
      <rect x="69" y="120" width="2" height="60" rx="1" fill="white" opacity="0.1" />
    </svg>
  );
}
