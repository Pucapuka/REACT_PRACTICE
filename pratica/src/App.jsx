import "./App.css";
import {useState} from "react";

function App() {
  const [name, setName] = useState("Paulo");
  const [number, setNumber] = useState(0);  
  const [items, setItems] = useState([]);


  const sumPlusOne = ()=>{
    setNumber(number + 1);
  }

  const sumPlusTwo = () =>{
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
  }

  const toZero = () =>{
    setNumber(0);
  }

  const addItem = () =>{
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random()*10) + 1
    }
    ])
  }
  return (
    <>
      <div>
        <h1>Practicing Hooks</h1>
      </div>
      <div>
        <h2>{name}</h2>
        <h2>{number}</h2>
        <button onClick={sumPlusOne}>sum + 1</button>
        <button onClick ={sumPlusTwo}>sum + 2</button>
        <button onClick = {toZero}>Back to Zero</button>
        <input type = "text" value = {name} onChange={(e) => setName(e.target.value)}/>
        <button onClick = {addItem}>add an item</button>
        <ul>
          {items.map(item => (
          <li key = {item.id}>{item.value}</li>))}
        </ul>
      </div>
    </>
  )
}

export default App
