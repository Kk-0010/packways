import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-6">
      <NavLink to="/services" className="hover:text-primary">
        Our Services
      </NavLink>
      <NavLink to="/solution" className="hover:text-primary">
        Solution
      </NavLink>
      <NavLink to="/news" className="hover:text-primary">
        News
      </NavLink>
      <NavLink to="/about" className="hover:text-primary">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
