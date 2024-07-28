import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCode, FaXmark } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";

import { Button } from "./";

import "../css/components/Navbar.css";

const Navbar: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const location = useLocation();

  const handleToggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  if (location.pathname === "/note") return;

  return (
    <div className="navbar-container">
      <Link to="/" className="logo">
        <FaCode style={{ fontSize: "3rem" }} />
        <h2>Codester</h2>
      </Link>
      <Button className="menu" onClick={handleToggleMenu}>
        <CgMenuRight style={{ fontSize: "2.25rem" }} />
      </Button>
      <div
        className={`background ${menuIsOpen ? "open" : ""}`}
        onClick={handleToggleMenu}
      >
        <ul className="navigation" onClick={(event) => event.stopPropagation()}>
          <li className="close-menu">
            <Button onClick={handleToggleMenu}>
              <FaXmark style={{ fontSize: "2.25rem" }} />
            </Button>
          </li>
          <li style={{ marginBottom: "3rem" }}>
            <Button to="/note" primary onClick={handleToggleMenu}>
              Create a note
            </Button>
          </li>
          {false && (
            <>
              <li>
                <Button to="/login" onClick={handleToggleMenu}>
                  Log in
                </Button>
              </li>
              <li>
                <Button to="/signup" onClick={handleToggleMenu}>
                  Sign up
                </Button>
              </li>
            </>
          )}
          {true && (
            <>
              <li>
                <Button to="/my-notes" onClick={handleToggleMenu}>
                  My notes
                </Button>
              </li>
              <li>
                <Button to="/following" onClick={handleToggleMenu}>
                  Following
                </Button>
              </li>
              <li>
                <Button to="/settings" onClick={handleToggleMenu}>
                  Settings
                </Button>
              </li>
            </>
          )}
          <li>
            <Button to="/trending" onClick={handleToggleMenu}>
              Trending
            </Button>
          </li>
          {true && (
            <li>
              <Button onClick={handleToggleMenu}>Log out</Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
