import { faPenToSquare, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";

export default function Editor() {
  const { inputValue, handleInputChange, textareaRef, showSuccess } =
    useContext(DataContext);

  // calculate words & lines dynamically
  const lineCount = inputValue ? inputValue.split("\n").length : 0;
  const wordCount = inputValue
    ? inputValue.trim().split(/\s+/).filter(Boolean).length
    : 0;

  return (
    <form
      className="bg-[#e2e8f0] my-6 border border-slate-500 rounded-lg flex flex-col lg:w-1/2 lg:my-0"
      aria-label="Markdown editor form"
      role="form"
    >
      <fieldset className="h-full" aria-labelledby="editor-title" role="group">
        <legend className="border-b border-slate-500 flex justify-between w-full p-4">
          <div className="editor__header flex items-center gap-2  ">
            <FontAwesomeIcon icon={faPenToSquare} aria-hidden="true" />
            <h2 id="editor-title" className="editor__header-title">
              Markdown Editor
            </h2>
          </div>

          {/* Success message */}
          <p
            className={`success-message ${showSuccess ? "visible" : ""} hidden`}
            aria-live="polite"
            role="status"
          >
            <FontAwesomeIcon
              icon={faCheck}
              className="success-message__icon"
              aria-hidden="true"
            />{" "}
            File saved
          </p>

          <div
            className="flex gap-4 text-slate-500"
            aria-label={`Document has ${lineCount} lines and ${wordCount} words`}
          >
            <h6>
              Line: <span aria-label={`${lineCount} lines`}>{lineCount}</span>
            </h6>
            <h6 className="editor__sub-text editor__word">
              Words:{" "}
              <span
                className="editor__word-count"
                aria-label={`${wordCount} words`}
              >
                {wordCount}
              </span>
            </h6>
          </div>
        </legend>

        <textarea
          ref={textareaRef}
          onChange={handleInputChange}
          className="editor__textarea bg-white text-sm w-full h-full p-4 outline-0 caret-black text-neutral-800 flex-1 rounded-b-lg"
          value={inputValue}
          placeholder="# Welcome to MarkdownPro 
Start typing your markdown here..."
          cols="30"
          rows="16"
          autoFocus
          aria-label="Markdown input area"
          role="textbox"
        ></textarea>
      </fieldset>
    </form>
  );
}
