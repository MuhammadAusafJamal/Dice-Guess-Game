import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Play from './Pages/Play';


function App() {
  const [bool, Setbool] = useState(true)
  const [score, setScore] = useState(0);

  const button = () => {
    if (bool === false) {
      Setbool(true)
    } else {
      Setbool(false)
    }
  }

  return (
    <div>
      {bool ? <Home btn={button} /> : <Play score={score}
      setScore={setScore}/>}
    </div>
  );
}

export default App;
