"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

const postImages = [
  { id: 1, src: "/others/1.jpg", alt: "멜로그 게시물" },
  { id: 2, src: "/others/2.jpg", alt: "멜로그 게시물" },
  { id: 3, src: "/others/3.jpg", alt: "멜로그 게시물" },
  { id: 4, src: "/others/4.jpg", alt: "멜로그 게시물" },
  { id: 5, src: "/others/5.jpg", alt: "멜로그 게시물" },
  { id: 6, src: "/others/6.jpg", alt: "멜로그 게시물" },
  { id: 7, src: "/others/7.jpg", alt: "멜로그 게시물" },
  { id: 8, src: "/others/8.jpg", alt: "멜로그 게시물" },
  { id: 9, src: "/others/9.jpg", alt: "멜로그 게시물" },
  { id: 10, src: "/others/10.jpg", alt: "멜로그 게시물" },
];
const badgeImages = [
  { id: 1, src: "/others/badge/1.png", alt: "뱃지1" },
  { id: 2, src: "/others/badge/2.png", alt: "뱃지2" },
  { id: 3, src: "/others/badge/3.png", alt: "뱃지3" },
  { id: 4, src: "/others/badge/4.png", alt: "뱃지4" },
  { id: 5, src: "/others/badge/5.png", alt: "뱃지5" },
  { id: 6, src: "/others/badge/6.png", alt: "뱃지6" },
  { id: 7, src: "/others/badge/7.png", alt: "뱃지7" },
];

const contactLinks = [
  {
    id: 1,
    href: "https://www.instagram.com/mellog.official",
    src: "/others/insta.jpg",
    alt: "Instagram",
  },
  {
    id: 2,
    href: "https://github.com/Deulsseokz",
    src: "/others/git.jpg",
    alt: "GitHub",
  },
  {
    id: 3,
    href: "https://apps.apple.com/kr/app/%EB%A9%9C%EB%A1%9C%EA%B7%B8/id6754064222",
    src: "/others/app.png",
    alt: "App Store",
  },
];

export function Others() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col justify-between bg-white p-4 xs:p-6">
      {/* 뱃지 슬라이드 */}
      <div>
        <div className="mb-3 xs:mb-5">
          <h2 className="text-lg xs:text-xl font-bold text-[#ff89a9] mb-1">
            ✦ 멜로그 히든 뱃지 ✦
          </h2>
          <p className="text-xs xs:text-sm text-gray-500">
            멜로그 오픈을 기념해서, 특별한 히든 뱃지를 공개해요
          </p>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full h-[80px]"
        >
          {badgeImages.map((post) => (
            <SwiperSlide
              key={post.id}
              style={{ width: "80px", height: "80px" }}
            >
              <Image
                src={post.src}
                alt={post.alt}
                width={80}
                height={80}
                objectFit="cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 게시물 슬라이드 */}
      <div>
        <div className="mb-3 xs:mb-5">
          <h2 className="text-lg xs:text-xl font-bold text-gray-800 mb-1">
            지금 다른 커플은?
          </h2>
          <p className="text-xs xs:text-sm text-gray-500">
            멜로그가 선정한 프로 챌린저를 구경해보세요
          </p>
        </div>

        <div className="overflow-hidden w-full h-[339px]">
          <div className="flex animate-scrollFast">
            {postImages.map((post) => (
              <div
                key={post.id}
                className="min-w-[173px] h-[339px] shrink-0 mx-2"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  width={173}
                  height={339}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="hidden xs:block lg:hidden">
        <div className="mb-3 xs:mb-5">
          <h3 className="text-lg xs:text-xl font-bold text-gray-800">
            Contact
          </h3>
          <p className="text-xs xs:text-sm text-gray-500">
            멜로그는 모든 기회에 열려있어요. 언제든지 연락주세요!
          </p>
        </div>

        <div className="flex justify-start items-center gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={link.src} alt={link.alt} width={40} height={40} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
