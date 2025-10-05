import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

export default function HeaderNav({ className }) {
  const { pageTitle, setPageTitle, setIsToggle } = useContext(DataContext);

  const handleClick = (page) => {
    setPageTitle(`MarkdownPro | ${page}`);
    document.title = `MarkdownPro | ${page}`;
    setIsToggle(false);
  };

  const getActiveClass = (page) =>
    pageTitle.includes(page) ? "nav__link--active" : "";

  return (
    <nav className={className}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            to="/"
            className={`nav__link ${getActiveClass("Home")}`}
            onClick={() => handleClick("Home")}
          >
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/saved-files"
            className={`nav__link ${getActiveClass("Saved Files")}`}
            onClick={() => handleClick("Saved Files")}
          >
            Saved Files
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/about"
            className={`nav__link ${getActiveClass("About")}`}
            onClick={() => handleClick("About")}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
