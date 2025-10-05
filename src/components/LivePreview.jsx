import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import ReactMarkdown from "react-markdown";

export default function LivePreview() {
  const { inputValue } = useContext(DataContext);

  return (
    <article
      className="live-preview"
      aria-labelledby="live-preview-title"
      role="region"
    >
      {/* Header for the preview section */}
      <header className="live-preview__header">
        <FontAwesomeIcon
          icon={faEye}
          className="live-preview__icon"
          aria-hidden="true"
        />
        <h2 id="live-preview-title" className="live-preview__title">
          Live Preview
        </h2>
      </header>

      {/* Markdown render area */}
      <section
        className="live-preview__body"
        aria-live="polite"
        aria-label="Rendered Markdown Preview"
      >
        {inputValue ? (
          <ReactMarkdown>{inputValue}</ReactMarkdown>
        ) : (
          <p className="live-preview__result">
            Start typing to see your markdown rendered live.
          </p>
        )}
      </section>
    </article>
  );
}
