import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const buttons = [
  {
    label: "Web Design",
    link: "",
  },
  {
    label: "WordPress",
    link: "",
  },
  {
    label: "Logo Design",
    link: "",
  },
];

const heroContents = [
  {
    roles: "Leaders",
    backgroundColor: "bg-[#290D43]",
    src: "",
  },
  {
    roles: "Builders",
    backgroundColor: "bg-[#A812E3]",
    src: "",
  },
  {
    roles: "Creators",
    backgroundColor: "bg-[#290D43]",
    src: "",
  },
  {
    roles: "Caretakers",
    backgroundColor: "bg-[#A812E3]",
    src: "",
  },
];
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
  return (
    <>
      <Slider {...settings}>
        {heroContents.map((heroContent, index) => (
          <div key={index}>
            <div className={` ${heroContent.backgroundColor} px-10`}>
              <div className="grid grid-cols-2 2xl:py-20">
                <div className="mx-auto 2xl:mt-[23%] lg:py-[30%] 2xl:py-0 uppercase px-[3rem]">
                  <Image src="/assets/builders.png" alt="" width={500} height={500} />
                  <Text className="text-white capitalize" variant="small">
                    Forgot the old rules. You can have the best girls <br />{" "}
                    Right now. Right here.
                  </Text>
                  <div className="flex py-5">
                    <input
                      placeholder="Search for anything"
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
                <div className="hidden md:flex justify-center items-center">
                  <Image
                    className="d-block w-1/2 lg:w-[85%]"
                    src="/assets/slide-1-img.png"
                    alt="slide 1"
                    width={500}
                    height={500}
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
