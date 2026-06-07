export type Holder = {
  rank: number
  owner: string
  amount: number
  percent: number
  flightClass?: string
}

export type EpochState = {
  number: number
  currentStepIndex: number
  intervalMs: number
  lastUpdated: number
  nextEpochAt: number
}
