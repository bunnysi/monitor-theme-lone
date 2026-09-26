import type { ReactNode } from "react"

type Props = { label: ReactNode; pct: number | null; foot: ReactNode; empty?: ReactNode }

/** Name, figure, a visible track. Zero is an empty slot, not a hairline. */
export function Meter({ label, pct, foot, empty = "—" }: Props) {
  const filled = pct === null ? 0 : Math.min(100, Math.max(0, pct))
  return (
    <div className="min-w-0">
      <div className="flex items-baseline justify-between gap-2">
        <span className="truncate text-xs text-muted-foreground">{label}</span>
        <span className="tnum text-xs font-medium text-foreground">
          {pct === null ? empty : `${filled < 10 ? filled.toFixed(1) : filled.toFixed(0)}%`}
        </span>
      </div>
      <div
        className="meter-track mt-1.5"
        role="meter"
        aria-valuenow={pct === null ? undefined : Math.round(filled)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="meter-fill"
          style={{ width: pct === null || filled <= 0 ? "0" : filled < 1.2 ? "3%" : `${filled}%` }}
        />
      </div>
      <div className="tnum mt-1.5 truncate text-xs text-muted-foreground">{foot}</div>
    </div>
  )
}
