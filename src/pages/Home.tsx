import React, { useState } from "react";

import { Container, CodeEditor, Button, NoteCard } from "../components";

import "../css/pages/Home.css";

const info = {
  id: "fasdfasdfvnfsdčklcgvačsdfr",
  html: "<h1>Hello world</h1>",
  css: "",
  js: "",
  userImage:
    "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg",
  title: "Title",
  userName: "userName",
  likedBy: [],
  comments: [],
};

const Home: React.FC = () => {
  const [code] = useState<string>(
    `const wantToTestMyCode = true\n\nif (wantToTestMyCode) {\n\ttry {\n\t\tconsole.log("Use Codester");\n\t}\n\tcatch (err) {}\n}`
  );

  return (
    <>
      <Container direction="horizontal">
        <div className="home-hero">
          <h1>Write, test and discover Front-end code</h1>
          <p>
            Codester is a free front-end testing environment where developers of
            all calibers can test their HTML, CSS, and/or JS code online. Build
            websites, build test cases and debug, find inspiration.
          </p>
          {true && (
            <Button primary to="/signup">
              Sign Up
            </Button>
          )}
        </div>
        <CodeEditor
          displayName="JavaScript"
          language="javascript"
          onChange={() => {}}
          code={code}
          lineWrap
          readOnly="nocursor"
        />
      </Container>
      <Container direction="vertical">
        <h2>Check out the lates Notes</h2>
        <div className="home-notes-grid">
          <NoteCard info={info} />
          <NoteCard info={info} />
          <NoteCard info={info} />
          <NoteCard info={info} />
          <NoteCard info={info} />
          <NoteCard info={info} />
        </div>
        <Button primary to="/latest">
          See more
        </Button>
      </Container>
    </>
  );
};

export default Home;
