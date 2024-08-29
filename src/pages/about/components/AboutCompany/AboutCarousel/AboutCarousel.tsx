import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Text } from "@/components/ui/Typography/Typography";
import { sliderContent } from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";

const AboutCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {sliderContent.map((slide) => (
            <div key={slide.title}>
              <Link href={"/seller-landing"}>
                <div className={`h-[25rem] w-full ${slide.backgroundColor}`}>
                  <div className="flex justify-center">
                    <Image
                      src={slide.src}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[300px] h-auto object-contain object-center"
                      alt={slide.src}
                    />
                  </div>
                  <Text
                    variant="small"
                    className={`text-center mt-4 py-3 ${slide.text}`}
                    textWeight="bold"
                  >
                    {slide.title}
                  </Text>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default AboutCarousel;
