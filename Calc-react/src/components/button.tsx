import React from "react";

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string | number | readonly string[] ;
}

const Button: React.FC<ButtonProps> = ({ handleClick, label }) => {
    return (
      <button onClick={handleClick} value={label.toString()}>
        {label}
      </button>
    );
  };

export default Button;
