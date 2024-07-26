import React from "react";
import { BrowserRouter } from "react-router-dom";

import HorizontalResize from "./components/HorizontalResize";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}>
        <HorizontalResize>
          <div
            style={{ backgroundColor: "red", height: "100%", width: "100%" }}
          ></div>
          <div
            style={{ backgroundColor: "green", height: "100%", width: "100%" }}
          ></div>
          <div
            style={{ backgroundColor: "blue", height: "100%", width: "100%" }}
          ></div>
        </HorizontalResize>
      </div>
    </BrowserRouter>
  );
};

export default App;
