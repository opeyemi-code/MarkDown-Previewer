import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__copyright">
          © 2024 MarkdownPro. All rights reserved.
        </p>
        <p className="footer__link-item">
          <a
            className="footer__link"
            href="github.com/opeyemi-code"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="footer__github-icon" />
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}
