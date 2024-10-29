"use client";
import { ProfileCard } from "./profile-card/ProfileCard";
import { ProfileHeader } from "./profile-header/ProfileHeader";
import { useRouter, useSearchParams } from "next/navigation";
import { getProfileScreen } from "@/libs/helpers/getProfileScreen";
import { ProfileSections } from "@/libs/enums";
import { useEffect } from "react";

export const ProfileComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("profileSection", ProfileSections.DATA);
    router.push(`?${params.toString()}`);
  }, []);

  const currentSection = searchParams.get("profileSection");

  return (
    <div className="max-w-content-limit mx-auto">
      <div className="lg:mb-11">
        <ProfileHeader />
      </div>
      
      <div className="fluid-px mb-12 mt-[-60px] lg:absolute lg:mt-[-300px]">
        <ProfileCard />
      </div>

      {getProfileScreen(currentSection as ProfileSections)}
    </div>
  );
};
