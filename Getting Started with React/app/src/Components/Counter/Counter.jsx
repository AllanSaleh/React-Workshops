import { useState, useEffect } from "react";

const Counter = () => {
  // let count = 0;
  const [name, setName] = useState("Allan")
  const [count, setCount] = useState(0)
  const [quote, setQuote] = useState([])

  console.log("1. Constructed")

  useEffect(() => {
    console.log("3. Mounted")
    // fetchQuote() I TURNED THIS OFF FOR THE MOMENT
  }, [])

  async function fetchQuote() {
    try {
      const result = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': '<GET YOUR OWN API KEY>'
        }
      }
    )
    const data = await result.json()
    setQuote(data)
    console.log(data)
    } catch (err) {
      console.error("Error fetching", err)
    }
  }
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      {console.log("2. Rendered")}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <h3>{name}</h3>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      
      <button onClick={() => setName('Tony')}>Change Name</button>

      <h4>{name}</h4>
      <ul>
        {quote == [] ? "Loading..." : quote.map((q, idx) => (
          <div key={idx}>
          <li>{q.quote}</li>
          <li>{q.quote}</li>
          <li>{q.quote}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
