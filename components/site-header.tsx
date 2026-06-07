"use client"

import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"
import { MARKET, TOKEN } from "@/lib/mock-data"
import { formatNumber, shortenAddress } from "@/lib/format"
import { Copy, Rocket } from "lucide-react"
import { useState } from "react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

const NAV = [
  { label: "Vault", href: "/dashboard" },
  { label: "Holders", href: "/dashboard#holders" },
  { label: "How It Works", href: "/#how" },
  { label: "Ledger", href: "/dashboard#ledger" },
]

function HeaderStat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex flex-col leading-tight">
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <span
        className={`font-mono text-xs font-bold tabular-nums ${accent ? "text-[var(--color-positive)]" : "text-foreground"}`}
      >
        {value}
      </span>
    </div>
  )
}

export function SiteHeader() {
  const [copied, setCopied] = useState(false)

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN.contract)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Left: brand */}
        <Link href="/" aria-label="SPCX6900 home" className="shrink-0">
          <BrandMark size={34} />
        </Link>

        {/* Center: stat strip */}
        <div className="hidden items-center gap-6 rounded-full border border-border/70 bg-card/40 px-5 py-1.5 md:flex">
          <HeaderStat label="MCAP" value={`$${formatNumber(MARKET.marketCap)}`} />
          <span className="h-6 w-px bg-border" />
          <HeaderStat label="24H" value={`+${MARKET.change24h}%`} accent />
          <span className="h-6 w-px bg-border" />
          <HeaderStat label="Holders" value={formatNumber(MARKET.totalHolders)} />
        </div>

        {/* Right: nav + actions */}
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-2.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={copyContract}
            className="hidden items-center gap-1.5 rounded-full border border-border/70 bg-card/40 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            aria-label="Copy contract address"
          >
            {copied ? "Copied" : shortenAddress(TOKEN.contract, 4)}
            <Copy className="h-3 w-3" />
          </button>

          <div className="hidden items-center gap-1 sm:flex">
            <a
              href="#"
              aria-label="SPCX6900 on X"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-card/40 text-muted-foreground transition-colors hover:text-foreground"
            >
              <XIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="SPCX6900 on Telegram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-card/40 text-muted-foreground transition-colors hover:text-foreground"
            >
              <TelegramIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          <a
            href="#buy"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-accent-foreground shadow-[0_0_24px_-6px_var(--color-accent)] transition-transform hover:scale-[1.03]"
          >
            <Rocket className="h-3.5 w-3.5" />
            Buy
          </a>
        </div>
      </div>
    </header>
  )
}
