import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";

// const heroDetails = [
//     {
//         id:1,
//         src:"/assets/slide-1-img.png",
//         bgColor:"bg-[#A812E3]"
//     }
// ]

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

const Hero = () => {
  return (
    <>
      <CCarousel controls transition="crossfade">
        {/* <CCarouselItem>
          <div className="bg-[#A812E3] h-full w-full">
            <div className="grid grid-cols-2">
              <div>text</div>
              <div className="flex justify-center items-center mt-40 pb-20">
                <CImage
                  className="d-block w-1/2"
                  src="/assets/slide-1-img.png"
                  alt="slide 1"
                  width={"50px"}
                  height={"50px"}
                />
              </div>
            </div>
          </div>
        </CCarouselItem> */}
        <CCarouselItem>
          <div className="bg-[#A812E3] h-full w-full">
            <div className="grid grid-cols-2">
              <div className="justify-content align-middle items-center mt-[25%] ml-[30%]">
                <h1 className="text-white font-extrabold text-[5rem]">
                  We are
                </h1>
                <h1 className="text-white font-extrabold text-[6rem] rubik -mt-3">
                  Builders
                </h1>
                <Text className="text-white -mt-2">
                  Forgot the old rules. You can have the best girls <br /> Right
                  now. Right here
                </Text>
                <div className="flex">
                  <input
                    placeholder="Search for anything"
                    className="py-2 px-3 rounded-r-none rounded-md w-1/2 border-none"
                  />
                  <Button
                    variant="primary"
                    className="rounded-l-none p-2 border-none"
                  >
                    {" "}
                    Search
                  </Button>
                </div>
                <div className="flex gap-2 w-full mt-4">
                  {buttons.map((button) => (
                    <Button
                      variant="secondary"
                      size="large"
                      className="py-1"
                      key={button.label}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center mt-40 pb-20">
                <CImage
                  className="d-block w-1/2"
                  src="/assets/slide-1-img.png"
                  alt="slide 1"
                  width={"50px"}
                  height={"50px"}
                />
              </div>
            </div>
          </div>
        </CCarouselItem>
        {/* <CCarouselItem>
          <div className="bg-[#A812E3] h-full w-full">
            <div className="grid grid-cols-2">
              <div>text</div>
              <div className="flex justify-center items-center mt-40 pb-20">
                <CImage
                  className="d-block w-1/2"
                  src="/assets/slide-1-img.png"
                  alt="slide 1"
                  width={"50px"}
                  height={"50px"}
                />
              </div>
            </div>
          </div>
        </CCarouselItem> */}
      </CCarousel>
    </>
  );
};
export default Hero;
