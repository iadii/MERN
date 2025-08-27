import { useState } from 'react';
import z900 from './assets/z900.jpg';
import './App.css';

function App() {
  const [head, setHead] = useState('Hello');
  const [tail, setTail] = useState('Adii');
  const [showHeart, setShowHeart] = useState(false); // State to manage heart display

  const inc = () => {
    setTail('fffff');
  }

  function change() {
    setHead('Adios');
    setTail('Amiga');
  }

  const z9001 = () => {
    setShowHeart(true); // Set state to true to show the heart

  }

  return (
    <>
      <h2 onClick={change}>{head} {tail}</h2>
      <img src={z900} className='z900' alt="A motorcycle model z900" onClick={z9001} />
      <h1 className='Adii' onClick={inc}>hey {tail}</h1>
      {showHeart && <p className='p'>💖</p>} 
    </>
  );
}

export default App;





