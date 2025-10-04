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

  //delete saved file
  const deleteFile = (e) => {
    e.preventDefault();
    const updatedData = storedData.filter((file) => file.id !== id);
    setStoredData(updatedData);
    localStorage.setItem("markdownNotes", JSON.stringify(updatedData));
  };

  return (
    <li className="card saved-files__item">
      <div className="saved-files__item-info">
        <FontAwesomeIcon icon={faFileLines} className="markdown-icon" />
        <div className="file-info">
          <h2 className="file-info__name">{title}</h2>
          <p className="file-info__modified">
            First created: <time dateTime="2024-12-15">{firstCreated}</time>
          </p>
        </div>
      </div>
      <div className="saved-file__action-btns">
        <ButtonWithText
          icon={
            <FontAwesomeIcon icon={faFolderOpen} className="folder-open-icon" />
          }
          className="btn saved-file__btn-icon saved-file__btn--open"
          text="Open"
        />
        <Button
          onClick={downloadSavedFile}
          icon={<FontAwesomeIcon icon={faDownload} />}
          className="btn saved-file__btn-icon saved-file__download-btn"
        />
        <Button
          onClick={deleteFile}
          icon={<FontAwesomeIcon icon={faTrash} />}
          className="btn saved-file__btn-icon saved-file__btn--danger"
        />
      </div>
    </li>
  );
}
