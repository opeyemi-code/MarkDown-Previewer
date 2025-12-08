import { faFolderOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { type JSX } from "react";
import { Link } from "react-router-dom";

export default function SavedFilesEmptyState(): JSX.Element {
  return (
    <section
      className="py-10 w-full bg-white rounded-2xl flex-1 flex flex-col items-center justify-center gap-4 md:w-[70%] lg:w-[50%] lg:py-18"
      aria-labelledby="empty-state-title"
      role="region"
    >
      <FontAwesomeIcon
        icon={faFolderOpen}
        className="p-6 text-4xl bg-gray-100 text-gray-500 rounded-full"
        aria-hidden="true"
      />

      <h2
        id="empty-state-title"
        className="text-slate-900 font-semibold text-xl lg:text-2xl"
      >
        No Saved Files Yet
      </h2>

      <p className="w-61.5 text-center text-[0.875rem] text-slate-500 lg:text-[1rem] lg:w-87.5">
        You haven’t saved any markdown notes yet. Create one to get started!
      </p>

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-slate-100 py-3 px-5 text-[1rem] rounded-3xl text-center w-[254px]"
        aria-label="Create a new markdown file"
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" aria-hidden="true" />
        <span>Create New File</span>
      </Link>
    </section>
  );
}
