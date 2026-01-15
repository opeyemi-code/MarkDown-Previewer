import React, { useContext } from "react";
import Card from "../components/Card.js";
import ButtonWithText from "../components/ButtonWithText.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../context/DataContext.js";
import SavedFilesEmptyStates from "../components/SavedFilesEmptyStates.js";
import { Link } from "react-router-dom";
import type { DataContextType, Note } from "../components/types/models.js";

function SavedFiles() {
  const { storedData } = useContext(DataContext)!;

  return (
    <main
      className="px-4 pt-14 w-full"
      aria-labelledby="saved-files-heading"
      role="region"
    >
      <header className="flex flex-col lg:flex-row justify-between items-cente gap-4">
        <div>
          <h2
            id="saved-files-heading"
            className="text-slate-900 font-semibold text-xl mb-1"
          >
            Saved Markdown Files
          </h2>
          <p className="text-gray-500">Manage your saved documents</p>
        </div>

        <div className="hidde flex flex-col gap-3" role="search">
          <label htmlFor="search-input" className="hidden">
            Search saved files
          </label>
          <div>
            <FontAwesomeIcon
              icon={faSearch}
              className="relative z-10 top-0 left-2 -mr-5"
              aria-hidden="true"
            />
            <input
              id="search-input"
              type="search"
              className="bg-white w-full rounded-lg outline-0 py-2 px-8 caret-slate-500"
              placeholder="Search here..."
              aria-label="Search saved markdown files"
            />
          </div>
          <button
            className="bg-blue-600 text-slate-100 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-700"
            type="button"
          >
            <Link to="/">
              <FontAwesomeIcon icon={faPlus} />
              New File
            </Link>
          </button>
        </div>
      </header>

      <div className="my-8">
        <ul
          className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {storedData.map((file: Note) => (
            <Card
              key={file.id}
              id={file.id}
              title={file.title}
              firstCreated={file.firstCreated}
              lastModified={file.lastModified}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default function SavedFilesPage() {
  const { storedData } = useContext(DataContext)!;

  return (
    <main
      className="px-4 py-12 flex flex-col items-center justify-center lg:px-[5vw] lg:py-15"
      role="main"
    >
      {storedData.length > 0 ? <SavedFiles /> : <SavedFilesEmptyStates />}
    </main>
  );
}
