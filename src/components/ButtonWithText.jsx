import React from "react";

export default function ButtonWithText({ icon, text, className, onClick }) {
  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
      aria-label={text} // Helps screen readers describe the button
    >
      {icon && <span aria-hidden="true">{icon}</span>}{" "}
      {/* Hide icon from screen readers */}
      <span className="button__text">{text}</span>
    </button>
  );
}
