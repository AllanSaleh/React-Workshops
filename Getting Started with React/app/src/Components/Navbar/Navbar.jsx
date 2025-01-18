const Navbar = (props) => {
  const name = 'Allan';
  return (
    <>
      <div>This is the Navbar {name}</div>
      <p>The weather today is {props.weather}</p>
    </>
  );
};
export default Navbar;
