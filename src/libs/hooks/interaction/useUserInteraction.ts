import { useState } from "react";

export const useUserInteraction = () => {
  // TODO: replace with state manage logic
  const [hasNotification, setHasNotification] = useState(true);
  const [userImage, setUserImage] = useState<string | null>(null);

  const handleNotificationAccess = () => {
    // TODO: Implement logic to display notification panel or modal
    setHasNotification(!hasNotification);
  };

  return {
    hasNotification,
    userImage,
    setUserImage,
    handleNotificationAccess,
    setHasNotification,
  };
};
