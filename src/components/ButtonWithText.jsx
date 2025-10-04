import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

export default function ButtonWithText({ icon, text, className, onClick }) {
  // const { handleButton } = useContext(DataContext);
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
