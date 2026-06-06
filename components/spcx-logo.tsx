export function SpcxLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 120"
      className={className}
      role="img"
      aria-label="SPCX6900"
      fill="none"
    >
      {/* orbital ellipse */}
      <ellipse
        cx="120"
        cy="62"
        rx="104"
        ry="34"
        transform="rotate(-12 120 62)"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.9"
      />
      {/* sparkle */}
      <path
        d="M196 26 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z"
        fill="currentColor"
      />
      {/* SPCX wordmark */}
      <text
        x="120"
        y="58"
        textAnchor="middle"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="46"
        fontWeight="800"
        letterSpacing="2"
        fill="currentColor"
      >
        SPCX
      </text>
      {/* 6900 */}
      <text
        x="120"
        y="86"
        textAnchor="middle"
        fontFamily="var(--font-mono), monospace"
        fontSize="20"
        fontWeight="700"
        letterSpacing="8"
        fill="currentColor"
      >
        6900
      </text>
    </svg>
  )
}
