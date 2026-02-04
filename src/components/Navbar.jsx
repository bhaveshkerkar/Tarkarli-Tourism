import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* Overlay Navigation (Top Right) */}
      <nav className="hero-navbar">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/stay">Stay</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* Hero Text */}
      <div className="overlay">
        <h1 className="title">EXPLORE TARKARLI</h1>
        <p className="subtitle">
          Stay • Scuba • Water Sports • Local Experiences
        </p>
      </div>
    </header>
  );
}

export default Header;
