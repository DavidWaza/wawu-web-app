import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Slider from "react-slick";
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
    backgroundColor: "",
    src: "",
  },
  {
    roles: "Builders",
    backgroundColor: "bg-[#A812E3]",
    src: "",
  },
  {
    roles: "Creators",
    backgroundColor: "",
    src: "",
  },
  {
    roles: "Caretakers",
    backgroundColor: "",
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
            <div
              className={` ${heroContent.backgroundColor} w-full px-10 h-[90vh]`}
            >
              <div className="grid 2xl:grid-cols-2 pt-[10vh]">
                <div className="mx-auto 2xl:mt-[23%] py-[30%] 2xl:py-0 uppercase px-[3rem]">
                  <Heading variant="large" fontColor="primary">
                    We are
                  </Heading>
                  <Heading
                    variant="xlarge"
                    className=" bg-neutral-200 stroke-black stroke-1 mt-3"
                    fontColor="primary"
                  >
                   {heroContent.roles}
                  </Heading>
                  <Text className="text-white mt-5" variant="small">
                    Forgot the old rules. You can have the best girls <br />{" "}
                    Right now. Right here
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
                <div className="hidden 2xl:flex justify-center items-center">
                  <img
                    className="d-block w-full"
                    src="/assets/slide-1-img.png"
                    alt="slide 1"
                    width={"50px"}
                    height={"50px"}
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
