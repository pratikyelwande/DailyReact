import React, { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(); // Save interval ID here

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>)
};
export default App;
