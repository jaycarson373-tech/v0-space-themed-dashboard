export function RocketMark({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <path
          d="M24 3c6.5 4.2 10 11 10 19 0 4.2-1 8-2.6 11.2H16.6C15 30 14 26.2 14 22c0-8 3.5-14.8 10-19Z"
          fill="var(--primary)"
        />
        <circle cx="24" cy="19" r="4" fill="var(--background)" />
        <path d="M16.6 33.2 12 38l5-1 1.6-3.8h-2Z" fill="var(--accent)" />
        <path d="M31.4 33.2 36 38l-5-1-1.6-3.8h2Z" fill="var(--accent)" />
        <path
          d="M21 36h6l-1.4 6c-.5 2-1.1 2-1.6 0L21 36Z"
          fill="var(--chart-4)"
          className="origin-top animate-thrust"
        />
      </svg>
    </span>
  )
}
