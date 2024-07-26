import React, { useState, useRef } from "react";

import { HorizontalResizeProps } from "../types";

import "../css/components/HorizontalResize.css";

const HorizontalResize: React.FC<HorizontalResizeProps> = ({
  children,
  min = 0,
  max = 20,
}) => {
  const childrenArray = React.Children.toArray(children);
  const [width, setWidth] = useState<number[]>(
    new Array(childrenArray.length).fill(100 / childrenArray.length)
  );

  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseDown =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      if (contentRef.current) {
        contentRef.current
          .querySelectorAll(".horizontal-resize-content")
          [index].classList.add("horizontal-drag");
        contentRef.current
          .querySelectorAll(".horizontal-resize-content")
          [index + 1].classList.add("horizontal-drag");
      }
      const startX = e.clientX;
      const startWidths = [...width];
      const totalWidth = (e.target as HTMLElement).parentNode!.parentElement!
        .offsetWidth;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const dx = moveEvent.clientX - startX;
        const deltaPercent = (dx / totalWidth) * 100;
        const newWidths = [...startWidths];

        if (childrenArray.length > 1) {
          newWidths[index] += deltaPercent;
          newWidths[index + 1] -= deltaPercent;

          const newWidthPixels = newWidths.map(
            (widthPercent) => (widthPercent / 100) * totalWidth
          );

          if (index + 1 !== childrenArray.length - 1) {
            if (
              newWidthPixels[index] >= max &&
              newWidthPixels[index + 1] >= max
            ) {
              console.log(newWidths[index], newWidths[index + 1]);
              setWidth(newWidths);
            }
          } else {
            if (
              newWidthPixels[index] >= max &&
              newWidthPixels[index + 1] >= min
            ) {
              console.log(newWidths[index], newWidths[index + 1]);
              setWidth(newWidths);
            }
          }
        } else {
          newWidths[index] += deltaPercent;
          setWidth(newWidths);
        }
      };
      const handleMouseUp = () => {
        if (contentRef.current) {
          contentRef.current
            .querySelectorAll(".horizontal-resize-content")
            [index].classList.remove("horizontal-drag");
          contentRef.current
            .querySelectorAll(".horizontal-resize-content")
            [index + 1].classList.add("horizontal-drag");
        }
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

  return (
    <div
      className="horizontal-resize-container"
      ref={contentRef}
      style={{ gridTemplateColumns: width.map((w) => `${w}%`).join(" ") }}
    >
      {childrenArray.map((child, index) => (
        <div className="horizontal-child" key={index}>
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
