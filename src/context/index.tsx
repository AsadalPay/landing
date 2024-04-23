"use client";

import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ContextType = {
  contactsModalIsOpen: boolean;
  setContactsModalIsOpen: Dispatch<SetStateAction<boolean>>;
  requestModalIsOpen: boolean;
  setRequestModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<ContextType>({
  contactsModalIsOpen: false,
  setContactsModalIsOpen: () => {},
  requestModalIsOpen: false,
  setRequestModalIsOpen: () => {}
});

type Props = {
  children: ReactNode;
};

export default function AppContextProvider({ children }: Props) {
  const [contactsModalIsOpen, setContactsModalIsOpen] = useState(false);
  const [requestModalIsOpen, setRequestModalIsOpen] = useState(false);
  

  const contextValues = {
    contactsModalIsOpen,
    setContactsModalIsOpen,
    requestModalIsOpen,
    setRequestModalIsOpen,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}
