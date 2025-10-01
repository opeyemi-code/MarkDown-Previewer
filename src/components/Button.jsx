import React from "react";

export default function Button({ icon, className }) {
  return (
    <button className={className} type="button">
      {icon}
    </button>
  );
}
