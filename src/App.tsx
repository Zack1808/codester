import React from "react";

import { Search } from "./components";

const App: React.FC = () => {
  return (
    <div className={`app `}>
      <Search placeholder="Search for" />
    </div>
  );
};

export default App;
