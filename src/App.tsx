import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Register } from "./pages";

import { Navbar, Footer, Header } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div
        className={`app moody
        `}
      >
        <Navbar />
        <div className="pages">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
