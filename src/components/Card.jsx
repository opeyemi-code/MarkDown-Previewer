import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import ButtonWithText from "./ButtonWithText";
import {
  faDownload,
  faFileLines,
  faFolderOpen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import DataContext from "../context/DataContext";

export default function Card({ id, title, firstCreated }) {
  const { storedData, setStoredData, downloadMarkdown } =
    useContext(DataContext);

  const downloadSavedFile = (e) => {
    e.preventDefault();
    const findFile = storedData.find((file) => file.id === id);
    if (findFile) {
      downloadMarkdown(findFile.content);
    }
  };

  const deleteFile = (e) => {
    e.preventDefault();
    const updatedData = storedData.filter((file) => file.id !== id);
    setStoredData(updatedData);
    localStorage.setItem("markdownNotes", JSON.stringify(updatedData));
  };

  return (
    <li
      className="bg-white rounded-xl p-4"
      role="article"
      aria-labelledby={`file-title-${id}`}
    >
      <div className="flex items-center gap-2.5">
        <FontAwesomeIcon
          icon={faFileLines}
          className="w-4 h-auto text-blue-600 p-3.5 bg-blue-50 rounded-lg"
          aria-hidden="true"
        />
        <div className="">
          <h3
            id={`file-title-${id}`}
            className="text-slate-900 font-medium text-[16px]"
          >
            {title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            First created:{" "}
            <time
              dateTime={firstCreated}
              aria-label={`Created on ${firstCreated}`}
            >
              {firstCreated}
            </time>
          </p>
        </div>
      </div>

      <div
        className="mt-3 flex gap-2"
        role="group"
        aria-label={`Actions for ${title}`}
      >
        <ButtonWithText
          icon={
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="folder-open-icon"
              aria-hidden="true"
            />
          }
          className="btn saved-file__btn-icon saved-file__btn--open bg-blue-600 text-slate-100 flex-1 p-2 rounded-lg"
          text="Open"
          onClick={() => console.log(`Opening file: ${title}`)} // placeholder
        />
        <Button
          onClick={downloadSavedFile}
          icon={<FontAwesomeIcon icon={faDownload} aria-hidden="true" />}
          className="p-2 rounded-lg text-slate-900"
          aria-label={`Download ${title}`}
        />
        <Button
          onClick={deleteFile}
          icon={<FontAwesomeIcon icon={faTrash} aria-hidden="true" />}
          className="p-2 rounded-lg text-red-600"
          aria-label={`Delete ${title}`}
        />
      </div>
    </li>
  );
}
