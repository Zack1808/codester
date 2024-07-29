import React from "react";

import { ContainerProps } from "../types";

import "../css/components/Container.css";

const Container: React.FC<ContainerProps> = ({ direction, children }) => {
  return <div className={`container container-${direction}`}>{children}</div>;
};

export default Container;
