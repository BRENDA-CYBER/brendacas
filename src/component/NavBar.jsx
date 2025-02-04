import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="About" className="nav-link">
        About
      </NavLink>

      <NavLink to="Contactus" className="nav-link">
        Contactus
      </NavLink>

      <NavLink to="Service" className="nav-link">
        Service
      </NavLink>

      <NavLink to="Experience" className="nav-link">
        Experience
      </NavLink>

      <NavLink to="Resume" className="nav-link">
        Resume
      </NavLink>
    </div>
  );
};

export default NavBar;
