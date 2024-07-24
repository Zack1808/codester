import React from "react";
import { BrowserRouter } from "react-router-dom";

import { NoteCard } from "./components";

const cardProp = {
  id: "fasdfnvvafdsfndapodf2334alnfkads",
  html: `<h1>Hello there</h1>`,
  css: `*{padding: 0; margin: 0; box-sizing: border-box} html { background-color: #0e0e0f} h1 { color: lightblue}`,
  js: "",
  userName: "User",
  title: "Title",
  userImage: "https://picsum.photos/200",
  likedBy: [],
  comments: [],
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}>
        <NoteCard info={cardProp} />
      </div>
    </BrowserRouter>
  );
};

export default App;
