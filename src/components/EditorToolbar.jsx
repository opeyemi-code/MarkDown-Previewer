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
      className="editor-toolbar bg-white p-6 rounded-lg flex flex-col gap-4 lg:flex-row lg:items-center"
      role="toolbar"
      aria-label="Markdown editing toolbar"
    >
      {/* --- Formatting Tools --- */}
      <div
        className="editor-toolbar__formatting-tools flex gap-2"
        role="group"
        aria-label="Text formatting tools"
      >
        <Button
          onClick={() => applyFormatting("**", "**")}
          className="btn editor-toolbar__button editor-toolbar__buttons--bold p-1.5 bg-gray-200 rounded-md"
          ariaLabel="Bold text"
          icon={
            <FontAwesomeIcon
              icon={faBold}
              className="editor-toolbar__icon text-slate-600"
            />
          }
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            applyFormatting("_", "_");
          }}
          className="btn editor-toolbar__button editor-toolbar__buttons--italic p-1.5 bg-gray-200 rounded-md"
          ariaLabel="Italicize text"
          icon={
            <FontAwesomeIcon
              icon={faItalic}
              className="editor-toolbar__icon text-slate-600"
            />
          }
        />

        <Button
          onClick={() => applyFormatting("# ", "")}
          className="btn editor-toolbar__button editor-toolbar__button--heading p-1.5 bg-gray-200 rounded-md"
          ariaLabel="Add heading"
          icon={
            <FontAwesomeIcon
              icon={faHeading}
              className="editor-toolbar__icon text-slate-600"
            />
          }
        />

        <Button
          onClick={() => applyFormatting("- ", "")}
          className="btn editor-toolbar__button editor-toolbar__buttons--list p-1.5 bg-gray-200 rounded-md"
          ariaLabel="Insert list item"
          icon={
            <FontAwesomeIcon
              icon={faList}
              className="editor-toolbar__icon text-slate-600"
            />
          }
        />

        <Button
          onClick={() => applyFormatting("[", "](url)")}
          className="btn editor-toolbar__button editor-toolbar__buttons--link p-1.5 bg-gray-200 rounded-md"
          ariaLabel="Add hyperlink"
          icon={
            <FontAwesomeIcon
              icon={faLink}
              className="editor-toolbar__icon text-slate-600"
            />
          }
        />

        <Button
          onClick={() => applyFormatting("`", "`")}
          className="btn editor-toolbar__button editor-toolbar__buttons--code p-1.5 bg-gray-200 rounded-md"
          ariaLabel="Insert code snippet"
          icon={
            <FontAwesomeIcon
              icon={faCode}
              className="editor-toolbar__icon text-slate-600"
            />
          }
        />
      </div>
      <div className="w-px h-6 bg-gray-200 hidden lg:block"></div>
      {/* --- Action Buttons --- */}
      <div
        className="editor-toolbar__action-buttons flex gap-3"
        role="group"
        aria-label="File actions"
      >
        <ButtonWithText
          icon={
            <FontAwesomeIcon icon={faUpload} className="editor-toolbar__icon" />
          }
          text="Upload"
          ariaLabel="Upload markdown file"
          className="btn editor-toolbar__buttons editor-toolbar__action-btn editor-toolbar__btn--upload text-slate-600 p-2"
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
          className="btn editor-toolbar__button editor-toolbar__action-btn editor-toolbar__btn--save bg-green-600 text-slate-50 p-2 rounded-md"
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
          className="btn editor-toolbar__button editor-toolbar__action-btn editor-toolbar__btn--download bg-blue-600 text-slate-50 p-2 rounded-md"
        />
      </div>
    </section>
  );
}
