import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button className="button" onClick={onClick}>
        {label}
      </button>
      <h1>hi</h1>
    </div>
  );
};

export default Button;
