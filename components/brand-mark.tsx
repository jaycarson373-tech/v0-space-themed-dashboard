import Image from "next/image"
import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  size = 32,
  showWordmark = true,
}: {
  className?: string
  size?: number
  showWordmark?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative">
        <Image
          src="/spcx-logo.png"
          alt="SPCX6900 emblem"
          width={size}
          height={size}
          className="rounded-full ring-1 ring-border"
          priority
        />
        <div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: "0 0 20px -4px var(--color-accent)" }}
        />
      </div>
      {showWordmark && (
        <span className="text-base font-bold tracking-tight text-foreground">
          SPCX<span className="text-accent">6900</span>
        </span>
      )}
    </div>
  )
}
