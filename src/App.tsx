import React from "react";

import { Textarea } from "./components";

const App: React.FC = () => {
  return (
    <div className={`app `}>
      <Textarea label="Hello" placeholder="Hello" />
    </div>
  );
};

export default App;
