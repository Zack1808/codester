import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { CodeEditor, ResizeBox } from "./components";

const App: React.FC = () => {
  const [code, setCode] = useState<string>("");

  return (
    <BrowserRouter>
      <div className={`app `}>
        <div style={{ width: "100%", height: "100dvh" }}>
          <ResizeBox direction="vertical" max={200}>
            <ResizeBox direction="horizontal">
              <CodeEditor
                code={code}
                onChange={setCode}
                language="javascript"
                displayName="JavaScript"
              />
              <CodeEditor
                code={code}
                onChange={setCode}
                language="javascript"
                displayName="JavaScript"
              />
              <CodeEditor
                code={code}
                onChange={setCode}
                language="javascript"
                displayName="JavaScript"
              />
            </ResizeBox>
            <div
              style={{
                backgroundColor: "white",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </ResizeBox>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
