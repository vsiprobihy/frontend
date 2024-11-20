import { ProfileComponent } from "@/libs/components/profile/Profile";


export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-content-limit">
      <ProfileComponent />
      {children}
    </div>
  );
}
