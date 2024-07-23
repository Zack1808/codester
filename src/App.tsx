import React from "react";

import { Select } from "./components";

const options = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
];

const App: React.FC = () => {
  return (
    <div className={`app `}>
      <Select options={options} label="test" initialValue="option3" />
    </div>
  );
};

export default App;
