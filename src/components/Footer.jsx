import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-white p-8 flex flex-col items-center gap-3 text-slate-500 text-sm lg:text-lg">
        <p>© 2024 MarkdownPro. All rights reserved.</p>
        <p>
          <a
            href="https://www.github.com/opeyemi-code/MarkDown-Previewer"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="footer__github-icon mr-1"
            />
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}
