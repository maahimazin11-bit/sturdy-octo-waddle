export default function OrcaLogo({ className = '', size = 120, dark = false }) {
  const fill = dark ? '#0c2340' : '#ffffff'
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ORCA logo — orca silhouette"
    >
      {/* Body */}
      <ellipse cx="95" cy="110" rx="62" ry="38" fill={fill} />
      {/* Head */}
      <ellipse cx="148" cy="100" rx="28" ry="22" fill={fill} />
      {/* White eye patch */}
      <ellipse cx="158" cy="93" rx="10" ry="7" fill={dark ? '#ffffff' : '#0c2340'} opacity="0.85" />
      {/* Dorsal fin */}
      <path d="M105 72 Q115 30 130 45 Q120 68 110 72 Z" fill={fill} />
      {/* Tail fluke left */}
      <path d="M33 108 Q10 90 18 115 Q28 118 40 112 Z" fill={fill} />
      {/* Tail fluke right */}
      <path d="M33 112 Q10 130 20 118 Q30 122 42 116 Z" fill={fill} />
      {/* Pectoral fin */}
      <path d="M115 120 Q100 148 88 142 Q95 128 108 122 Z" fill={fill} />
      {/* White belly patch */}
      <ellipse cx="110" cy="118" rx="28" ry="14" fill={dark ? '#ffffff' : '#0c2340'} opacity="0.15" />
    </svg>
  )
}
