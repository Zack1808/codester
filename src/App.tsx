import React from "react";

import { Input } from "./components";

const App: React.FC = () => {
  return (
    <div className={`app `}>
      <Input type="password" label="test" id="number" placeholder="Hello" />
    </div>
  );
};

export default App;
