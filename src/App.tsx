import React from "react";
import { BrowserRouter } from "react-router-dom";

import { NoteCard } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}></div>
    </BrowserRouter>
  );
};

export default App;
