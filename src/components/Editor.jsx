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
    <form className="form">
      <fieldset className="editor__fieldset">
        <legend className="editor__legend">
          <div className="editor__header">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="editor__edit-icon"
            />
            <h2 className="editor__header-title">Markdown Editor</h2>
          </div>
          {/* Success message */}
          <p className={`success-message ${showSuccess ? "visible" : ""}`}>
            <FontAwesomeIcon icon={faCheck} className="success-message__icon" />{" "}
            File saved
          </p>
          <div className="editor__text-info">
            <h6 className="editor__sub-text editor__line">
              Line:{" "}
              <span className="editor__sub-text editor__line-count">
                {lineCount}
              </span>
            </h6>
            <h6 className="editor__sub-text editor__word">
              Words: <span className="editor__word-count">{wordCount}</span>
            </h6>
          </div>
        </legend>

        <textarea
          ref={textareaRef}
          onChange={handleInputChange}
          className="editor__textarea"
          value={inputValue}
          placeholder="# Welcome to MarkdownPro 
Start typing your markdown here..."
          cols="30"
          rows="16"
          autoFocus
        ></textarea>
      </fieldset>
    </form>
  );
}
