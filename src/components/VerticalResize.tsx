import React, { useState, useRef } from "react";

import { HorizontalResizeProps } from "../types";

import "../css/components/VerticalResize.css";

const MIN_WIDTH = 200;

const VerticalResize: React.FC<HorizontalResizeProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const [height, setHeight] = useState<number[]>(
    new Array(childrenArray.length).fill(100 / childrenArray.length)
  );

  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseDown =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      if (contentRef.current) {
        contentRef.current
          .querySelectorAll(".vertical-resize-content")
          [index].classList.add("vertical-drag");
        contentRef.current
          .querySelectorAll(".vertical-resize-content")
          [index + 1].classList.add("vertical-drag");
      }
      const startY = e.clientY;
      const startHeights = [...height];
      const totalHeight = (e.target as HTMLElement).parentNode!.parentElement!
        .offsetHeight;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const dy = moveEvent.clientY - startY;
        const deltaPercent = (dy / totalHeight) * 100;
        const newHeights = [...startHeights];

        if (childrenArray.length > 1) {
          newHeights[index] += deltaPercent;
          newHeights[index + 1] -= deltaPercent;

          const newHeightPixels = newHeights.map(
            (heightPercent) => (heightPercent / 100) * totalHeight
          );

          if (index + 1 !== childrenArray.length - 1) {
            if (
              newHeightPixels[index] >= MIN_WIDTH &&
              newHeightPixels[index + 1] >= MIN_WIDTH
            ) {
              setHeight(newHeights);
            }
          } else {
            if (newHeightPixels[index] >= MIN_WIDTH) {
              setHeight(newHeights);
            }
          }
        } else {
          newHeights[index] += deltaPercent;
          setHeight(newHeights);
        }
      };
      const handleMouseUp = () => {
        if (contentRef.current) {
          contentRef.current
            .querySelectorAll(".vertical-resize-content")
            [index].classList.remove("vertical-drag");
          contentRef.current
            .querySelectorAll(".vertical-resize-content")
            [index + 1].classList.add("vertical-drag");
        }
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

  return (
    <div
      className="vertical-resize-container"
      ref={contentRef}
      style={{ gridTemplateRows: height.map((h) => `${h}%`).join(" ") }}
    >
      {childrenArray.map((child, index) => (
        <div className="vertical-child" key={index}>
          <div className="vertical-resize-content">{child}</div>
          {(index < childrenArray.length - 1 || childrenArray.length === 1) && (
            <div
              className="vertical-resize-handle"
              onMouseDown={handleMouseDown(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalResize;
