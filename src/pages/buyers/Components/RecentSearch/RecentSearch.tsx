import { FC } from "react";
import Slider from "react-slick";
import { Text } from "@/components/ui/Typography/Typography";
import { GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecentSearchHistory = [
  {
    src: "/assets/mentor-girl.png",
    title: "Logo & Brand identity",
  },
  {
    src: "/assets/mentor-girl.png",
    title: "Visual Design",
  },
  {
    src: "/assets/mentor-girl.png",
    title: "Web & App Design",
  },
  {
    src: "/assets/mentor-girl.png",
    title: "Art Illustration",
  },
  {
    src: "/assets/mentor-girl.png",
    title: "Marketing Design",
  },
];

interface RecentSearchProps {
  src: string;
  title: string;
  index: number;
}
const RecentSearch: FC<RecentSearchProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
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
    <div>
      <Slider {...settings}>
        {RecentSearchHistory.map((history, index) => (
          <div key={index} className="shadow-sm rounded-md p-5 border border-slate-400 mr-3">
            <div className="flex justify-between items-center">
              <div className="rounded-full  w-20 h-auto border border-slate-500">
                <img
                  src="/assets/mentor-girl.png"
                  alt="recent img"
                  className="rounded-full w-20 h-auto"
                />
              </div>
              <Text variant="small" className="text-slate-500">
                {history.title}
              </Text>
              <GoArrowRight className="text-black" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default RecentSearch;
