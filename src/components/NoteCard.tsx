import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaMessage } from "react-icons/fa6";

import { Preview } from "./";

import { NoteCardProps } from "../types";

import "../css/components/NoteCard.css";

const NoteCard: React.FC<NoteCardProps> = ({ info }) => {
  const { id, html, css, js, userImage, userName, title, likedBy, comments } =
    info;

  return (
    <div className="note-card-container">
      {" "}
      <div className="note-card-show-preview">
        <Preview html={html} css={css} js={js} zoom={50} />
      </div>
      <Link to={`/editor/${id}`} className="note-card-body">
        <img src={userImage} alt="Profile picture" />
        <span>
          <h3>{title}</h3>
          <h4>{userName}</h4>
        </span>
      </Link>
      <div className="note-card-footer">
        <span>
          <FaRegHeart style={{ fontSize: "1.5rem" }} />
          {likedBy.length}
        </span>
        <span>
          <FaMessage style={{ fontSize: "1.5rem" }} />
          {comments.length}
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
