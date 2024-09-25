"use client";

import React from "react";
import { Dialog, DialogPortal, DialogOverlay } from "@radix-ui/react-dialog";
import { useCallback } from "react";
import AuthModal from "./modals/AuthModal";

export enum ModalType {
  AuthModal = "auth",
}

interface ModalOverlayProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalType: ModalType;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({
  open,
  setOpen,
  modalType,
}) => {
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose]);

  function getContent(modalType: ModalType) {
    switch (modalType) {
      case ModalType.AuthModal:
        return (
          <AuthModal open={open} onClose={handleClose} setOpen={setOpen} />
        );
      default:
        return null;
      // TODO: Add other modals
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
        {getContent(modalType)}
      </DialogPortal>
    </Dialog>
  );
};

export default ModalOverlay;
