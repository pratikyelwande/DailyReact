import React, { useState } from "react";

const App = () => {
  const [fruit, setFruit] = useState("");
  const [fruits, setFruits] = useState([]);
  const additem = () => {
    if (fruit.trim() === "") return;
    setFruits([...fruits, fruit]);
    setFruit("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter a fruit name"
        value={fruit}
        onChange={(e) => {
          setFruit(e.target.value);
        }}
      />
      <button onClick={additem}>Add</button>
      <ul>
        {fruits.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
