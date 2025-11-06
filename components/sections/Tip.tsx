"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { event as gtagEvent } from "@/lib/ga";

// Swiper
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tipData = [
  {
    img: "/tip/1.jpg",
    title: "TIP 1",
    sub1: "랜드마크 점령 챌린지",
    sub2: "120개 챌린지 도전하기",
  },
  {
    img: "/tip/2.jpg",
    title: "TIP 2",
    sub1: "전국 지도 정복하기",
    sub2: "랜드마크 인증하고 지도 정복하기",
  },
  {
    img: "/tip/3.jpg",
    title: "TIP 3",
    sub1: "15개의 히든 뱃지",
    sub2: "챌린지 도전하며 히든 뱃지 얻기",
  },
  {
    img: "/tip/4.jpg",
    title: "TIP 4",
    sub1: "프라이빗하게",
    sub2: "프레임으로 나만의 앨범 꾸미기",
  },
  {
    img: "/tip/5.jpg",
    title: "TIP 5",
    sub1: "퍼블릭하게",
    sub2: "SNS로 바로 공유하기",
  },
];

export function Tip() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const handleGaClick = () => {
    gtagEvent("select_content", {
      content_type: "button",
      event_category: "가이드 탭",
      event_label: "멜로그 설치 버튼 클릭",
    });
  };

  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-center justify-between bg-white p-2 xs:p-8 lg:p-4">
      {/* 1. 상단 타이틀 */}
      <div className="text-center flex flex-col items-center justify-center gap-2 xs:gap-3">
        <div className="w-[35px] xs:w-[44px]">
          <Image
            src="/logo/face-love.png"
            alt="Mellog Logo"
            width={44}
            height={44}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-xs xs:text-base lg:text-[14px] font-semibold text-gray-500">
            지도로 만드는 나만의 앨범
          </span>
          <h2 className="text-xl xs:text-3xl lg:text-2xl text-[#313131] font-bold">
            멜로그 즐기는 TIP
          </h2>
        </div>
      </div>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="w-full h-[380] xs:h-[500px] lg:h-[420px] relative custom-swiper"
      >
        {tipData.map((tip) => (
          <SwiperSlide
            key={tip.title}
            className="flex flex-col items-center bg-white justify-center gap-3"
          >
            <div className="w-full flex flex-col items-center bg-white justify-center gap-5 p-3">
              <span className="text-xs xs:text-sm border-2 border-[#F76F8E] font-bold text-[#F76F8E] bg-white px-3 py-[2px] rounded-full">
                {tip.title}
              </span>
              <div className="w-[200px] xs:w-[300px] lg:w-[230px] h-auto ">
                <Image
                  src={tip.img}
                  alt={tip.title}
                  width={250}
                  height={250}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xs xs:text-base font-bold text-[#F76F8E]">
                  {tip.sub1}
                </h3>
                <p className="text-xl xs:text-2xl font-bold text-[#313131]">
                  {tip.sub2}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <a
        href="https://apps.apple.com/kr/app/%EB%A9%9C%EB%A1%9C%EA%B7%B8/id6754064222"
        onClick={handleGaClick}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2 xs:py-3 rounded-xl border-2 border-[#F76F8E] bg-white text-[#F76F8E] text-base xs:text-lg font-bold shadow-md hover:bg-gray-50 transition-colors duration-200 text-center"
      >
        멜로그 바로가기
      </a>
    </div>
  );
}
