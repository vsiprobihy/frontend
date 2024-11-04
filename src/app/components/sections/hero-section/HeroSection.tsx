import { HeroSectionTitle } from "./HeroSectionTitle";
import { HeroSectionSubtitle } from "./HeroSectionSubtitle";
import { HeroSectionCarousel } from "./carousel/HeroSectionCarousel";
import PlaceholderImage from "~/images/placeholder.webp";

export const HeroSection: React.FC = () => {
  return (
    <div
      className={`fluid-px flex flex-col justify-end bg-dark pb-8 md:justify-center md:p-8 xl:py-16`}
    >
      <div
        className={`mx-auto flex w-full max-w-content-limit flex-col justify-between gap-10 pt-20 md:flex md:flex-row md:items-center md:gap-16`}
      >
        <div className={`inline-flex flex-col gap-8 md:gap-5`}>
          <HeroSectionSubtitle />
          <HeroSectionTitle />
        </div>
        <div
          className={`w-full max-w-[405px] xl:max-w-[500px] 2xl:max-w-[700px]`}
        >
          <HeroSectionCarousel
            elements={Array(4).fill({
              image: { src: PlaceholderImage, alt: "Running" },
            })}
          />
        </div>
      </div>
    </div>
  );
};
