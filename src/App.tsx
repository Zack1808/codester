import React from "react";
import { BrowserRouter } from "react-router-dom";

import { UserCard } from "./components";

const user = {
  uid: "fakldsfnmačnbiff",
  imgUrl: "https://picsum.photos/200",
  userName: "User",
  notesAmount: 50,
  followedBy: [],
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={`app `}>
        <UserCard userSnippet={user} />
      </div>
    </BrowserRouter>
  );
};

export default App;
