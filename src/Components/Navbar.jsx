import { useState } from "react";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <nav className="navbar has-shadow is-spaced is-primary is-fixed-top">
      <div className="navbar-brand">
        <p className="navbar-item title">Andrea Catania</p>
        <div
          className={`navbar-burger ${burger ? "is-active" : null}`}
          data-target="navbarElements"
          onClick={handleBurger}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        className={`navbar-menu ${burger ? "is-active" : null}`}
        id="navbarElements"
      >
        <div className="navbar-end">
          <p className="navbar-item">About</p>
          <p className="navbar-item">Projects</p>
          <p className="navbar-item">Technologies</p>
          <p className="navbar-item">Contacts</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
