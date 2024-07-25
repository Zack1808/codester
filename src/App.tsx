import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { CodeEditor } from "./components";

const App: React.FC = () => {
  const [html, sethtml] = useState<string>("");
  const [css, setcss] = useState<string>("");
  const [js, setjs] = useState<string>("");

  return (
    <BrowserRouter>
      <div className={`app barbie `}>
        <CodeEditor
          code={html}
          onChange={sethtml}
          displayName="HTML"
          language="xml"
        />
        <CodeEditor
          code={css}
          onChange={setcss}
          displayName="CSS"
          language="css"
        />
        <CodeEditor
          code={js}
          onChange={setjs}
          displayName="JS"
          language="javascript"
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
