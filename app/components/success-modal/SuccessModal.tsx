"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import CloseButton from "../CloseButton";
import SuccessImage from "../../../public/images/sucsses-registration.webp";
import SuccessImageMobile from "../../../public/images/sucsess-registration-MOBILE.webp";
import useIsMobile from "../../hooks/useIsMobile";

const SuccessModal: React.FC = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const searchParams = useSearchParams();
  const showSuccessModal = !!searchParams.get("showSuccessModal");

  const handleClose = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("showSuccessModal");
    router.push(`?${params.toString()}`);
  }, [searchParams]);

  return (
    <Dialog open={showSuccessModal} onOpenChange={handleClose}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
        <DialogContent
          aria-describedby={undefined}
          className="fixed inset-0 top-[75px] mx-auto flex h-[518px] w-[336px] flex-col items-center justify-between rounded-lg bg-white p-0 md:top-1/2 md:mt-0 md:h-[671px] md:w-[870px] md:-translate-y-1/2 md:transform"
          onClick={handleClose}
        >
          <DialogClose asChild>
            <CloseButton
              onClick={handleClose}
              className="absolute right-[17px] top-[17px] md:right-[12px] md:top-[40px]"
            />
          </DialogClose>
          <DialogTitle>
            <VisuallyHidden>Success Modal</VisuallyHidden>
          </DialogTitle>
          <Image
            src={isMobile ? SuccessImageMobile : SuccessImage}
            alt={"Success registration"}
            className="h-[308px] w-full rounded-t-lg md:h-[384px]"
          />
          <div className="h-[calc(100%-308px)] w-full text-center md:h-[calc(100%-384px)]">
            <p className="mb-[16px] mt-[43px] text-[26px] md:text-[42px]">
              Вітаємо вас <br /> з успішною реєстрацією.
            </p>
            <p className="text-[26px] text-orange-hot md:text-[42px]">
              Вдалих забігів вам!
            </p>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default SuccessModal;
