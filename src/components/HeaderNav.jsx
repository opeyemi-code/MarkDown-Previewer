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
    <nav
      className={className}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <ul className="nav__list" role="menubar">
        <li className="nav__item" role="none">
          <Link
            to="/"
            role="menuitem"
            aria-current={pageTitle.includes("Home") ? "page" : undefined}
            className={`nav__link ${getActiveClass("Home")}`}
            onClick={() => handleClick("Home")}
          >
            Home
          </Link>
        </li>

        <li className="nav__item" role="none">
          <Link
            to="/saved-files"
            role="menuitem"
            aria-current={
              pageTitle.includes("Saved Files") ? "page" : undefined
            }
            className={`nav__link ${getActiveClass("Saved Files")}`}
            onClick={() => handleClick("Saved Files")}
          >
            Saved Files
          </Link>
        </li>

        <li className="nav__item" role="none">
          <Link
            to="/about"
            role="menuitem"
            aria-current={pageTitle.includes("About") ? "page" : undefined}
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
