"use client";

import {
  NavigationLink,
  NotificationButton,
  ProfileButton,
  linkValues,
} from "~/components";

import { useIsMobile, useUserInteraction } from "~/hooks";

export const MobileMenu: React.FC = () => {
  const isMobile = useIsMobile();
  const {
    hasNotification,
    userImage,
    handleUserAccess,
    handleNotificationAccess,
    translatedText,
  } = useUserInteraction();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg">
      <nav className="flex items-center justify-between gap-0.5 px-2 py-2 uppercase text-white md:px-4">
        {linkValues.map((link, index) => (
          <NavigationLink
            key={index}
            href={link.url}
            label={link.name}
            variant="mobile"
          />
        ))}
        <div className="flex gap-x-2 rounded-full bg-black bg-opacity-40 p-1 backdrop-blur-lg sm:gap-x-3">
          <NotificationButton
            hasIndicator={hasNotification}
            onClick={handleNotificationAccess}
          />

          <ProfileButton
            userImage={userImage}
            isMobile={true}
            onClick={handleUserAccess}
            translatedText={translatedText}
          />
        </div>
      </nav>
    </div>
  );
};
