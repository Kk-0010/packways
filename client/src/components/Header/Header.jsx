import { Navbar } from "../";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <img src="/logo.svg" alt="Logistix Logo" className="h-8" />
          LOGISTIX
        </Link>

        {/* Navigation Menu */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
