import { useState,useReducer } from 'react'

function reducer(state, action) {
  if (action.type === 'TURN_ON') {
    return true;
  }
  if (action.type === 'TURN_OFF') {
    return false;
  }
  return state;
}
function App() {
  const [light, dispatch] = useReducer(reducer, false); // initial is off

  return (
    <div>
      <h2>The light is {light ? 'ON' : 'OFF'}</h2>
      <button onClick={() => dispatch({ type: 'TURN_ON' })}>Turn ON</button>
      <button onClick={() => dispatch({ type: 'TURN_OFF' })}>Turn OFF</button>
    </div>
  );
}

export default App
