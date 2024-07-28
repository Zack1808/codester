import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Footer, Header } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}>
        <Navbar />
        <div className="pages">
          <Header />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
