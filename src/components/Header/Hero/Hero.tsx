import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { buttons, heroContents } from "@/data/portfolioData";

const Hero = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    arrows: false,
    cssEase: "linear",
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
  return (
    <>
      <Slider {...settings}>
        {heroContents.map((heroContent, index) => (
          <div key={index}>
            <div className={backgroundChange(heroContent.roles)}>
              <div className="grid md:grid-cols-2 lg:pt-20 px-10 lg:px-20">
                <div className="lg:px-[5rem] pt-20">
                  <Image
                    src={`${heroContent.textSrc}`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain object-center"
                  />
                  <Text
                    className="text-white leading-[30px] capitalize py-7"
                    variant="small"
                  >
                    Forget the old rules. You can have the best girls <br />{" "}
                    Right now. Right here.
                  </Text>
                  <div className="flex py-5">
                    <input
                      placeholder="Search for any services"
                      className="py-2 px-3 rounded-r-none rounded-md w-full border-none"
                    />
                    <Button
                      variant="primary"
                      className="rounded-l-none p-2 border-none"
                    >
                      {" "}
                      Search
                    </Button>
                  </div>
                  <div className="hidden 2xl:flex gap-2 w-full mt-4">
                    {buttons.map((button) => (
                      <Button
                        variant="secondary"
                        size="small"
                        className="py-1"
                        key={button.label}
                      >
                        {button.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    className="w-[80%] h-auto object-contain object-center"
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
