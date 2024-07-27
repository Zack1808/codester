import React from "react";
import { Link } from "react-router-dom";

import { ButtonProps } from "../types";

import "../css/components/Button.css";

const Button: React.FC<ButtonProps> = React.memo(
  ({ primary, secondary, to, className, ...rest }) => {
    if (primary && secondary)
      throw new Error(
        "The button component can only be used as either primary or secondary!"
      );

    if (to)
      return (
        <Link
          to={to}
          className={`btn ${primary ? "primary" : ""} ${
            secondary ? "secondary" : ""
          } ${className}`}
          {...rest}
        >
          {rest.children}
        </Link>
      );

    return (
      <button
        className={`btn ${primary ? "primary" : ""} ${
          secondary ? "secondary" : ""
        } ${className}`}
        {...rest}
      >
        {rest.children}
      </button>
    );
  }
);

export default Button;
