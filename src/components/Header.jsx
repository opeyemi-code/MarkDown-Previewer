import React, { useContext } from "react";
import HeaderNav from "./HeaderNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../context/DataContext";

export default function Header() {
  const { isToggle, setIsToggle } = useContext(DataContext);

  const toggleNav = (e) => {
    e.preventDefault();
    setIsToggle((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <img
          src="/markdown.png"
          alt="MarkdownPro Logo"
          className="header__logo"
        />
        <div className="header__info">
          <h1 className="header__title">MarkdownPro</h1>
          <p className="header__description">Professional Editor</p>
        </div>
      </div>

      {/* Accessible Hamburger Button */}
      <button
        className="btn header__hamburger-btn"
        onClick={toggleNav}
        aria-label={isToggle ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isToggle}
        aria-controls="main-navigation"
      >
        <FontAwesomeIcon icon={faBars} className="hamburger-menu" />
      </button>

      {/* Responsive Navigation */}
      <nav
        id="main-navigation"
        role="navigation"
        aria-label="Primary"
        className={isToggle ? "nav" : "nav nav-lg-visible"}
      >
        <HeaderNav />
      </nav>
    </header>
  );
}
