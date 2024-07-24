import React from "react";

import { Preview } from "./components";

const App: React.FC = () => {
  return (
    <div className={`app `}>
      <Preview
        html={`<h1>Hello there</h1>`}
        css={`
          h1 {
            color: grey;
          }
        `}
        js={`const title = document.querySelector("h1");
          title.innerHTML = "Hi there"
          `}
      />
    </div>
  );
};

export default App;
