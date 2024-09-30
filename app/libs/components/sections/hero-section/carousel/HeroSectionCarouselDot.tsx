import { EmblaCarouselType } from "embla-carousel";
import { ComponentPropsWithRef, useCallback, useEffect, useState } from "react";
import clsx from "clsx";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

interface DotButtonProps extends ComponentPropsWithRef<"button"> {
  selected?: boolean;
}

export const DotButton: React.FC<DotButtonProps> = (props) => {
  const { selected, ...buttonProps } = props;

  return (
    <button
      className={clsx(
        `h-3 w-full rounded-full`,
        selected ? "bg-orange-hot" : "bg-grey"
      )}
      {...buttonProps}
    />
  );
};
