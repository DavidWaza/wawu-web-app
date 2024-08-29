import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { buttons, heroContents } from "@/data/portfolioData";
import { useTranslation } from "react-i18next";
import SearchFilter from "@/components/SearchFilter/SearchFilter";

const Hero = () => {
  const settings = {
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

  const backgroundChange = (roles: any) => {
    if (roles === "Leaders") {
      return "bg-[#F060A8]";
    } else if (roles === "Builders") {
      return "bg-[#A812E3]";
    } else if (roles === "Creators") {
      return "bg-[#290D43]";
    } else if (roles === "Caretakers") {
      return "bg-[#151B28]";
    } else {
      return "bg-black";
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <Slider {...settings}>
        {heroContents.map((heroContent, index) => (
          <div
            key={index}
            className="h-[100vh] flex items-center justify-center"
          >
            <div className={`${backgroundChange(heroContent.roles)} h-full`}>
              <div className="grid md:grid-cols-2 lg:py-20 px-10 lg:px-20 h-full">
                <div className="h-full lg:px-[3rem] pt-20 flex flex-col justify-center">
                  <Image
                    src={`${heroContent.textSrc}`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain object-center"
                  />
                  <p className="text-white md:leading-[30px] text-[15px] md:text-[20px] capitalize py-7">
                    Forget the old rules. You can have the best girls Right now.
                    Right here.
                  </p>
                  <div className="pt-5">

                  <SearchFilter />
                  </div>
                </div>
                <div className="h-full flex justify-center items-center pt-[1rem]">
                  <Image
                    className="w-full h-full object-contain object-center"
                    src={`${heroContent.imageSrc}`}
                    alt="slide 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Hero;
