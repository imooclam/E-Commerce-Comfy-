import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">product</Link>
      </nav>
    </>
  );
};
export default Navbar;
