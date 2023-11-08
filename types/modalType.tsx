import { Dispatch, SetStateAction } from "react";

export type ModalType = "firstModal" | "secondModal";

export type ModalStore = {
  type : ModalType | null,
  isOpen : boolean
}

export interface ModalStoreProps {
  modalValue: ModalStore;
  setModalValue: Dispatch<SetStateAction<ModalStore>>;
}