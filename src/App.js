import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, Decrement, Divide, Increment,  Multiply,  SUBTRACT, X } from './Action.types';
import { useState } from 'react';

function App() {
  const dispatch=useDispatch()
  
  const count=useSelector((state)=>state.count)

  const [inputvalue, setInputvalue] = useState("")

  const payload=useSelector((state)=>state.payload=inputvalue)
  console.log(count,"payload",payload)
  return (
    <div className="App">
      <h1>counter: {count}</h1>
      <div>
            <button onClick={()=>dispatch({type:X})}>Clear</button>
            <div><input placeholder="Value" style={{width:"120px" }}  onChange={(e)=>setInputvalue(e.target.value)}/></div>
      </div>
      
      <div>
        <button onClick={(()=> dispatch({type:Increment}))}>Increment</button>
        <button onClick={(()=> dispatch({type:Decrement}))}>Decrement</button></div>
        
      
      <div>
      <button onClick={()=>dispatch({type:ADD, payload:inputvalue})}>Add</button>
      </div>
      <div><button onClick={()=>dispatch({type:SUBTRACT})}>Subtract</button></div>

      <div><button onClick={(()=> dispatch({type:Multiply}))}>Multiply</button></div>
      
      <div> <button onClick={(()=> dispatch({type:Divide}))}>Divide</button></div>

      
      
    </div>
  );
}

export default App;