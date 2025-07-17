import { useState } from "react";


const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count +1));
  };
  const decrement = () => {
    if(count===0){
      alert("value is zero cannot decrement.");
    }
    else{
    setCount(count - 1);
  }};
  return(
    <>
    <h1>Counter:{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>decrement</button>
    </>
  );
};

export default App;
