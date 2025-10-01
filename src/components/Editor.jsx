import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Editor() {
  return (
    <form className="form">
      <fieldset className="editor__fieldset">
        <legend className="editor__legend">
          <div className="editor__header">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="editor__edit-icon"
            />
            <h2 className="editor__header-title">Markdown editor</h2>
          </div>
          <div className="editor__text-info">
            <h6 className="editor__sub-text editor__line">
              Line:{" "}
              <span className="editor__sub-text editor__line-count">12</span>
            </h6>
            <h6 className="editor__sub-text editor__word">
              Words: <span className="editor__word-count">87</span>
            </h6>
          </div>
        </legend>
        <textarea
          className="editor__textarea"
          name=""
          id=""
          placeholder="# Welcome to MarkdownPro Start
typing your markdown here... ##
Features - Real-time preview -
Syntax highlighting - File
upload/download - Auto-save
functionality **Bold text** and
*italic text* are supported.
javascript const hello = 'world';
console.log(hello); [Links]
(https://example.com) and images
work too!"
          cols="30"
          rows="16"
        ></textarea>
      </fieldset>
    </form>
  );
}
