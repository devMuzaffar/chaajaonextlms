"use client";

import Title from "../shared/Title";
import blockStyle from "./style/blockStyle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SlidePrevButton from "./components/SlidePrevButton";
import SlideNextButton from "./components/SlideNextButton";
import { useEffect, useRef, useState } from "react";
import YoutubeCard from "./components/YoutubeCard";

const swiperBreakpoints = {
  0: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
  },
};

// Dummy Links
const YTLinksID = ["zo5Z_BQTxoM", "FppXoImo-N4", "cQENdfxk3xo"];

const Block4 = () => {
  // Ref hook for Swiper Navigation
  const swiperRef = useRef(null);

  return (
    <div className={blockStyle}>
      {/* Title */}
      <Title>Chaajao Corner</Title>

      {/* Content */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          breakpoints={swiperBreakpoints}
          spaceBetween={20}
          loop={false}
        >
          {YTLinksID.map((id, index) => (
            <SwiperSlide key={index}>
              <YoutubeCard id={id} />
            </SwiperSlide>
          ))}
        </Swiper>

        {swiperRef && (
          <div>
            <SlidePrevButton
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
            />
            <SlideNextButton
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Block4;
