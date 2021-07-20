import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Andrea from "../asset/Andrea_Catania.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const { pathname } = useLocation();

  return (
    <div className="hero-head">
      <nav className="navbar has-shadow is-spaced is-fixed-top is-dark has-background-dark">
        <div className="navbar-brand">
          <p className="navbar-item is-size-2">
            <Link to="/">AC</Link>
          </p>
          <figure className="image is-48x48">
            <img className="is-rounded" src={Andrea} alt="" />
          </figure>
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
              className={`navbar-item has-text-weight-semibold mx-3 ${
                pathname === "/" ? "has-text-danger" : null
              }`}
            >
              <Link to="/">Home</Link>
            </p>
            <p
              onClick={toggleMenu}
              className={`navbar-item has-text-weight-semibold mx-3 ${
                pathname === "/About" ? "has-text-danger" : null
              }`}
            >
              <Link to="/About">About</Link>
            </p>
            <p
              onClick={toggleMenu}
              className={`navbar-item has-text-weight-semibold mx-3 ${
                pathname === "/Projects" ? "has-text-danger" : null
              }`}
            >
              <Link to="/Projects">Projects</Link>
            </p>
            <p
              onClick={toggleMenu}
              className={`navbar-item has-text-weight-semibold mx-3 ${
                pathname === "/Contact" ? "has-text-danger" : null
              }`}
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
