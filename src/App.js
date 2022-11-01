import logo from './logo.svg';
import './App.css';

import {increment,decrement,reset} from './redux/counterSlice';
import {useSelector,useDispatch} from 'react-redux' ;


function App() {
  const {counter}=useSelector [state=>state.counter]
  const dispatch=useDispatch()
  return (
    <div className="App">
      
<h1>{counter}</h1>
<button onClick={()=>dispatch(increment())}>+</button>
<button onClick={()=>dispatch(decrement)}>-</button>
<button onClick={()=>dispatch(reset)}>reset</button>

    </div>
  );
}

export default App;
