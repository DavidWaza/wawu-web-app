"use client";
import React, { useState } from "react";
import Section from "../ui/Section/Section";
import VideoCarousel from "../VideoCarousel/VideoCarousel";
import NextSlideVideoCarousel from "../VideoCarousel/NextSlideVideoCarousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const VideoComponent = () => {
  const [nextVideo, setNextVideo] = useState(false);

  const NextVideoSlider = () => {
    setNextVideo(!nextVideo);
  };
  return (
    <>
      <div className="bg-[#471471] py-[10rem] transition-all ease-linear">
        <div className="lg:px-20 px-5">
          <div className={`${!nextVideo ? "block" : "hidden"}`}>
            <VideoCarousel />
          </div>
          {nextVideo && (
            <div className="text-white text-lg transition-all ease-in-out">
              <NextSlideVideoCarousel />
            </div>
          )}
        </div>
        <div className={`flex lg:px-[12rem] 2xl:justify-end px-9 py-5`}>
          <div
            className="flex justify-center items-center gap-2 py-2 px-3 border-none cursor-pointer bg-[#E54D9A] rounded-md text-white"
            onClick={NextVideoSlider}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                NextVideoSlider();
              }
            }}
          >
            {!nextVideo ? (
              <ArrowRight className="w-7 h-auto order-1" />
            ) : (
              <ArrowLeft className="w-7 h-auto" />
            )}
            {nextVideo ? "Previous Video" : "Next Video"}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoComponent;
