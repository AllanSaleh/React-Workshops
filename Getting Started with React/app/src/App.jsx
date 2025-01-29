import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import GreetingCard from './Components/GreetingCard/GreetingCard';
import Events from './Components/Events/Events';
import { useState } from 'react';

const App = () => {
  const [weather, setWeather] = useState("Sunny")
  const [people, setPeople] = useState([
    {name: 'Tony', message: 'Wishing you a wonderful day', sender: 'Allan'},
    {name: 'Adam', message: 'Hope you have a great weekend!', sender: 'Allan & Tony'},
  ]) //ADJUSTED THIS TO AN ARRAY OF OBJECTS

  return (
    <div>
      <button onClick={()=>setWeather("Rainy")}>Change weather</button>
      <Navbar weather={weather}/>
      <h1>React</h1>
      <Counter />
      <Events setPeople={setPeople} people={people}/>
      {people.map((person, idx) => ( //ADDED IN THIS MAP HERE TO CREATE TEH GREETING CARDS
        <GreetingCard key={idx}
          name={person.name}
          message={person.message}
          sender={person.sender}
        />
      ))}
    </div>
  );
};
export default App;
