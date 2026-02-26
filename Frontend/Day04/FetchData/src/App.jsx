import { useState } from 'react'
import { Spell } from './components/SpellFetch'
import { Character } from './components/Characters'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Spell /> */}
      <Character />
    </>
  )
}

export default App
