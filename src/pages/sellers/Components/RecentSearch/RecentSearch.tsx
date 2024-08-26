import { FC } from "react";
import Slider from "react-slick";
import { Text } from "@/components/ui/Typography/Typography";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const RecentSearchHistory = [
  {
    src: "/assets/logo-brand-identity.png",
    title: "Logo & Brand identity",
  },
  {
    src: "/assets/visual-design.png",
    title: "Visual Design",
  },
  {
    src: "/assets/web-app-design.png",
    title: "Web & App Design",
  },
  {
    src: "/assets/art.png",
    title: "Art Illustration",
  },
  {
    src: "/assets/marketing-design.png",
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
          <div key={index} className="shadow-md rounded-md p-5 border border-slate-400">
            <div className="flex justify-between items-center gap-5">
              <div className=" border-slate-500">
                <Image
                  src={history.src}
                  alt="recent img"
                  className="rounded-full w-20 "
                  width={500}
                  height={500}
                />
              </div>
              <Text variant="small" className="text-slate-500">
                {history.title}
              </Text>
              <MoveRight className="text-[#ED459A]" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default RecentSearch;
