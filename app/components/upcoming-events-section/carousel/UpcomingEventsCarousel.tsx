"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselButton from "@/app/components/CarouselButton";
import EventCard, {
  EventCardProps,
} from "@/app/components/upcoming-events-section/carousel/EventCard"; // The aspect ratio of component is always 14:17

// The aspect ratio of component is always 14:17

type SlideType = {
  event: EventCardProps;
};

interface CarouselProps {
  elements: SlideType[];
}

const UpcomingEventsCarousel: React.FC<CarouselProps> = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {props.elements.map((slide, index) => (
            <div
              className={`mx-1 h-full flex-[0_0_90%] overflow-hidden rounded-2xl bg-white`}
              key={index}
            >
              <EventCard {...slide.event} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className={`mt-3 flex flex-row justify-center`}>
        <div
          className={`flex flex-row items-center justify-center gap-2 md:gap-3`}
        >
          <CarouselButton direction={"left"} onClick={scrollPrev} />
          <CarouselButton direction={"right"} onClick={scrollNext} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsCarousel;
