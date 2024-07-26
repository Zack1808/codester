import React from "react";
import { Editor, EditorChange } from "codemirror";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { CodeEditorProps } from "../types";

import "../css/components/CodeEditor.css";
import "../css/themes/moody.css";
import "../css/themes/sith.css";
import "../css/themes/militant.css";
import "../css/themes/heaven.css";
import "../css/themes/barbie.css";

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onChange,
  displayName,
  language,
  lineWrap,
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
          theme: "moody",
          lineWrapping: lineWrap || true,
          lineNumbers: true,
          direction: "ltr",
        }}
      />
    </div>
  );
};

export default CodeEditor;
