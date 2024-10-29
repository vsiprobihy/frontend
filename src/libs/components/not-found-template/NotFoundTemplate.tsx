"use client";

import { NextPage } from "next";
import Image from "next/image";
import NotFoundImage from "~/images/not-found.webp";
import clsx from "clsx";

interface NotFoundTemplateProps {
  heading: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  isLage?: boolean;
  isSmall?: boolean;
}

export const NotFoundTemplate: NextPage<NotFoundTemplateProps> = ({
  heading,
  children,
  title,
  description,
  isLage = false,
  isSmall = false,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative flex scale-50 items-center justify-center md:scale-75 xl:scale-100">
        <h1
          className={clsx(
            "font-bold uppercase leading-[10rem] text-grey-light-middle md:leading-[15rem] lg:leading-none",
            isLage
              ? "text-[21rem]"
              : "text-[11rem] md:text-[16rem] lg:text-[21rem]",
            isSmall && "lg:!text-[11rem]"
          )}
        >
          {heading}
        </h1>
        <Image
          src={NotFoundImage}
          alt="Not Found Image"
          width={315}
          className={clsx(
            "absolute left-1/2 top-1/2 -translate-x-1/2 transform",
            isLage ? "-translate-y-1/2" : "-translate-y-44 md:-translate-y-1/2"
          )}
        />
      </div>
      <div className="w-screen px-4 md:w-fit">
        <h2 className="h2">{title}</h2>
        <p className="pb-2 text-lg md:pb-4">{description}</p>
        {children}
      </div>
    </div>
  );
};
