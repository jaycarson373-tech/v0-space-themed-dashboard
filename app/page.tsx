import { SiteHeader } from "@/components/site-header"
import { MarketTicker } from "@/components/market-ticker"
import { Hero } from "@/components/hero"
import { TabStrip } from "@/components/tab-strip"
import { VaultPreview } from "@/components/vault-preview"
import { DistributionPreview } from "@/components/distribution-preview"
import { ShareholdersPreview } from "@/components/shareholders-preview"
import { DistributionPolicy } from "@/components/distribution-policy"
import { LedgerPreview } from "@/components/ledger-preview"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <MarketTicker />
      <Hero />
      <TabStrip />
      <VaultPreview />
      <DistributionPreview />
      <ShareholdersPreview />
      <DistributionPolicy />
      <LedgerPreview />
      <SiteFooter />
    </main>
  )
}
