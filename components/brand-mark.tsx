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
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/spcx-logo.png"
        alt="SPCX6900 emblem"
        width={size}
        height={size}
        className="rounded-full ring-1 ring-border"
        priority
      />
      {showWordmark && (
        <span className="font-mono text-sm font-bold tracking-[0.18em] text-foreground">
          SPCX<span className="text-muted-foreground">6900</span>
        </span>
      )}
    </div>
  )
}
