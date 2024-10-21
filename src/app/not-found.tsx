import { redirect } from "next/navigation";
import { AppRoute } from "~/enums";

export default function NotFound() {
  redirect(AppRoute.NOT_FOUND);
  return null;
}
