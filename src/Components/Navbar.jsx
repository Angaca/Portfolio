import { useState } from "react";

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
              className="navbar-item has-text-weight-semibold has-text-danger"
            >
              Home
            </p>
            <p
              onClick={toggleMenu}
              className="navbar-item has-text-weight-semibold"
            >
              About
            </p>
            <p
              onClick={toggleMenu}
              className="navbar-item has-text-weight-semibold"
            >
              Projects
            </p>
            <p
              onClick={toggleMenu}
              className="navbar-item has-text-weight-semibold"
            >
              Contact
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
