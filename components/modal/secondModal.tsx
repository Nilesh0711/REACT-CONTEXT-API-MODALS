"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { useModal } from "@/context/modal/modalContext";

export default function SecondModal() {
  const { modalValue, setModalValue } = useModal();

  let isModelOpen = modalValue.isOpen && modalValue.type === "secondModal";

  const handleClose = () => {
    setModalValue({
      isOpen: false,
      type: null,
    });
  };

  return (
    <>
      <Dialog open={isModelOpen} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
