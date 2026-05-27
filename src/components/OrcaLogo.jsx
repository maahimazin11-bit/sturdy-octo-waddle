export default function OrcaLogo({ className = '', size = 120, dark = false }) {
  const bodyFill = dark ? '#0c2340' : '#ffffff'
  // Eye patch: shows as a contrasting oval — turquoise tint on white body, white on dark body
  const eyeFill = dark ? '#ffffff' : 'rgba(8,145,178,0.38)'

  return (
    <svg
      className={className}
      width={size}
      height={Math.round(size * 0.6)}
      viewBox="0 0 320 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ORCA — orca silhouette logo"
    >
      {/* Main body */}
      <path
        fill={bodyFill}
        d="
          M 60 92
          C 94 84 134 81 160 82
          Q 162 54 168 13
          Q 178 44 176 82
          C 202 81 248 80 270 90
          Q 288 98 288 108
          Q 285 120 267 122
          C 238 126 200 125 164 123
          C 128 121 92 119 62 115
          Q 53 107 60 92
          Z
        "
      />
      {/* Upper tail fluke */}
      <path
        fill={bodyFill}
        d="
          M 60 91
          Q 40 84 20 66
          Q 6 54 8 66
          Q 12 78 30 86
          Q 44 90 60 92
          Z
        "
      />
      {/* Lower tail fluke */}
      <path
        fill={bodyFill}
        d="
          M 62 116
          Q 44 122 28 133
          Q 10 144 8 157
          Q 6 168 20 159
          Q 40 143 60 117
          Z
        "
      />
      {/* Pectoral fin */}
      <path
        fill={bodyFill}
        d="
          M 218 122
          Q 202 138 190 156
          Q 183 166 189 160
          Q 200 146 214 130
          Q 218 124 218 122
          Z
        "
      />
      {/* White eye patch */}
      <ellipse cx="264" cy="84" rx="18" ry="12" fill={eyeFill} />
    </svg>
  )
}
