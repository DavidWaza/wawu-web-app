import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Text } from "@/components/ui/Typography/Typography";
import { sliderContent } from "@/data/portfolioData";

const AboutCarousel = () => {
  const PrevArrow = (props:any) => {
    return <></>; // Return an empty fragment to hide the previous arrow
  };
  
  const NextArrow = (props:any) => {
    return <></>; // Return an empty fragment to hide the next arrow
  };
  
 
  const settings = {
    dots:false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {sliderContent.map((slide) => (
            <div key={slide.title}>
              <div className={`h-[25rem] w-full ${slide.backgroundColor}`}>
                <div className="flex justify-center">
                  <img src={slide.src} alt="woman empower" />
                </div>
                <Text
                  variant="small"
                  className={`text-center mt-4 py-3 ${slide.text}`}
                  textWeight="bold"
                >
                  {slide.title}
                </Text>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default AboutCarousel;
