import React from "react";
import DataContext from "../context/DataContext";

export default function ButtonWithText({ icon, text, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
