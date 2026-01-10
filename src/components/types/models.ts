export type Note = {
  id: number;
  content: string;
  firstCreated: string;
  lastModified: string;
  title: string;
};

export type ProviderProps = React.ReactNode;

export type DataContextType = {
  children?: ProviderProps;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  storedData: Note[];
  setStoredData: React.Dispatch<React.SetStateAction<Note[]>>;
  showSuccess: boolean;
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  pageTitle: string;
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
  isToggle: boolean;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButton: () => void;
  applyFormatting: (
    syntaxStart: string,
    syntaxEnd?: string | undefined
  ) => void;
  textareaRef: React.RefObject<HTMLInputElement | null>;
  downloadMarkdown: (content: string) => void;
  handleSaveSuccess: (value: React.SetStateAction<boolean>) => void;
};

export type ButtonProps = {
  icon: React.ReactNode;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
};

export type ButtonWithTextProps = {
  icon: React.ReactNode;
  text: string;
  className: string;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
