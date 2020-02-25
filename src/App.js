import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sign_in } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>Logged In: {logged ? 'Yes' : 'No'}</h1>
      <button onClick={() => dispatch(sign_in())}>Log In/Out</button>
    </div>
  );
}

export default App;
