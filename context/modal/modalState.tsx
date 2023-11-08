"use client"

import React, { ReactNode, useState } from "react";
import { ModalContext } from "./modalContext";
import { ModalStore } from "@/types/modalType";

type ModalProviderProps = {
  children: ReactNode;
};

export default function ModalState({ children }: ModalProviderProps) {
  const [modalValue, setModalValue] = useState<ModalStore>({
    isOpen: false,
    type: null,
  });

  return (
    <ModalContext.Provider value={{ modalValue, setModalValue }}>
      {children}
    </ModalContext.Provider>
  );
}
