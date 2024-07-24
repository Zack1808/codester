import React from "react";
import { Link } from "react-router-dom";

import { Button } from "./";

import { UserCardProps } from "../types";

import "../css/components/UserCard.css";

const UserCard: React.FC<UserCardProps> = ({ userSnippet }) => {
  const { uid, imgUrl, userName, notesAmount, followedBy } = userSnippet;

  return (
    <div className="user-card-container">
      <Link to={`/user/${uid}`}>
        <img src={imgUrl} alt="Profile picture" />
      </Link>

      <span>
        <Link to={`/user/${uid}`}>
          <h3>{userName}</h3>
          <p>{notesAmount} notes</p>
        </Link>

        <Button
          primary={!followedBy.includes("fdafadsfadf")}
          secondary={followedBy.includes("fdafadsfadf")}
        >
          {followedBy.includes("fdafadsfadf") ? "Unfollow" : "Follow"}
        </Button>
      </span>
    </div>
  );
};

export default UserCard;
