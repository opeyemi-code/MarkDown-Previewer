import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav({ className }) {
  return (
    <nav className={className}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/saved-files" className="nav__link nav__link--active">
            Saved Files
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
