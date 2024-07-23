import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import { Button } from "./";

import { InputProps } from "../types";

import "../css/components/Input.css";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, ...rest }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const handleClick = () => setPasswordVisible((prevState) => !prevState);

    return (
      <div className="input-component">
        {label && (
          <label htmlFor={rest.id}>
            {label}
            {rest.required && "*"}
          </label>
        )}

        <div className="input-container">
          <input
            {...rest}
            ref={ref}
            type={
              type === "password" ? (passwordVisible ? "text" : type) : type
            }
          />

          {type === "password" && (
            <Button onClick={handleClick}>
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </Button>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
