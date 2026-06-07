import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { StatCard } from "@/components/panel"
import { VAULT, TOKEN } from "@/lib/mock-data"
import { formatNumber } from "@/lib/format"
import { ArrowRight } from "lucide-react"

export function VaultPreview() {
  return (
    <section id="vault" className="relative scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Vault Dashboard"
            title="The vault never sleeps"
            desc="Creator fees flow in, get converted to SPCX, and rain down on holders — automatically, every 15 minutes."
          />
          <Link
            href="/dashboard"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-[13px] font-semibold text-foreground backdrop-blur transition-colors hover:bg-card/70"
          >
            Open Live Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total SPCX Airdropped"
            value={formatNumber(VAULT.totalAirdropped)}
            sub="Distributed to holders all-time"
            live
          />
          <StatCard
            label="Eligible Holders"
            value={formatNumber(VAULT.eligibleHolders)}
            sub="Wallets on the next snapshot"
          />
          <StatCard
            label="Pending Pool"
            value={`${VAULT.pendingPool} SPCX`}
            sub="Queued for next distribution"
            live
          />
          <StatCard
            label="Total Bought"
            value={formatNumber(VAULT.totalBought)}
            sub={`SPCX bought from ${TOKEN.network} fees`}
          />
        </div>
      </div>
    </section>
  )
}
