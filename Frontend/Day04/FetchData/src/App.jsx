import { useState } from 'react'
import { spell } from './components/spellFetch'
import { Character } from './components/Characters'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <spell />
      <Character />
    </>
  )
}

export default App
