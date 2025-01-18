import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import GreetingCard from './Components/GreetingCard/GreetingCard';
import { useState } from 'react';

const App = () => {
  const [weather, setWeather] = useState("Sunny")

  return (
    <div>
      <button onClick={()=>setWeather("Rainy")}>Change weather</button>
      <Navbar weather={weather}/>
      <h1>React</h1>
      <Counter />
      <GreetingCard
        name='Tony'
        message='Wishing you a wonderful day!'
        sender='Allan'
      />

      <GreetingCard
        name='Adam'
        message='Hope you have a great weekend!'
        sender='Allan & Tony'
      />
    </div>
  );
};
export default App;
