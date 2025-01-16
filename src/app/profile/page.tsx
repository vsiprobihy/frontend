
import { AppRoute, ProfileSections } from "@/libs/enums";
import { NextPage } from "next";
import { redirect } from "next/navigation";

const Profile: NextPage = () => {
  redirect(`${AppRoute.PROFILE}/${ProfileSections.DATA}`);
};
export default Profile;
