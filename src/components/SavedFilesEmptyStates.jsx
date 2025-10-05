import { faFolderOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SavedFilesEmptyState() {
  return (
    <section
      className="empty-state empty-state--saved-files"
      aria-labelledby="empty-state-title"
      role="region"
    >
      <FontAwesomeIcon
        icon={faFolderOpen}
        className="empty-state__icon"
        aria-hidden="true"
      />

      <h2 id="empty-state-title" className="empty-state__title">
        No Saved Files Yet
      </h2>

      <p className="empty-state__text">
        You haven’t saved any markdown notes yet. Create one to get started!
      </p>

      <Link
        to="/"
        className="btn empty-state__btn empty-state__link"
        aria-label="Create a new markdown file"
      >
        <FontAwesomeIcon
          icon={faPlus}
          className="empty-state__btn-icon"
          aria-hidden="true"
        />
        <span className="empty-state__btn-text">Create New File</span>
      </Link>
    </section>
  );
}
