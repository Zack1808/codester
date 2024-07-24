import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { CodeEditor } from "./components";

const App: React.FC = () => {
  const [code, setCode] = useState<string>("");

  return (
    <BrowserRouter>
      <div className={`app `}>
        <CodeEditor
          code={code}
          onChange={setCode}
          displayName="HTML"
          language="xml"
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
