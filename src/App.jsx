import { useState } from "react"
import "./App.css"
function App() {
  const [counter, setCounter] = useState(0);
  const added = () => {
   
    if(counter < 20){
      setCounter(counter + 1);
    }
    
  }
  const remove = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
    
  }

  return (
    <div className="container">
        <div className="count">
          <h1 className="heading">Counter App</h1>
          <h2 className="main">Counter : {counter}</h2>
          <p>Max Value : 20</p>
          <p>Min Value : 0</p>
          <button onClick={added}>Add Value</button>
          <button onClick={remove}>Remove Value</button>
        </div>      
    </div>
  )
}

export default App
