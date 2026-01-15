import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, type JSX } from "react";
import { Link } from "react-router-dom";
import ButtonWithText from "./ButtonWithText.js";
import {
  faDownload,
  faFileLines,
  faFolderOpen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button.js";
import DataContext from "../context/DataContext.js";
import type { Note, ButtonProps } from "./types/models.js";

export default function Card({
  id,
  title,
  firstCreated,
  lastModified,
}: Pick<Note, "id" | "title" | "firstCreated" | "lastModified">): JSX.Element {
  const {
    storedData,
    setStoredData,
    downloadMarkdown,
    activeFileID,
    setActiveFileID,
  } = useContext(DataContext);

  //Open file functionality
  const openFile: (id: number) => void = (id: number) => {
    const findFile: Note = storedData.find((file: Note) => file.id === id);
    setActiveFileID(() => findFile.id);
    localStorage.setItem("activeFileID", findFile.id);
  };

  const downloadSavedFile: () => void = () => {
    const findFile: Note = storedData.find((file: Note) => file.id === id);
    if (findFile) {
      downloadMarkdown(findFile.content, findFile.title);
    }
  };

  const deleteFile: () => void = () => {
    const updatedData: Note[] = storedData.filter(
      (file: Note) => file.id !== id
    );
    setStoredData(updatedData);
    localStorage.setItem("markdownNotes", JSON.stringify(updatedData));
  };

  return (
    <li
      className="bg-white rounded-xl p-4 shadow"
      role="article"
      aria-labelledby={`file-title-${id}`}
    >
      <div className="flex items-center gap-2.5">
        <FontAwesomeIcon
          icon={faFileLines}
          className="w-4 h-auto text-blue-600 p-3.5 bg-blue-50 rounded-lg"
          aria-hidden="true"
        />
        <div>
          <h3
            id={`file-title-${id}`}
            className="text-slate-900 font-medium text-[16px]"
          >
            {title}
          </h3>
          {firstCreated === lastModified ? (
            <p className="text-sm text-gray-400 mt-1">
              First created:{" "}
              <time
                dateTime={firstCreated}
                aria-label={`Created on ${firstCreated}`}
              >
                {firstCreated}
              </time>
            </p>
          ) : (
            <p className="text-sm text-gray-400 mt-1">
              last modified:{" "}
              <time
                dateTime={lastModified}
                aria-label={`Created on ${lastModified}`}
              >
                {lastModified}
              </time>
            </p>
          )}
        </div>
      </div>

      <div
        className="mt-3 flex gap-2"
        role="group"
        aria-label={`Actions for ${title}`}
      >
        <button
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-slate-100 flex-1 p-2 rounded-lg"
          onClick={() => openFile(id)} // placeholder
        >
          <Link to="/">
            <FontAwesomeIcon
              icon={faFolderOpen}
              aria-hidden="true"
              className="mr-2"
            />
            Open
          </Link>
        </button>
        <Button
          onClick={downloadSavedFile}
          icon={<FontAwesomeIcon icon={faDownload} aria-hidden="true" />}
          className="p-2 rounded-lg text-slate-900 cursor-pointer hover:bg-slate-300"
          aria-label={`Download ${title}`}
        />
        <Button
          onClick={deleteFile}
          icon={<FontAwesomeIcon icon={faTrash} aria-hidden="true" />}
          className="p-2 rounded-lg text-red-600 cursor-pointer hover:bg-slate-300"
          aria-label={`Delete ${title}`}
        />
      </div>
    </li>
  );
}
