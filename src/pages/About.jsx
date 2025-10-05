import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function About() {
  return (
    <main className="main about-page" role="main">
      <section
        className="about-section"
        aria-labelledby="about-title"
        aria-describedby="about-description"
      >
        <FontAwesomeIcon
          icon={faFileLines}
          className="about-section__icon"
          aria-hidden="true"
        />
        <h2 id="about-title" className="about-section__title">
          Markdown Editor
        </h2>
        <p id="about-description" className="about-section__description">
          A simple and elegant markdown editor designed to help you write and
          format text with ease. Create beautiful documents using markdown
          syntax in a clean, distraction-free environment.
        </p>
      </section>
    </main>
  );
}
