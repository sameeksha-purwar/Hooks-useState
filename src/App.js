import React, {useState} from "react";
import Practice from "./practice";
function App() {
  
  const [timer,setCount]= useState(0);
  function increase(){
    setCount(timer+1)
  }
  function decrease(){
    setCount(timer-1)
  }
  return (
    <div>
    <h1>{timer}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <Practice/>

    </div>
  );
}


export default App;
