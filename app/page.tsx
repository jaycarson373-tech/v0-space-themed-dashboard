import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HoldersDashboard } from "@/components/holders-dashboard"
import { Mission, Tokenomics } from "@/components/mission"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <HoldersDashboard />
      <Mission />
      <Tokenomics />
      <SiteFooter />
    </main>
  )
}
