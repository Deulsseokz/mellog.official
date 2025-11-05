"use client";

import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { AnimatePresence, motion } from "framer-motion";

import { PageSwiper } from "@/components/PageSwiper";
import { SectionNav } from "@/components/SectionNav";

import { Hero } from "@/components/sections/Hero";
import { Tip } from "@/components/sections/Tip";
import { Test } from "@/components/sections/Test";
import { Feedback } from "@/components/sections/Feedback";
import { Others } from "@/components/sections/Others";

export default function Home() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  const handleTabClick = (index: number) => {
    swiperInstance?.slideTo(index);
  };

  return (
    <main className="w-full h-svh flex flex-col bg-white relative">
      <AnimatePresence>
        {!isSplashFinished && (
          <motion.div
            key="splash"
            className="w-full h-full absolute top-0 left-0 z-20 bg-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Hero onSplashComplete={() => setIsSplashFinished(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <SectionNav
        currentSwiperIndex={activeIndex}
        onTabClick={handleTabClick}
      />

      <div className="w-full flex-1 min-h-0 z-10">
        <PageSwiper
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {/* Slide 0 (Tip) */}
          <SwiperSlide className="w-full h-full">
            <Tip />
          </SwiperSlide>

          {/* Slide 1 (Test) */}
          <SwiperSlide className="w-full h-full">
            <Test />
          </SwiperSlide>

          {/* Slide 2 (Feedback) */}
          <SwiperSlide className="w-full h-full">
            <Feedback />
          </SwiperSlide>

          {/* Slide 3 (zone) */}
          <SwiperSlide className="w-full h-full">
            <Others />
          </SwiperSlide>
        </PageSwiper>
      </div>
    </main>
  );
}
