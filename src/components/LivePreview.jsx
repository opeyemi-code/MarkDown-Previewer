import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import ReactMarkdown from "react-markdown";

export default function LivePreview() {
  const { inputValue } = useContext(DataContext);

  return (
    <article
      className="live-preview bg-[#e2e8f0] border border-slate-500 rounded-lg lg:w-1/2 flex flex-col"
      aria-labelledby="live-preview-title"
      role="region"
    >
      {/* Header for the preview section */}
      <header className="live-preview__header border-b border-slate-500 flex items-center gap-2 p-4">
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
        className="live-preview__body h-[290px] bg-white p-4 rounded-r-lg rounded-l-lg lg:flex-1"
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
