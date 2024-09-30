import { Icon } from "~/components/components";
import { IconType } from "~/enums/enums";

export const Header: React.FC = () => {
  return (
    <header
      className={`flex h-48 w-full flex-col items-center justify-center bg-dark text-center text-white`}
    >
      {/* TODO: Remove this after usage example */}
      <h2 className="mb-4 text-lg">Example of icon usage</h2>

      <div className="flex items-center gap-4">
        <Icon
          name={IconType.GOOGLE}
          className="flex h-8 w-8 items-center justify-center rounded bg-orange-hot text-xl text-white"
        />
        <Icon
          name={IconType.SEARCH}
          className="flex h-8 w-8 items-center justify-center rounded bg-white text-xl text-dark"
        />
      </div>

      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Ввести назву події"
          className="w-80 rounded-full border-none bg-white py-2 pl-10 pr-4 text-dark focus:outline-none"
        />
        <Icon
          name={IconType.SEARCH}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-dark"
        />
      </div>
    </header>
  );
};
