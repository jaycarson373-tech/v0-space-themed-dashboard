import Link from "next/link"

const TABS = [
  { label: "Vault Dashboard", href: "#vault" },
  { label: "Shareholders", href: "#shareholders" },
  { label: "Distribution Ledger", href: "#ledger" },
]

export function TabStrip() {
  return (
    <nav className="sticky top-16 z-40 border-y border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 sm:px-6">
        {TABS.map((tab, i) => (
          <Link
            key={tab.label}
            href={tab.href}
            className={`relative shrink-0 px-4 py-3.5 text-[13px] font-medium transition-colors ${
              i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {i === 0 && (
              <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-accent" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}
