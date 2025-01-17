import { useState } from "react";

const Counter = () => {
  // let count = 0;
  const [name, setName] = useState("Allan")
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <h3>{name}</h3>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      
      <button onClick={() => setName('Tony')}>Change Name</button>

      <h4>{name}</h4>
    </div>
  );
};

export default Counter;
