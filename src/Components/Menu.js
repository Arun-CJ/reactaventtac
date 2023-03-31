import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <ul className="nav navbar-right">
            <li className="pr-5">
              {" "}
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="pr-5">
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
            <li>
              <Link to="/about">About US</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
