import { useState } from "react";
import { Language } from "~/enums";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "~/context";

export const useUserInteraction = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticatedUser, setIsAuthenticatedUser } = useAuth();

  const [language, setLanguage] = useState<Language>(Language.UA);
  const [hasNotification, setHasNotification] = useState(true);
  const [userImage, setUserImage] = useState<string | null>(null);

  const handleToggleLanguage = () =>
    setLanguage((prev) => (prev === Language.UA ? Language.EN : Language.UA));

  const handleUserAccess = () => {
    const action = isAuthenticatedUser ? openProfileMenu : openAuthModal;
    action();
  };

  const openProfileMenu = () => {
    // TODO: Add logic to open the user profile menu panel
    setIsAuthenticatedUser(false);
  };

  const openAuthModal = () => {
    const params = new URLSearchParams(searchParams);
    params.set("showAuthModal", "true");
    router.push(`?${params.toString()}`);
  };

  const handleNotificationAccess = () => {
    // TODO: Implement logic to display notification panel or modal
    setHasNotification(!hasNotification);
  };

  const translatedText = isAuthenticatedUser ? "Профіль" : "Вхід";

  return {
    language,
    isAuthenticatedUser,
    hasNotification,
    userImage,
    translatedText,
    handleToggleLanguage,
    handleUserAccess,
    handleNotificationAccess,
    setIsAuthenticatedUser,
    setHasNotification,
    setUserImage,
  };
};
