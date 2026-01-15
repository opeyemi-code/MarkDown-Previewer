import React, { useContext } from "react";
import Button from "./Button.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonWithText from "./ButtonWithText.js";
import DataContext from "../context/DataContext.js";

export default function SaveMarkdownModal() {
  const { closeModal, dialogRef, inputRef, saveFile } = useContext(DataContext);

  return (
    <dialog
      ref={dialogRef}
      className="bg-white p-5  mx-auto w-[400px] rounded-xl lg:w-md my-auto"
      aria-label="Dialog"
    >
      <header className="flex items-center justify-between">
        <h1 className="text-xl text-[#111827] font-semibold lg:text-2xl">
          Save Markdown File
        </h1>
        <Button
          icon={
            <FontAwesomeIcon
              icon={faXmark}
              className="text-slate-500 text-xl hover:text-slate-700"
              onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                closeModal(e)
              }
            />
          }
          className="p-2"
          aria-label="Close"
        />
      </header>
      <h2 className="text-sm text-slate-500 font-normal my-3 tracking-tighter">
        Enter a title for your file
      </h2>
      <form>
        <label
          htmlFor="file-title"
          className="text-sm text-[#111827] font-semibold"
        >
          File Title
          <input
            id="file-title"
            ref={inputRef}
            className="block mt-2 border-blue-600 border px-5 py-5 rounded-lg w-full text-[1rem] text-neutral-800 font-normal outline-0 caret-[#111827]"
            type="text"
            autoFocus
            placeholder="e.g. My Markdown Notes"
          />
        </label>
        <div className="flex flex-col gap-4 mt-8 mb-4 lg:flex-row-reverse">
          <ButtonWithText
            icon={
              <FontAwesomeIcon
                icon={faFloppyDisk}
                className="text-white mr-3"
              />
            }
            text="Save"
            onClick={saveFile}
            ariaLabel="Save markdown"
            className="bg-blue-600 py-4 rounded-lg text-white text-sm font-medium tracking-tighter w-full hover:bg-blue-500 hover:cursor-pointer"
          />
          <button
            type="button"
            className="bg-white text-[#374151] py-4 border border-slate-500 rounded-lg w-full hover:bg-[#FAF9F6] hover:cursor-pointer"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              closeModal(e)
            }
            aria-label="Cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
}
