import React, { useEffect,useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, []); // runs every time `count` changes

  return <button onClick={() => setCount(count + 1)}>Click</button>;

};

export default App;
