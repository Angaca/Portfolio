import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="hero-head">
      <nav className="navbar has-shadow is-transparent is-spaced is-fixed-top is-dark">
        <div className="navbar-brand">
          <p className="navbar-item is-size-2">AC</p>
          <div
            className="navbar-burger my-auto mr-3"
            data-target="navbarElements"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          className={`navbar-menu has-text-centered ${
            menu ? "is-active" : null
          }`}
          id="navbarElements"
        >
          <div className="navbar-end">
            <p
              onClick={toggleMenu}
              className="navbar-item has-text-weight-semibold has-text-danger mx-3"
            >
              <Link to="/">Home</Link>
            </p>
            <p
              onClick={toggleMenu}
              className="navbar-item has-text-weight-semibold mx-3"
            >
              <Link to="/About">About</Link>
            </p>
            <p
              onClick={toggleMenu}
              className="navbar-item has-text-weight-semibold mx-3"
            >
              <Link to="/Projects">Projects</Link>
            </p>
            <p
              onClick={toggleMenu}
              className="navbar-item has-text-weight-semibold mx-3"
            >
              <Link to="/Contact">Contact</Link>
            </p>
            <button
              className="delete mt-3 is-hidden-desktop"
              onClick={toggleMenu}
            ></button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
