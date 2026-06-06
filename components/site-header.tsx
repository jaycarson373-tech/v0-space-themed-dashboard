"use client"

import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"
import { Rocket } from "lucide-react"

const NAV = [
  { label: "BUY $SPCX6900", href: "#buy" },
  { label: "CHART", href: "#chart" },
  { label: "DYOR", href: "#dyor" },
  { label: "SWAP", href: "#swap" },
  { label: "BRIDGE", href: "#bridge" },
  { label: "DASHBOARD", href: "/dashboard" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="SPCX6900 home">
          <BrandMark size={28} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="#buy"
          className="inline-flex items-center gap-1.5 border border-[var(--color-negative)] bg-[var(--color-negative)]/10 px-3 py-1.5 font-mono text-[11px] font-bold tracking-[0.12em] text-foreground transition-colors hover:bg-[var(--color-negative)]/20"
        >
          <Rocket className="h-3.5 w-3.5" />
          BUY $SPCX6900
        </a>
      </div>
    </header>
  )
}
