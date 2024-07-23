import React from "react";

import { TextareaProps } from "../types";

import "../css/components/Textarea.css";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, resize = "none", ...rest }, ref) => {
    return (
      <div className="textarea-component">
        {label && (
          <label htmlFor={rest.id}>
            {label}
            {rest.required && "*"}
          </label>
        )}

        <div className="textarea-container">
          <textarea ref={ref} {...rest} style={{ resize }} />
        </div>
      </div>
    );
  }
);

export default Textarea;
