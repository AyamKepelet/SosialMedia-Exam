import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">omorfos</div>

      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-btn active" aria-label="Home">
            <i className="ti ti-home" />
          </Link>
        </li>
        <li>
          <Link to="/user" className="nav-btn" aria-label="User">
            <i className="ti ti-users" />
          </Link>
        </li>
        <li>
          <button className="nav-btn" aria-label="Compass">
            <i className="ti ti-compass" />
          </button>
        </li>
        <li>
          <button className="nav-btn" aria-label="Bell">
            <i className="ti ti-bell" />
          </button>
        </li>
      </ul>
    </nav>
  );
}


