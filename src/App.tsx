import React from "react";
import { BrowserRouter } from "react-router-dom";

import HorizontalResize from "./components/HorizontalResize";
import VerticalResize from "./components/VerticalResize";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}>
        <div style={{ width: "100%", height: "100dvh" }}>
          <VerticalResize>
            <HorizontalResize>
              <div
                style={{
                  backgroundColor: "red",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "green",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "blue",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </HorizontalResize>
            <div
              style={{
                backgroundColor: "yellow",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </VerticalResize>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
