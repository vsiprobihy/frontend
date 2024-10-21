import { useState } from "react";
import { Language } from "~/enums";
import { useAuth } from "~/context";

export const useUserInteraction = () => {
  const { isAuthenticatedUser } = useAuth();

  // TODO: replace with state manage logic
  const [language, setLanguage] = useState<Language>(Language.UA);
  const [hasNotification, setHasNotification] = useState(true);
  const [userImage, setUserImage] = useState<string | null>(null);

  const handleToggleLanguage = () =>
    setLanguage((prev) => (prev === Language.UA ? Language.EN : Language.UA));

  const handleNotificationAccess = () => {
    // TODO: Implement logic to display notification panel or modal
    setHasNotification(!hasNotification);
  };

  const translatedText = isAuthenticatedUser ? "Профіль" : "Вхід";

  return {
    language,
    hasNotification,
    translatedText,
    userImage,
    setUserImage,
    handleToggleLanguage,
    handleNotificationAccess,
    setHasNotification,
  };
};
