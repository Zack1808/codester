import React from "react";

import { SliderProps } from "../types";

import "../css/components/Slider.css";

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div className="slider-component">
        {label && <label htmlFor={rest.id}>{label}</label>}

        <div className="slider-container" aria-label="slider">
          <input type="checkbox" {...rest} ref={ref} />
          <span className="slider">
            <span className="handle"></span>
          </span>
        </div>
      </div>
    );
  }
);

export default Slider;
