import React, { useState } from "react";

import { HorizontalResizeProps } from "../types";

import "../css/components/HorizontalResize.css";

const MIN_WIDTH = 20;

const HorizontalResize: React.FC<HorizontalResizeProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const [width, setWidth] = useState<number[]>(
    new Array(childrenArray.length).fill(100 / childrenArray.length)
  );

  const handleMouseDown =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const startX = e.clientX;
      const startWidths = [...width];
      const totalWidth = (e.target as HTMLElement).parentNode!.parentElement!
        .offsetWidth;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const dx = moveEvent.clientX - startX;
        const deltaPercent = (dx / totalWidth) * 100;
        const newWidths = [...startWidths];

        if (childrenArray.length > 1) {
          // Calculate new widths for multiple children
          newWidths[index] += deltaPercent;
          newWidths[index + 1] -= deltaPercent;

          // Convert the widths to pixel values for comparison
          const newWidthPixels = newWidths.map(
            (widthPercent) => (widthPercent / 100) * totalWidth
          );

          // Ensure that the new widths are not smaller than the minimum width
          if (
            newWidthPixels[index] >= MIN_WIDTH &&
            newWidthPixels[index + 1] >= MIN_WIDTH
          ) {
            setWidth(newWidths);
          }
        }
      };
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

  return (
    <div
      className="horizontal-resize-container"
      style={{ gridTemplateColumns: width.map((w) => `${w}%`).join(" ") }}
    >
      {childrenArray.map((child, index) => (
        <div className="child" key={index}>
          <div className="horizontal-resize-content">{child}</div>
          {(index < childrenArray.length - 1 || childrenArray.length === 1) && (
            <div
              className="horizontal-resize-handle"
              onMouseDown={handleMouseDown(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HorizontalResize;
