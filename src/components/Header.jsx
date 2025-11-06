import React, { useContext } from "react";
import HeaderNav from "./HeaderNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../context/DataContext";

export default function Header() {
  const { isToggle, setIsToggle } = useContext(DataContext);

  const toggleNav = (e) => {
    e.preventDefault();
    console.log("yes");
    setIsToggle((prev) => !prev);
  };

  return (
    <header className="header bg-white flex justify-between items-center px-4 py-4 border-b relative border-[#e5e7eb] lg:px-[5vw]">
      <div className="header__logo-wrapper flex gap-2">
        <img
          src="/markdown.png"
          alt="MarkdownPro Logo"
          className="header__logo w-[15px] h-7 lg:w-9 lg:h-auto"
        />
        <div className="header__info flex flex-col justify-center">
          <h1 className="header__title text-2xl text-slate-900 font-bold">
            MarkdownPro
          </h1>
          <p className="header__description text-[12px] hidden lg:block lg:text-sm text-gray-400">
            Professional Editor
          </p>
        </div>
      </div>

      {/* Accessible Hamburger Button */}
      <button
        className="btn header__hamburger-btn lg:hidden bg-[#E5E7EB] p-1.5 cursor-pointer"
        onClick={toggleNav}
        aria-label={isToggle ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isToggle}
        aria-controls="main-navigation"
      >
        <FontAwesomeIcon icon={faBars} className="hamburger-menu" />
      </button>

      {/* Responsive Navigation */}
      {/* <nav
        id="main-navigation"
        role="navigation"
        aria-label="Primary"
        // className={isToggle ? "nav" : "nav nav-lg-visible"}
        className="hidden lg:block"
      >
        <HeaderNav />
      </nav> */}
      <HeaderNav />
    </header>
  );
}
