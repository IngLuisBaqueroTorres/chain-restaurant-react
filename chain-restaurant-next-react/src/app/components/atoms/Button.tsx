import React, { FunctionComponent, MouseEvent } from "react";

interface ButtonProps {
  fontColor?: string;
  color?: string;
  text?: string;
  size?: number;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  icon?: string;
  alt?: string;
  padding?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  fontColor,
  color,
  text,
  size,
  disabled,
  onClick,
  alt,
  icon,
  padding,
}) => {
  return (
    <button
      style={{
        display: "flex",
        color: fontColor,
        fontSize: size,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        background: color,
        padding: padding,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}{" "}
      <span>
        <img src={icon} alt={alt} style={{ marginLeft: 5, marginRight: 5 }} />
      </span>
    </button>
  );
};

export default Button;
