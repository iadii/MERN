import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
      counter += 1
      // setCounter(counter)
      // Assignment Value shouldn't be more than 20
      if(counter > 20){
        counter = 20
      }
    setCounter(counter)

  }
  const RemoveValue = () => {
    // Assignment value shouldn't be less than 0
    counter -= 1
    if(counter < 0){ 
      counter = 0
    }

    setCounter(counter)
  }

  return (
    <>
      <h1>Hello Aditya</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Increment</button>
      <button onClick={RemoveValue}>Decrement</button>
    </>
  )
}

export default App
