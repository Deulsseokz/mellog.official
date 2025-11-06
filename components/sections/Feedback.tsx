"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { event as gtagEvent } from "@/lib/ga";

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, delay: 0.5 },
  },
};

export function Feedback() {
  const feedbackLink = "https://forms.gle/gSjx1Gy42D3nRHE39";

  const handleGaClick = () => {
    gtagEvent("select_content", {
      content_type: "button",
      event_category: "이벤트 탭",
      event_label: "후기 작성 버튼 클릭",
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-full relative bg-[#FFE4EA]"
    >
      <Image
        src="/feedback/2.jpg"
        alt="멜로그 피드백 섹션 배경"
        layout="fill"
        objectFit="contain"
        priority
      />

      <a
        href={feedbackLink}
        onClick={handleGaClick}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[85%] max-w-[500px]"
      >
        <motion.button
          variants={buttonVariants}
          className="w-full py-2 xs:py-3 rounded-xl border-2 border-[#F76F8E] bg-white text-[#F76F8E] text-base xs:text-lg font-bold shadow-md hover:bg-gray-50 transition-colors duration-200 text-center"
        >
          멜로그 후기쓰고 1000P 받기
        </motion.button>
      </a>
    </motion.div>
  );
}
