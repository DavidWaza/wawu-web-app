import React from "react";
import { Text } from "@/components/ui/Typography/Typography";
import Slider from "react-slick";
import ExploreCard from "./ExploreCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedArticles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="bg-[#290D43] p-20">
      <Text variant="medium" className="text-white">
        Graphics & Design Related Articles
      </Text>
      <Text variant="small" className="text-white lg:w-[60rem] py-4">
        Completely synergize resource taxing relationships via premier niche
        markets. Professionally cultivate one-to-one customer service with
        robust ideas.
      </Text>
      <Slider {...settings}>
          <ExploreCard
            cardImg="/assets/related-article-img.png"
            title="Reach your users with new tool"
            fontColor="secondary"
          >
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize.
          </ExploreCard>
          <ExploreCard
            cardImg="/assets/related-article-img.png"
            title="Reach your users with new tools"
            fontColor="secondary"
          >
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize.
          </ExploreCard>
          <ExploreCard
            cardImg="/assets/related-article-img.png"
            title="Reach your users with new tools"
            fontColor="secondary"
          >
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize.
          </ExploreCard>
      </Slider>
    </div>
  );
};

export default RelatedArticles;
