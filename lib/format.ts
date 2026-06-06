export function shortenAddress(address: string, chars = 4): string {
  if (!address) return ""
  if (address.length <= chars * 2 + 3) return address
  return `${address.slice(0, chars)}…${address.slice(-chars)}`
}

export function formatNumber(value: number, maximumFractionDigits = 2): string {
  if (!Number.isFinite(value)) return "0"
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B`
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(2)}K`
  return value.toLocaleString(undefined, { maximumFractionDigits })
}

export function formatFull(value: number): string {
  if (!Number.isFinite(value)) return "0"
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 })
}

export function formatPercent(value: number): string {
  if (!Number.isFinite(value)) return "0%"
  if (value < 0.01) return "<0.01%"
  return `${value.toFixed(2)}%`
}

export function timeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000)
  if (seconds < 60) return "just now"
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  return `${hours}h ago`
}
