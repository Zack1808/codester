import React from "react";

import { Search, Button } from "./";

import "../css/components/Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Search placeholder="Search for user, note, tag..." />
      {false && (
        <Button to="/profile" className="profile-button">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
            alt="Profile picture"
          />
        </Button>
      )}
    </div>
  );
};

export default Header;
