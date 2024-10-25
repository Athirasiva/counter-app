import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  
  const increment = ()=>{
    setCounter(counter+1)
  }
  const decrement = () =>
  {
    setCounter(counter - 1)
  }
  return (
    <div className='bg-dark w-100 text-light d-flex  flex-column align-items-center justify-content-center' style={{height:'100vh'}} >
          <h1 >Counter</h1>
          <div className='d-flex '>
          <button onClick={increment} className='btn btn-primary me-3'>Increment</button>
          <h1>{counter}</h1>
          <button onClick={decrement} className='btn btn-primary ms-3'>Decrement</button>
          </div>
    </div>
  );
}

export default App;
