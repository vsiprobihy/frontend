"use client";

import React from "react";
import ModalOverlay, { ModalType } from "./ModalOverlay";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState<ModalType | null>(null);

  const openModal = (type: ModalType) => {
    setModalType(type);
    setOpen(true);
  };

  return (
    <div className={`fixed top-0 w-full`}>
      header
      <button onClick={() => openModal(ModalType.AuthModal)}>Open Login Modal</button>
      {open && modalType && (
        <ModalOverlay modalType={modalType} open={open} setOpen={setOpen} />
      )}
    </div>
  );
};

export default Header;
