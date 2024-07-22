import React from "react";
import { LinkProps } from "react-router-dom";

export type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  to?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<LinkProps>;
