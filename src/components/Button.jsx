import React from "react";

export default function Button({ icon, className, onClick, ariaLabel }) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      role="button"
    >
      {icon}
    </button>
  );
}
