import React from "react";
import { FaCode, FaCopyright } from "react-icons/fa6";

import "../css/components/Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <h2>
        <FaCode /> Codester
      </h2>
      <p>
        <FaCopyright /> JPN, 2024 - {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
