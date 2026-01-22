import { createContext, useState, useEffect, useRef } from "react";
import FileSaver from "file-saver";
import dateFormat from "dateformat";
import { toast } from "react-toastify";

import type { Note, DataContextType, ProviderProps } from "../types/models.js";

const DataContext: React.Context<DataContextType | null> =
  createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: ProviderProps }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [activeFileID, setActiveFileID] = useState(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [storedData, setStoredData] = useState<Note[]>(() => {
    // Load saved notes from localStorage on first render
    const saved = localStorage.getItem("markdownNotes");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever storedData changes
  useEffect(() => {
    localStorage.setItem("markdownNotes", JSON.stringify(storedData));
  }, [storedData]);

  useEffect(() => {
    if (activeFileID) {
      const findFile = storedData.find((file) => file.id === activeFileID);
      setInputValue(findFile.content);
    }
  }, [activeFileID]);

  const textareaRef: React.RefObject<HTMLInputElement | null> =
    useRef<HTMLInputElement>(null); // 👈 keep a ref for the textarea
  const [pageTitle, setPageTitle] = useState<string | null>("Markdown | Home");
  const [isToggle, setIsToggle] = useState<boolean>(false);

  // const handleButton: () => void = () => {

  // };

  // Handle save button

  const handleSaveButton: (e: MouseEvent) => void = (e: MouseEvent) => {
    e.preventDefault();
    displayModal();
  };

  const displayModal = () => {
    dialogRef.current?.showModal();
  };

  const saveFile = (e: MouseEvent): void => {
    e.preventDefault();

    const title = inputRef.current?.value.trim() || "Untitled";
    const now = dateFormat("mediumDate");

    setStoredData((prev: Note[]) => {
      // EDIT MODE
      if (activeFileID) {
        const updatedNote: Note = {
          ...prev.find((file) => file.id === activeFileID)!,
          title,
          content: inputValue.trim(),
          lastModified: now,
        };

        // Remove old version and move updated one to top
        return [
          updatedNote,
          ...prev.filter((note) => note.id !== activeFileID),
        ];
      }

      // CREATE MODE
      const newNote: Note = {
        id: Date.now(),
        title,
        content: inputValue.trim(),
        firstCreated: now,
        lastModified: now,
      };

      return [newNote, ...prev];
    });

    setInputValue("");
    closeModal(e);
    toast.success("Markdown file saved successfully");
    localStorage.removeItem("activeFileID");
  };

  // close modal
  const closeModal: (e: MouseEvent) => void = (e: MouseEvent) => {
    e.preventDefault();
    inputRef.current!.value = "";
    dialogRef.current?.close();
  };

  // handleInputChange
  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setInputValue(e.target.value);

  // 👇 new function for formatting selected text
  const applyFormatting: (syntaxStart: string, syntaxEnd?: string) => void = (
    syntaxStart: string,
    syntaxEnd = syntaxStart,
  ) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === null || end === null) return;

    const selectedText = inputValue.substring(start, end);
    const before = inputValue.substring(0, start);
    const after = inputValue.substring(end);

    const newValue = before + syntaxStart + selectedText + syntaxEnd + after;

    setInputValue(newValue);

    // restore cursor
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start + syntaxStart.length;
      textarea.selectionEnd = end + syntaxStart.length + selectedText.length;
    }, 0);
  };

  // download markdown

  const downloadMarkdown: (content: string, title: string) => void = (
    content: string,
    title: string,
  ) => {
    if (content.length > 0) {
      const fileName: string | undefined = title || "Untitled";
      const blob = new Blob([content], {
        type: "text/plain;charset=utf-8",
      });
      FileSaver.saveAs(blob, `${fileName}.md`);
    }
  };

  //Handle success message
  const handleSaveSuccess: (
    value: React.SetStateAction<boolean>,
  ) => void = () => {
    setShowSuccess(true);

    // Hide message after 2.5s
    setTimeout(() => setShowSuccess(false), 2500);
  };

  return (
    <DataContext.Provider
      value={{
        inputValue,
        setInputValue,
        storedData,
        setStoredData,
        activeFileID,
        setActiveFileID,
        showSuccess,
        setShowSuccess,
        pageTitle,
        setPageTitle,
        isToggle,
        setIsToggle,
        handleInputChange,
        // handleButton,
        dialogRef,
        inputRef,
        handleSaveButton,
        closeModal,
        saveFile,
        applyFormatting,
        textareaRef,
        downloadMarkdown,
        handleSaveSuccess,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
