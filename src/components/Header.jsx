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
    <>
      <header className="header">
        <div className="header__logo-wrapper">
          <img src="/markdown.png" alt="Logo" className="header__logo" />
          <div className="header__info">
            <h1 className="header__title">MarkdownPro</h1>
            <p className="header__description">Professional Editor</p>
          </div>
        </div>
        <button className="btn header__hamburger-btn" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} className="hamburger-menu" />
        </button>
        {isToggle && <HeaderNav className="nav" />}
        <HeaderNav className="nav nav-lg-visible" />
      </header>
    </>
  );
}
