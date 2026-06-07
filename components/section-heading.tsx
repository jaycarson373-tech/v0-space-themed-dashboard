export function SectionHeading({
  eyebrow,
  title,
  desc,
  className = "",
}: {
  eyebrow: string
  title: string
  desc?: string
  className?: string
}) {
  return (
    <div className={className}>
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{desc}</p>
      )}
    </div>
  )
}
