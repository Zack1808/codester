import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCode, FaXmark } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";

import { Button } from "./";

import "../css/components/Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/note") return;

  return (
    <div className="navbar-container">
      <Link to="/" className="logo">
        <FaCode style={{ fontSize: "3rem" }} />
        <h2>Codester</h2>
      </Link>
      <Button className="menu">
        <CgMenuRight style={{ fontSize: "2.25rem" }} />
      </Button>
      <div className="background">
        <ul className="navigation">
          <li className="close-menu">
            <Button>
              <FaXmark style={{ fontSize: "2.25rem" }} />
            </Button>
          </li>
          <li style={{ marginBottom: "3rem" }}>
            <Button to="/note" primary>
              Create a note
            </Button>
          </li>
          {false && (
            <>
              <li>
                <Button to="/login">Log in</Button>
              </li>
              <li>
                <Button to="/signup">Sign up</Button>
              </li>
            </>
          )}
          {true && (
            <>
              <li>
                <Button to="/my-notes">My notes</Button>
              </li>
              <li>
                <Button to="/following">Following</Button>
              </li>
              <li>
                <Button to="/settings">Settings</Button>
              </li>
            </>
          )}
          <li>
            <Button to="/trending">Trending</Button>
          </li>
          {true && (
            <li>
              <Button>Log out</Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
