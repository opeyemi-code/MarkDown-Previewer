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
    <div className="editor-toolbar">
      <div className="editor-toolbar__formatting-tools">
        <Button
          onClick={() => applyFormatting("**", "**")}
          className="btn editor-toolbar__button editor-toolbar__buttons--bold"
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
          icon={
            <FontAwesomeIcon icon={faItalic} className="editor-toolbar__icon" />
          }
        />
        <Button
          onClick={() => applyFormatting("# ", "")} // ✅ heading should prepend #
          className="btn editor-toolbar__button editor-toolbar__button--heading"
          icon={
            <FontAwesomeIcon
              icon={faHeading}
              className="editor-toolbar__icon"
            />
          }
        />
        <Button
          onClick={() => applyFormatting("- ", "")} // ✅ for lists
          className="btn editor-toolbar__button editor-toolbar__buttons--list"
          icon={
            <FontAwesomeIcon icon={faList} className="editor-toolbar__icon" />
          }
        />
        <Button
          onClick={() => applyFormatting("[", "](url)")}
          className="btn editor-toolbar__button editor-toolbar__buttons--link"
          icon={
            <FontAwesomeIcon icon={faLink} className="editor-toolbar__icon" />
          }
        />
        <Button
          onClick={() => applyFormatting("`", "`")}
          className="btn editor-toolbar__button editor-toolbar__buttons--code"
          icon={
            <FontAwesomeIcon icon={faCode} className="editor-toolbar__icon" />
          }
        />
      </div>

      <div className="editor-toolbar__action-buttons">
        <ButtonWithText
          icon={
            <FontAwesomeIcon icon={faUpload} className="editor-toolbar__icon" />
          }
          text="Upload"
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
          className="btn editor-toolbar__button editor-toolbar__action-btn editor-toolbar__btn--download"
        />
      </div>
    </div>
  );
}
