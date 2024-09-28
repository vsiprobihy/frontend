"use client";

import React from "react";
import AuthModal from "./authModal/AuthModal";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const openModal = (status: boolean) => {
    setOpen(status);
  };

  return (
    <div className={`fixed top-0 w-full`}>
      header
      <button onClick={() => openModal(true)}>Open Login Modal</button>
      {open && <AuthModal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Header;
