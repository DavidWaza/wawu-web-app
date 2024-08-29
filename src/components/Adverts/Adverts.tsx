import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const Adverts = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="flex justify-center">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction:true,
          }),
        
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src={"/assets/Header-1.png"}
              alt="banner"
              width={0}
              height={0}
              sizes={`100vw`}
              className=" object-cover object-center"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/assets/Header-2.png"}
              alt="banner"
              width={0}
              height={0}
              sizes={`100vw`}
              className=" w-full h-auto object-cover object-center"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/assets/Header-3.png"}
              alt="banner"
              width={0}
              height={0}
              sizes={`100vw`}
              className="w-full h-auto object-cover object-center"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/assets/Header-4.png"}
              alt="banner"
              width={0}
              height={0}
              sizes={`100vw`}
              className="w-full h-auto object-cover object-center"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Adverts;
