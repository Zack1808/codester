import React, { useRef, useEffect } from "react";
import { Editor, EditorChange } from "codemirror";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { CodeEditorProps } from "../types";

import "../css/components/CodeEditor.css";

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onChange,
  displayName,
  language,
}) => {
  const handleChange = (editor: Editor, data: EditorChange, value: string) => {
    onChange(value);
  };

  return (
    <div className="code-editor-container">
      <h4>{displayName}</h4>
      <CodeMirror
        onBeforeChange={handleChange}
        value={code}
        className="code-editor"
        options={{
          mode: language,
          theme: "material",
          lineWrapping: true,
          lineNumbers: true,
          direction: "ltr",
        }}
      />
    </div>
  );
};

export default CodeEditor;
