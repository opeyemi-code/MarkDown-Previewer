import { createContext, useState, useEffect, useRef } from "react";
import FileSaver from "file-saver";
import dateFormat from "dateformat";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [storedData, setStoredData] = useState(() => {
    // Load saved notes from localStorage on first render
    const saved = localStorage.getItem("markdownNotes");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever storedData changes
  useEffect(() => {
    localStorage.setItem("markdownNotes", JSON.stringify(storedData));
  }, [storedData]);

  const textareaRef = useRef(null); // 👈 keep a ref for the textarea
  const [pageTitle, setPageTitle] = useState("Markdown | Home");
  const [isToggle, setIsToggle] = useState(false);

  const handleButton = () => {
    const newNote = {
      id: Date.now(),
      title: inputValue.split("\n")[0] || "Untitled",
      content: inputValue.trim(),
      firstCreated: dateFormat("mediumDate"),
      lastModified: dateFormat("mediumDate"),
    };

    setStoredData((prev) => [...prev, newNote]);
    setInputValue(""); // clear textarea
  };

  // handleInputChange
  const handleInputChange = (e) => setInputValue(e.target.value);

  // 👇 new function for formatting selected text
  const applyFormatting = (syntaxStart, syntaxEnd = syntaxStart) => {
    const textarea = textareaRef.current;
    console.log(textarea);
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

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

  const downloadMarkdown = (content) => {
    if (content.length > 0) {
      const fileName = content.split("\n")[0];
      const blob = new Blob([content], {
        type: "text/plain;charset=utf-8",
      });
      FileSaver.saveAs(blob, `${fileName}.md`);
    }
  };

  //Handle success message
  const handleSaveSuccess = () => {
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
        showSuccess,
        setShowSuccess,
        pageTitle,
        setPageTitle,
        isToggle,
        setIsToggle,
        handleInputChange,
        handleButton,
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
