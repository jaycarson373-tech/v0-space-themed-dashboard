export type Holder = {
  rank: number
  owner: string
  amount: number
  percent: number
}

export type HoldersResponse = {
  mint: string
  symbol: string
  name: string
  decimals: number
  totalSupply: number
  holderCount: number
  topHolders: Holder[]
  fetchedAt: number
  isLive: boolean
  note?: string
}
