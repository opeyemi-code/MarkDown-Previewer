import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";
// import ReactMarkdown from "react-markdown";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function LivePreview() {
  const { inputValue } = useContext(DataContext);

  return (
    <article
      className="live-preview bg-[#e2e8f0] border border-slate-500 rounded-lg h-[500px] lg:w-1/2 flex flex-col"
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
        className="live-preview__body prose max-w-none overflow-y-scroll bg-white p-4 rounded-b-lg lg:flex-1"
        aria-live="polite"
        aria-label="Rendered Markdown Preview"
      >
        {inputValue ? (
          <Markdown
            remarkPlugins={[remarkGfm]}
            children={inputValue}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={dark}
                  />
                ) : (
                  <code {...rest} className={`${className} prose`}>
                    {children}
                  </code>
                );
              },
            }}
          />
        ) : (
          <p className="live-preview__result">
            Start typing to see your markdown rendered live.
          </p>
        )}
      </section>
    </article>
  );
}
