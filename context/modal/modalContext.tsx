import { ModalStore, ModalStoreProps } from "@/types/modalType";
import { createContext, useContext } from "react";

const defaultValues = {
  modalValue: {
    isOpen: false,
    type: null,
  },
  setModalValue: (modal: ModalStore) => {},
} as ModalStoreProps;

export const ModalContext = createContext<ModalStoreProps>(defaultValues);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }
  return context;
};
