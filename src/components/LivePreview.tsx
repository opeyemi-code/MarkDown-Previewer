import { faClone, faCheck, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext.js";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function LivePreview() {
  const { inputValue } = useContext(DataContext);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function copyText(e) {
    e.preventDefault;
    if (!inputValue) return;

    navigator.clipboard.writeText(inputValue);
    setIsCopied(!isCopied);

    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <article
      className="bg-[#e2e8f0] border border-slate-500 rounded-lg h-125 lg:w-1/2 flex flex-col"
      aria-labelledby="live-preview-title"
      role="region"
    >
      {/* Header for the preview section */}
      <header className="border-b border-slate-500 flex items-center gap-2 p-4 relative">
        <FontAwesomeIcon icon={faEye} aria-hidden="true" />
        <h2>Live Preview</h2>
        <button className="absolute right-3 cursor-pointer" onClick={copyText}>
          <FontAwesomeIcon
            icon={!isCopied ? faClone : faCheck}
            className={`text-slate-500 transition duration-500`}
          />
          <small className="ml-1 text-slate-500" aria-label="Copy">{`${
            !isCopied ? "" : "Copied"
          }`}</small>
        </button>
      </header>
      {/* Markdown render area */}
      <section
        className="prose max-w-none overflow-y-scroll h-full bg-white p-4 rounded-b-lg lg:flex-1"
        aria-live="polite"
        aria-label="Rendered Markdown Preview"
      >
        {inputValue ? (
          <Markdown
            remarkPlugins={[remarkGfm]}
            children={inputValue}
            components={{
              code(props) {
                const { children, className, ...rest } = props;
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
