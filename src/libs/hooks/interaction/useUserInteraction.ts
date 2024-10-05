import { useState } from "react";
import { Language } from "~/enums/enums";

export const useUserInteraction = () => {
  // TODO: replace with state manage logic
  const [language, setLanguage] = useState<Language>(Language.UA);
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState<string | null>(
    "User"
  );
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
    setIsAuthenticatedUser(null);
  };

  const openAuthModal = () => {
    // TODO: Add logic to open the login/signup panel or modal
    setIsAuthenticatedUser("User");
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
