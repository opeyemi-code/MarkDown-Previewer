import React, { useContext } from "react";
import Card from "../components/Card";
import ButtonWithText from "../components/ButtonWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../context/DataContext";
import SavedFilesEmptyStates from "../components/SavedFilesEmptyStates";

function SavedFiles() {
  const { storedData } = useContext(DataContext);

  return (
    <section
      className="saved-files"
      aria-labelledby="saved-files-heading"
      role="region"
    >
      <header className="saved-files__hero">
        <div className="saved-files__intro">
          <h2 id="saved-files-heading" className="saved-files__title">
            Saved Markdown Files
          </h2>
          <p className="saved-files__description">
            Manage your saved documents
          </p>
        </div>

        <div className="saved-files__actions" role="search">
          <label htmlFor="search-input" className="visually-hidden">
            Search saved files
          </label>
          <div className="search-input">
            <FontAwesomeIcon
              icon={faSearch}
              className="search-input__icon"
              aria-hidden="true"
            />
            <input
              id="search-input"
              type="search"
              className="search-input__field"
              placeholder="Search here..."
              aria-label="Search saved markdown files"
            />
          </div>

          <ButtonWithText
            icon={<FontAwesomeIcon icon={faPlus} className="add-file__icon" />}
            text="New file"
            className="btn saved-files__button"
            aria-label="Create a new markdown file"
          />
        </div>
      </header>

      <div className="saved-files__wrapper">
        <ul className="saved-files__list" role="list">
          {storedData.map((file) => (
            <Card
              key={file.id}
              id={file.id}
              title={file.title}
              firstCreated={file.firstCreated}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function SavedFilesPage() {
  const { storedData } = useContext(DataContext);

  return (
    <main className="main saved-page__main" role="main">
      {storedData.length > 0 ? <SavedFiles /> : <SavedFilesEmptyStates />}
    </main>
  );
}
