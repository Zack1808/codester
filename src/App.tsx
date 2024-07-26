import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { CodeEditor } from "./components";

import HorizontalResize from "./components/HorizontalResize";
import VerticalResize from "./components/VerticalResize";

const App: React.FC = () => {
  const [code, setCode] = useState<string>("");

  return (
    <BrowserRouter>
      <div className={`app `}>
        <div style={{ width: "100%", height: "100dvh" }}>
          <VerticalResize>
            <HorizontalResize>
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
            </HorizontalResize>
            <div
              style={{
                backgroundColor: "white",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </VerticalResize>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
