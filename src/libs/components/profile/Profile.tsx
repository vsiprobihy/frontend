import { ProfileCard } from "./profile-card/ProfileCard";
import { ProfileHeader } from "./profile-header/ProfileHeader";

export const ProfileComponent = () => {
  return (
    <div>
      <div className="lg:mb-11">
        <ProfileHeader />
      </div>

      <div className="fluid-px mb-12 mt-14 lg:absolute lg:mt-[-19rem] lg:pl-[clamp(0,3vw+0.094,14rem)] lg:pr-0 xl:pl-[clamp(1rem,10vw+0.125rem,14rem)]">
        <ProfileCard />
      </div>
    </div>
  );
};
