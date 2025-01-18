import './GreetingCard.css'

const GreetingCard = ({name, message, sender}) => {

  return (
    <div className='greeting-card'>
      <h1>Hello, {name}!</h1>
      <p>{message}</p>
      <p>- From {sender}</p>
    </div>
  );
}

export default GreetingCard