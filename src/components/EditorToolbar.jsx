import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faCode,
  faDownload,
  faFloppyDisk,
  faHeading,
  faItalic,
  faLink,
  faList,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import ButtonWithText from "./ButtonWithText";
import DataContext from "../context/DataContext";

export default function EditorToolbar({ onSave }) {
  const { applyFormatting, handleButton, downloadMarkdown, inputValue } =
    useContext(DataContext);

  return (
    <section
      className="editor-toolbar"
      role="toolbar"
      aria-label="Markdown editing toolbar"
    >
      {/* --- Formatting Tools --- */}
      <div
        className="editor-toolbar__formatting-tools"
        role="group"
        aria-label="Text formatting tools"
      >
        <Button
          onClick={() => applyFormatting("**", "**")}
          className="btn editor-toolbar__button editor-toolbar__buttons--bold"
          ariaLabel="Bold text"
          icon={
            <FontAwesomeIcon icon={faBold} className="editor-toolbar__icon" />
          }
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            applyFormatting("_", "_");
          }}
          className="btn editor-toolbar__button editor-toolbar__buttons--italic"
          ariaLabel="Italicize text"
          icon={
            <FontAwesomeIcon icon={faItalic} className="editor-toolbar__icon" />
          }
        />

        <Button
          onClick={() => applyFormatting("# ", "")}
          className="btn editor-toolbar__button editor-toolbar__button--heading"
          ariaLabel="Add heading"
          icon={
            <FontAwesomeIcon
              icon={faHeading}
              className="editor-toolbar__icon"
            />
          }
        />

        <Button
          onClick={() => applyFormatting("- ", "")}
          className="btn editor-toolbar__button editor-toolbar__buttons--list"
          ariaLabel="Insert list item"
          icon={
            <FontAwesomeIcon icon={faList} className="editor-toolbar__icon" />
          }
        />

        <Button
          onClick={() => applyFormatting("[", "](url)")}
          className="btn editor-toolbar__button editor-toolbar__buttons--link"
          ariaLabel="Add hyperlink"
          icon={
            <FontAwesomeIcon icon={faLink} className="editor-toolbar__icon" />
          }
        />

        <Button
          onClick={() => applyFormatting("`", "`")}
          className="btn editor-toolbar__button editor-toolbar__buttons--code"
          ariaLabel="Insert code snippet"
          icon={
            <FontAwesomeIcon icon={faCode} className="editor-toolbar__icon" />
          }
        />
      </div>

      {/* --- Action Buttons --- */}
      <div
        className="editor-toolbar__action-buttons"
        role="group"
        aria-label="File actions"
      >
        <ButtonWithText
          icon={
            <FontAwesomeIcon icon={faUpload} className="editor-toolbar__icon" />
          }
          text="Upload"
          ariaLabel="Upload markdown file"
          className="btn editor-toolbar__buttons editor-toolbar__action-btn editor-toolbar__btn--upload"
        />

        <ButtonWithText
          onClick={(e) => {
            e.preventDefault();
            if (inputValue.trim().length > 0) {
              handleButton();
              onSave();
            }
          }}
          icon={
            <FontAwesomeIcon
              icon={faFloppyDisk}
              className="editor-toolbar__icon"
            />
          }
          text="Save"
          ariaLabel="Save markdown file"
          className="btn editor-toolbar__button editor-toolbar__action-btn editor-toolbar__btn--save"
        />

        <ButtonWithText
          onClick={(e) => {
            e.preventDefault();
            downloadMarkdown(inputValue);
          }}
          icon={
            <FontAwesomeIcon
              icon={faDownload}
              className="editor-toolbar__icon"
            />
          }
          text="Download"
          ariaLabel="Download markdown file"
          className="btn editor-toolbar__button editor-toolbar__action-btn editor-toolbar__btn--download"
        />
      </div>
    </section>
  );
}
