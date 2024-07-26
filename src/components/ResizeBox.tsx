import React from "react";

import VerticalResize from "./VerticalResize";
import HorizontalResize from "./HorizontalResize";

import { ResizeBoxProps } from "../types";

const ResizeBox: React.FC<ResizeBoxProps> = ({
  children,
  min,
  max,
  direction,
}) => {
  return direction === "horizontal" ? (
    <HorizontalResize max={max} min={min}>
      {children}
    </HorizontalResize>
  ) : (
    <VerticalResize max={max} min={min}>
      {children}
    </VerticalResize>
  );
};

export default ResizeBox;
