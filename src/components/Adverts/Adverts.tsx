import { useEffect, useRef } from "react";
import Image from "next/image";
import { Text } from "../ui/Typography/Typography";
import Slider from "react-slick";

const Adverts = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    arrows: false,
  };

  return (
    <div className="bg-white pt-10">
      <Text variant="medium" className="text-center py-2 !text-[#290C43] ">
        Advertisement
      </Text>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          <div className="w-full">
            <Image
              src={"/assets/Header-1.png"}
              alt="banner"
              width={0}
              height={0}
              sizes={`100vw`}
              className="w-full h-auto object-cover object-center"
            />
          </div>
          <div className="w-full">
            <Image
              src={"/assets/Header-2.png"}
              alt="banner"
              width={0}
              height={0}
              sizes={`100vw`}
              className="w-full h-auto object-cover object-center"
            />
          </div>
          <div className="w-full">
            <Image
              src={"/assets/Header-3.png"}
              alt="banner"
              width={0}
              height={0}
              sizes={`100vw`}
              className="w-full h-auto object-cover object-center"
            />
          </div>
          <div className="w-full">
            <Image
              src={"/assets/Header-4.png"}
              alt="banner"
              width={0}
              height={0}
              sizes={`100vw`}
              className="w-full h-auto object-cover object-center"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Adverts;
