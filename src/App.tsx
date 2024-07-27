import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}>
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
