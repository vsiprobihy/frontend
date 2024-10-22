import { NextPage } from "next";
import { Icon, Logo } from "~/components";
import { IconType } from "~/enums";

const About: NextPage = () => (
  <main className="py-40 text-center text-3xl text-dark lg:px-40">
    <Logo isLarge />
    <p className="pt-10">місце зустрічі всіх бігунів.</p>

    {/* TODO: Remove this after usage example */}

    <div
      className={`flex h-48 w-full flex-col items-center justify-center bg-dark text-center text-white`}
    >
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
        <Icon
          name={IconType.CLOSE}
          className="flex h-8 w-8 items-center justify-center rounded bg-white text-sm text-dark"
        />
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <Icon name={IconType.BELL} className="relative text-2xl text-dark">
            <b className="absolute right-0.5 top-0 h-2 w-2 rounded-full bg-red"></b>
          </Icon>
        </div>
        <Icon
          name={IconType.LIKE}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-orange-hot"
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
    </div>
  </main>
);

export default About;
