import React from "react";

export default function Button({ icon, className, onClick }) {
  return (
    <button onClick={onClick} className={className} type="button">
      {icon}
    </button>
  );
}
