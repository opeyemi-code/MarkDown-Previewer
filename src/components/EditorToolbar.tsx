import React, { useContext, type JSX } from "react";
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
import Button from "./Button.js";
import ButtonWithText from "./ButtonWithText.js";
import DataContext from "../context/DataContext.js";
import type { DataContextType } from "./types/models.js";

export default function EditorToolbar({
  onSave,
}: {
  onSave: () => void;
}): JSX.Element {
  const { applyFormatting, handleButton, downloadMarkdown, inputValue } =
    useContext(DataContext);

  return (
    <section
      className=" bg-white p-6 rounded-lg flex flex-col gap-4 md:flex-row lg:items-center"
      role="toolbar"
      aria-label="Markdown editing toolbar"
    >
      {/* --- Formatting Tools --- */}
      <div
        className="flex gap-2"
        role="group"
        aria-label="Text formatting tools"
      >
        <Button
          onClick={() => applyFormatting("**", "**")}
          className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
          ariaLabel="Bold text"
          icon={<FontAwesomeIcon icon={faBold} className="text-slate-600" />}
        />

        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            applyFormatting("_", "_");
          }}
          className=" p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
          ariaLabel="Italicize text"
          icon={<FontAwesomeIcon icon={faItalic} className="text-slate-600" />}
        />

        <Button
          onClick={() => applyFormatting("# ", "")}
          className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
          ariaLabel="Add heading"
          icon={<FontAwesomeIcon icon={faHeading} className="text-slate-600" />}
        />

        <Button
          onClick={() => applyFormatting("- ", "")}
          className=" bg-gray-200 hover:bg-gray-300 p-1.5 rounded-md cursor-pointer"
          ariaLabel="Insert list item"
          icon={<FontAwesomeIcon icon={faList} className="text-slate-600" />}
        />

        <Button
          onClick={() => applyFormatting("[", "](url)")}
          className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
          ariaLabel="Add hyperlink"
          icon={<FontAwesomeIcon icon={faLink} className="text-slate-600" />}
        />

        <Button
          onClick={() => applyFormatting("`", "`")}
          className=" p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
          ariaLabel="Insert code snippet"
          icon={<FontAwesomeIcon icon={faCode} className="text-slate-600" />}
        />
      </div>
      <div className="w-px h-6 bg-gray-200 hidden lg:block"></div>
      {/* --- Action Buttons --- */}
      <div className="flex gap-3" role="group" aria-label="File actions">
        <ButtonWithText
          icon={
            <FontAwesomeIcon icon={faUpload} className="editor-toolbar__icon" />
          }
          text="Upload"
          ariaLabel="Upload markdown file"
          className=" text-slate-600 hover:bg-slate-200 p-2 rounded-lg cursor-pointer"
        />

        <ButtonWithText
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
          className=" bg-green-600 hover:bg-green-700 text-slate-50 p-2 rounded-md cursor-pointer"
        />

        <ButtonWithText
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            downloadMarkdown(inputValue);
          }}
          icon={
            <FontAwesomeIcon
              icon={faDownload}
              className="editor-toolbar__icon hidden! md:inline-block!"
            />
          }
          text="Download"
          ariaLabel="Download markdown file"
          className="bg-blue-600 hover:bg-blue-700 text-slate-50 p-2 rounded-md cursor-pointer"
        />
      </div>
    </section>
  );
}
