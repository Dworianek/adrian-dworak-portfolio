import "../styles/Footer.css";
import React from "react";

import faceboon_icon from "../images/icon sm/facebook.svg";
import github_icon from "../images/icon sm/github.svg";
import instagram_icon from "../images/icon sm/instagram.svg";
import linkedin_icon from "../images/icon sm/linkedin.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <span>Copyright © 2023 Adrian Dworak</span>

        <ul>
          <li>
            <a
              href="https://www.facebook.com/adrian.dworak.1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={faceboon_icon} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Dworianek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github_icon} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/adolciaaaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram_icon} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adrian-dworak-1b59641a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin_icon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
