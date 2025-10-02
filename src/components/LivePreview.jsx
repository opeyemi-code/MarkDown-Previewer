import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import ReactMarkdown from "react-markdown";

export default function LivePreview() {
  const { inputValue } = useContext(DataContext);
  return (
    <>
      <article className="live-preview">
        <header className="live-preview__header">
          <FontAwesomeIcon icon={faEye} className="live-preview-icon" />
          <h2 className="live-preview__title">Live Preview</h2>
        </header>
        <section className="live-preview__body">
          {inputValue ? (
            <ReactMarkdown>{inputValue}</ReactMarkdown>
          ) : (
            <p className="live-preview__result">
              Start typing to see the preview...{" "}
            </p>
          )}
        </section>
      </article>
    </>
  );
}
