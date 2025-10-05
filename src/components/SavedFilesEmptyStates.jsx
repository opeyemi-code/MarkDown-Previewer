import { faFolderOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SavedFilesEmptyState() {
  return (
    <div className="empty-state empty-state--saved-files">
      <FontAwesomeIcon icon={faFolderOpen} className="empty-state__icon" />

      <h2 className="empty-state__title">No Saved Files Yet</h2>

      <p className="empty-state__text">
        You haven't saved any markdown notes yet. Create one to get started!
      </p>

      <button className="btn empty-state__btn" type="button">
        <Link to="/" className="empty-state__link">
          <FontAwesomeIcon icon={faPlus} className="empty-state__btn-icon" />
          <span className="empty-state__btn-text">Create New File</span>
        </Link>
      </button>
    </div>
  );
}
