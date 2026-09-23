import { countLabelAt, isCountTick } from '../domain/ticks'
import type { RowBounds } from '../domain/types'

interface CountRowProps {
  row: RowBounds
}

/** One row of the grid: a header and one cell per tick */
export function CountRow({ row }: CountRowProps) {
  const ticks: number[] = []
  for (let tick = row.startTick; tick < row.endTick; tick += 1) ticks.push(tick)
  return (
    <div className="count-row">
      <div className="row-header">{row.isIntro ? 'Intro' : `Phrase ${row.phraseNumber}`}</div>
      <div className="row-cells">
        {ticks.map((tick) => {
          const offset = tick - row.startTick
          const classes = ['cell', isCountTick(offset) ? 'cell-count' : 'cell-and']
          if (offset % 16 === 0) classes.push('cell-eight-start')
          return (
            <button key={tick} type="button" className={classes.join(' ')}>
              {countLabelAt(offset)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
