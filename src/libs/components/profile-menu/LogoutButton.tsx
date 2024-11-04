import { Icon } from "~/components";
import { IconType } from "~/enums";
import { useTranslations } from "next-intl";

interface LogoutButtonProps {
  onLogout: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const t = useTranslations("LogoutButton");

  return (
    <button
      onClick={onLogout}
      className="mt-2 flex w-full items-center p-2 text-left font-semibold uppercase text-dark hover:text-orange-interactive"
    >
      <Icon name={IconType.EXIT} className="mr-2 text-2xl" />
      {t("logout")}
    </button>
  );
};
