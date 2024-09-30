import Image from "next/image";
import PlaceholderImage from "@/public/images/placeholder.webp";

const carouselData = [0, 1, 2, 3];

const HeroSectionCarousel: React.FC = () => {
  return (
    <div
      className={`flex flex-col gap-2 md:max-w-[400px] md:gap-4 xl:max-w-[660px]`}
    >
      <div
        className={`relative flex h-[16.875rem] w-full md:h-[20rem] xl:h-[32.5rem]`}
      >
        <Image
          src={PlaceholderImage}
          alt={"Running News"}
          className={`rounded-4`}
        />
      </div>
      <div className={`flex flex-row items-center gap-1`}>
        {carouselData.map((_, index) => (
          <div key={index} className={`h-4 flex-1 rounded-full bg-grey`}></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSectionCarousel;
