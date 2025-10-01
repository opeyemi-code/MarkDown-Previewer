import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import markdownIcon from "../assets/images/markdown.png";
import ButtonWithText from "./ButtonWithText";
import {
  faDownload,
  faFolderOpen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Card() {
  return (
    <li className="card saved-files__item">
      <div className="saved-files__item-info">
        <img className="markdown-icon" src={markdownIcon} alt="" />
        <div className="file-info">
          <h2 className="file-info__name">Projects Notes.md</h2>
          <p className="file-info__modified">
            Last Modified: <time datetime="2024-12-15">Dec 15, 2024</time>
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
          icon={<FontAwesomeIcon icon={faDownload} />}
          className="btn saved-file__btn-icon"
        />
        <Button
          icon={<FontAwesomeIcon icon={faTrash} />}
          className="btn saved-file__btn-icon saved-file__btn--danger"
        />
      </div>
    </li>
  );
}
