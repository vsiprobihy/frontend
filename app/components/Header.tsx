"use client";

import React from "react";
import AuthModal from "./auth-modal/AuthModal";
import { useRouter, useSearchParams } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const openModal = () => {
    const params = new URLSearchParams(searchParams);
    params.set("showAuthModal", "true");
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={`fixed top-0 w-full`}>
      header
      <button onClick={() => openModal()}>Open Login Modal</button>
    </div>
  );
};

export default Header;
