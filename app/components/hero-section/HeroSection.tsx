import HeroSectionTitle from "@/app/components/hero-section/HeroSectionTitle";
import HeroSectionSubtitle from "@/app/components/hero-section/HeroSectionSubtitle";
import Carousel from "@/app/components/carousel/Carousel";
import PlaceholderImage from "@/public/images/placeholder.webp";

const HeroSection: React.FC = () => {
  return (
    <div
      className={`flex h-screen flex-col justify-end bg-dark px-2.5 pb-8 pt-2.5 md:justify-center md:p-8 xl:p-16`}
    >
      <div
        className={`flex flex-col justify-between gap-10 md:flex md:flex-row md:items-center md:gap-16`}
      >
        <div className={`flex flex-col gap-8 md:gap-5`}>
          <HeroSectionSubtitle />
          <HeroSectionTitle />
        </div>
        <div className={`w-full max-w-[660px]`}>
          <Carousel
            elements={[
              { image: { src: PlaceholderImage, alt: "Running" } },
              { image: { src: PlaceholderImage, alt: "Running" } },
              { image: { src: PlaceholderImage, alt: "Running" } },
              { image: { src: PlaceholderImage, alt: "Running" } },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
