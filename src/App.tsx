import React, { useRef, useEffect } from "react";

import { Select } from "./components";

const options = [{ label: "Hello", value: "there" }];

const App: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={`app `}>
      <Select options={options} ref={ref} />
    </div>
  );
};

export default App;
