"use client";

import { Swiper } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Mousewheel, Pagination } from "swiper/modules";

// Swiper
import "swiper/css";
import "swiper/css/pagination";

type PageSwiperProps = {
  children: React.ReactNode;
  onSwiper?: (swiper: SwiperClass) => void;
  onSlideChange?: (swiper: SwiperClass) => void;
};

export function PageSwiper({
  children,
  onSwiper,
  onSlideChange,
}: PageSwiperProps) {
  return (
    <Swiper
      direction="vertical"
      className="w-full h-full"
      modules={[Mousewheel]}
      mousewheel={true}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
    >
      {children}
    </Swiper>
  );
}
