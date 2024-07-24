import React from "react";

import { PreviewProps } from "../types";

import "../css/components/Preview.css";

const Preview: React.FC<PreviewProps> = ({ html, css, js, zoom = 100 }) => {
  const defaultHTML = `
  <html>
    <head>
      <style>
        html {
          background-color: white
        }
        body {
          zoom: ${zoom / 100}
        }
        ${css}
      </style>
    </head>
    <body>
      ${html}
      <script>
        ${js}

        const handleError = (err) => {
          const root = document.body("root")
          root.innerHTML = "<div style='color: red;'><h4>Runtime Error:</h4>" + err + "</div>"
          console.error(err)
        }

        window.addEventListener('error', (event) => {
          event.preventDefault()
          handleError(event.error)
        })

        window.addEventListener('message', (event) => {
          try {
            eval(event.data)
          } catch (err) {
            handleError(err)
          }
        }, false)
      </script>
    </body>
  </html>
`;

  return <iframe srcDoc={defaultHTML}></iframe>;
};

export default Preview;
