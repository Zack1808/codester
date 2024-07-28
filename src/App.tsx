import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Footer } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}>
        <Navbar />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
