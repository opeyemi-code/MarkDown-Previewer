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
      className="card saved-files__item"
      role="article"
      aria-labelledby={`file-title-${id}`}
    >
      <div className="saved-files__item-info">
        <FontAwesomeIcon
          icon={faFileLines}
          className="markdown-icon"
          aria-hidden="true"
        />
        <div className="file-info">
          <h3 id={`file-title-${id}`} className="file-info__name">
            {title}
          </h3>
          <p className="file-info__modified">
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
        className="saved-file__action-btns"
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
          className="btn saved-file__btn-icon saved-file__btn--open"
          text="Open"
          onClick={() => console.log(`Opening file: ${title}`)} // placeholder
        />
        <Button
          onClick={downloadSavedFile}
          icon={<FontAwesomeIcon icon={faDownload} aria-hidden="true" />}
          className="btn saved-file__btn-icon saved-file__download-btn"
          aria-label={`Download ${title}`}
        />
        <Button
          onClick={deleteFile}
          icon={<FontAwesomeIcon icon={faTrash} aria-hidden="true" />}
          className="btn saved-file__btn-icon saved-file__btn--danger"
          aria-label={`Delete ${title}`}
        />
      </div>
    </li>
  );
}
