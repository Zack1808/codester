import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages";

import { Navbar, Footer, Header } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}>
        <Navbar />
        <div className="pages">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
