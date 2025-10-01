import React from "react";

export default function ButtonWithText({ icon, text, className }) {
  return (
    <button className={className}>
      {icon}
      {text}
    </button>
  );
}
