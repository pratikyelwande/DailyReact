import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value); // read from store
  const dispatch = useDispatch(); // dispatch actions

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>{' '}
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>{' '}
      <button onClick={() => dispatch(reset())}>🔁 Reset</button>
    </div>
  );
}

export default App;
