import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function About() {
  return (
    <>
      <main className="main">
        <section className="about-section">
          <FontAwesomeIcon icon={faFileLines} className="file-icon" />
          <h2 className="about__title">Markdown Editor</h2>
          <p className="about__description">
            A simple and elegant markdown editor designed to help you write and
            format text with ease. Create beautiful documents using markdown
            syntax in a clean, distraction-free environment.
          </p>
        </section>
      </main>
    </>
  );
}
