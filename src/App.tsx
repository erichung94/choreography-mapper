import { CountGrid } from './components/CountGrid'

export default function App() {
  return (
    <main>
      <h1>Choreography Mapper</h1>
      <CountGrid firstTick={0} lastTick={255} baselineCounts={16} marks={[]} />
    </main>
  )
}
