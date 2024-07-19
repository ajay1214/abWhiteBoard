"use client";

import { ActionModal } from "@/components/modals/action-modal";
import { createContext, useState, useEffect, useRef } from "react";

interface ActionModalContextProps {
  onOpenModal: (_: InitialState) => void;
}

export const ActionModalContext = createContext<ActionModalContextProps>({
  onOpenModal: (_: InitialState) => {},
});

interface ActionModalProviderProps {
  children: React.ReactNode;
}

type InitialState = typeof initialState;
const initialState = {
  id: "",
  title: "",
  header: "",
  description: "",
  disabled: false,
  onConfirm: (id: string, title: string) => {},
  hasInput: true,
};

export const ActionModalProvider = ({ children }: ActionModalProviderProps) => {
  const [isOpen, setOpen] = useState(false);
  const [modalState, setMaodalState] = useState(initialState);
  const [input, setInput] = useState("");

  const onOpenModal = (state: InitialState) => {
    setOpen(true);
    setMaodalState(state);
    setInput(state.title);
  };

  const onClose = () => {
    setOpen(false);
    setMaodalState(initialState);
    setInput(initialState.title);
  };

  return (
    <ActionModalContext.Provider value={{ onOpenModal }}>
      {children}
      <ActionModal
        {...modalState}
        onClose={onClose}
        isOpen={isOpen}
        input={input}
        setInput={setInput}
      />
    </ActionModalContext.Provider>
  );
};
