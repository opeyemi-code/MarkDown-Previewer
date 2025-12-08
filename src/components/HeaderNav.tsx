import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import DataContext from "../context/DataContext.js";

export default function HeaderNav() {
  const { pageTitle, setPageTitle, isToggle, setIsToggle } =
    useContext(DataContext);

  const navClass = isToggle ? "block" : "hidden lg:block";

  const handleClick = (page) => {
    setPageTitle(`MarkdownPro | ${page}`);
    document.title = `MarkdownPro | ${page}`;
    setIsToggle(false);
  };

  const getActiveClass = (page) =>
    pageTitle.includes(page) ? "nav__link--active" : "";

  return (
    <nav
      className={`${navClass} absolute top-full left-0 w-full bg-white border-t border-[#e5e7eb] px-4 py-2 lg:py-0 lg:static lg:border-0 lg:w-auto lg:px-0`}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <ul className="nav__list flex justify-between gap-5" role="menubar">
        <li className="nav__item" role="none">
          <NavLink
            to="/"
            role="menuitem"
            aria-current={pageTitle.includes("Home") ? "page" : undefined}
            className={`nav__link ${getActiveClass(
              "Home"
            )} text-sm text-slate-700 font-medium lg:text-lg`}
            onClick={() => handleClick("Home")}
          >
            Home
          </NavLink>
        </li>

        <li className="nav__item" role="none">
          <Link
            to="/saved-files"
            role="menuitem"
            aria-current={
              pageTitle.includes("Saved Files") ? "page" : undefined
            }
            className={`nav__link ${getActiveClass(
              "Saved Files"
            )} text-sm text-slate-700 font-medium lg:text-lg`}
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
            className={`nav__link ${getActiveClass(
              "About"
            )} text-sm text-slate-700 font-medium lg:text-lg`}
            onClick={() => handleClick("About")}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
