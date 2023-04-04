import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <ul className="nav navbar-right ">
            <li className="nav-item mr-5" style={{ marginRight: "10px" }}>
              {" "}
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="pr-5" style={{ marginRight: "10px" }}>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
            <li>
              <Link to="/about" style={{ marginRight: "10px" }}>
                About US
              </Link>
            </li>
            <li>
              <Link to="/login" style={{ marginRight: "10px" }}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/get-posts" style={{ marginRight: "10px" }}>
                Get Posts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
