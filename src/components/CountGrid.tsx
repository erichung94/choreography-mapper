import { layoutRowBounds, type RowLayoutInput } from '../domain/rows'
import { CountRow } from './CountRow'

/** The whole song as rows of counts. */
export function CountGrid(props: RowLayoutInput) {
  const rows = layoutRowBounds(props)
  return (
    <div className="count-grid">
      {rows.map((row) => (
        <CountRow key={row.startTick} row={row} />
      ))}
    </div>
  )
}
