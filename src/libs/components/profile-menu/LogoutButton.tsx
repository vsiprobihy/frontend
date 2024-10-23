import { Icon } from "~/components";
import { IconType } from "~/enums";

interface LogoutButtonProps {
  onLogout: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => (
  <button
    onClick={onLogout}
    className="mt-2 flex w-full items-center p-2 text-left font-semibold uppercase text-dark hover:text-orange-interactive"
  >
    <Icon name={IconType.EXIT} className="mr-2 text-2xl" />
    Вийти
  </button>
);
