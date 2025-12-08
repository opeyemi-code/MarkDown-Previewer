import React from "react";
import type { JSX } from "react";
import type { ButtonProps } from "./types/models.js";

export default function Button({
  icon,
  className,
  onClick,
  ariaLabel,
}: ButtonProps): JSX.Element {
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
