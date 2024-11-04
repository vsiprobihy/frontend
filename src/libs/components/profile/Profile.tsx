"use client";
import { ProfileCard } from "./profile-card/ProfileCard";
import cyrillicToTranslit from "cyrillic-to-translit-js";
import { ProfileHeader } from "./profile-header/ProfileHeader";
import { useRouter, useSearchParams } from "next/navigation";
import { getProfileScreen } from "@/libs/helpers/getProfileScreen";
import { ProfileSections } from "@/libs/enums";
import { useEffect } from "react";
import {
  UserProfile,
  authProfileList,
  authProfilePartialUpdate,
} from "@/libs/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { UserProfileFormValues } from "./profile-form/ProfileForm";

export const ProfileComponent = () => {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const router = useRouter();
  const t = useTranslations("profileForm");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("profileSection", ProfileSections.DATA);
    router.push(`?${params.toString()}`);
  }, []);

  const currentSection = searchParams.get("profileSection");

  const { data } = useQuery<UserProfile>({
    queryKey: ["userProfile"],
    queryFn: async (): Promise<UserProfile> => {
      const response = await authProfileList();
      if (response.data && response.response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.response.statusText);
      }
    },
  });

  const { mutate: mutateProfileUpdate } = useMutation<
    { data?: UserProfile },
    Error,
    UserProfile
  >({
    mutationFn: async (userProfileData: UserProfile) => {
      const response = await authProfilePartialUpdate({
        body: userProfileData,
      });

      if (response.response.status === 200) {
        return response;
      } else {
        throw new Error(response.response.statusText);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      alert(t("updateFailed", { error: error.message }));
    },
  });

  const userProfileData = data || {};

  const handleSubmit = (formData: UserProfileFormValues) => {
    const { year, month, day, last_name, first_name } = formData;
    let dateOfBirth: Date | string | undefined;

    if (year && month && day) {
      const dob = new Date(Date.UTC(+year, +month - 1, +day));
      dateOfBirth = dob.toISOString().split("T")[0];
    }
    
    const userData = {
      date_of_birth: dateOfBirth,
      first_name_eng: cyrillicToTranslit({ preset: "uk" }).transform(
        first_name
      ),
      last_name_eng: cyrillicToTranslit({ preset: "uk" }).transform(last_name),
      ...formData,
    };

    mutateProfileUpdate(userData);
  };

  return (
    <div className="mx-auto max-w-content-limit">
      <div className="lg:mb-11">
        <ProfileHeader />
      </div>

      <div className="fluid-px mb-12 mt-[-60px] lg:absolute lg:mt-[-300px] lg:pl-[clamp(0px,3vw+1.5px,225px)] lg:pr-0 xl:pl-[clamp(16px,10vw+2px,225px)]">
        <ProfileCard user={userProfileData} />
      </div>

      {getProfileScreen(
        currentSection as ProfileSections,
        handleSubmit,
        userProfileData
      )}
    </div>
  );
};
