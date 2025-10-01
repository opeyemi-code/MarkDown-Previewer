import React from "react";
import Card from "../components/Card";
import ButtonWithText from "../components/ButtonWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SavedFiles() {
  return (
    <main className="main">
      <div className="saved-files__hero">
        <div className="saved-files__intro">
          <h2 className="saved-files__title">Saved Markdown Files</h2>
          <p className="saved-files__description">
            Manage your saved documents
          </p>
        </div>
        <div className="saved-files__actions">
          <div className="search-input">
            <FontAwesomeIcon icon={faSearch} className="search-input__icon" />
            <input
              type="text"
              className="search-input__field"
              placeholder="Search here..."
            />
          </div>

          <ButtonWithText
            icon={<FontAwesomeIcon icon={faPlus} className="add-file__icon" />}
            text="New file"
            className="btn saved-files__button"
          />
        </div>
      </div>
      <div className="saved-files__wrapper">
        <ul className="saved-files__list">
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </main>
  );
}
