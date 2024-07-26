import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Select } from "./components";

const options = [
  { label: "Hello", value: "hello" },
  { label: "There", value: "there" },
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}>
        <Select options={options} />
      </div>
    </BrowserRouter>
  );
};

export default App;
