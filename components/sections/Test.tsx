"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { event as gtagEvent } from "@/lib/ga";

const quizData = [
  {
    q: 1,
    icon: "/test/face-lol.png",
    tagline: "Q1. 랜드마크 경쟁 챌린지",
    title: "가장 먼저 초대할 사람은?",
    options: ["My Friends(찐친.)", "My LoVE..♡"],
  },
  {
    q: 2,
    icon: "/test/face-love.png",
    tagline: "Q2. 앨범 기록하기",
    title: "나에게... '기록'이란?",
    options: ["둘만의... 감성...☆", "'인싸'는 나ㅋ. 여럿이서"],
  },
  {
    q: 3,
    icon: "/test/face-surprised.png",
    tagline: "Q3. 사진 꾸미기",
    title: "더 참을 수 없는 욕심은?",
    options: ["✦ 희귀템 뱃지 FLEX ✦", "알록달록 프레임..☆"],
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

// 각 아이템 (타이틀, 카드 등)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200 },
  },
};

export function Test() {
  const [answers, setAnswers] = useState<{ [key: number]: string | null }>({});

  const handleAnswerClick = (
    questionNumber: number,
    q: string,
    answer: string
  ) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: answer,
    }));

    gtagEvent("select_content", {
      content_type: "button",
      event_category: "A/B Test",
      event_label: `Q${questionNumber}. ${q} - ${answer}`,
    });
  };

  // 버튼 스타일
  const baseButtonClass =
    "w-full py-2 xs:py-3 rounded-xl border-2 font-bold transition-all duration-200 text-xs xs:text-sm";
  const activeClass = `${baseButtonClass} border-[#F76F8E] text-[#F76F8E] bg-[#FFF5F7]`;
  const inactiveClass = `${baseButtonClass} border-gray-300 text-gray-500 bg-white`;

  return (
    <div className="h-full flex flex-col justify-end bg-[#FFE4EA] overflow-hidden">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full bg-[#FF89A9] pt-12 lg:pt-8 px-4 rounded-t-4xl flex flex-col gap-5"
      >
        {/* 1. 상단 타이틀 */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          {/* 1-1. 상단 타이틀 */}
          <div className="flex justify-center w-[250px] xs:w-[360px] lg:w-[300px]">
            <Image
              src="/test/title.svg"
              alt="멜로그 테스트"
              width={360}
              height={60}
            />
          </div>

          {/* 1-2. A/B 테스트 안내 문구 */}
          <div className="text-center text-[11px] xs:text-xs text-white opacity-80 mt-3">
            <p>
              클릭하신 답변은 더 좋은 멜로그를 만들기 위한 A/B 테스트 자료로
              쓰여요.
            </p>
          </div>
        </motion.div>

        {/* 2. 카드 + 멜로그 로고 */}
        <motion.div
          variants={itemVariants}
          className="relative w-full mt-7 mx-auto"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              src="/test/mellog.svg"
              alt="mellog logo"
              width={268}
              height={57}
            />
          </div>

          {/* 3. 메인 테스트 카드 */}
          <div className="w-full min-h-[55vh] xs:min-h-[70vh] bg-white rounded-t-[20px] border-[5px] border-[#FFE9EE] py-7 xs:py-10 px-5 flex flex-col gap-9">
            {quizData.map((item, index) => (
              <div key={item.q}>
                <div className="flex flex-col gap-3 xs:gap-5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs xs:text-sm font-bold text-[#F76F8E]">
                      {item.tagline}
                    </span>
                    <h3 className="text-base xs:text-xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() =>
                        handleAnswerClick(item.q, item.tagline, item.options[0])
                      }
                      className={
                        answers[item.q] === item.options[0]
                          ? activeClass
                          : inactiveClass
                      }
                    >
                      {item.options[0]}
                    </button>
                    <button
                      onClick={() =>
                        handleAnswerClick(item.q, item.tagline, item.options[1])
                      }
                      className={
                        answers[item.q] === item.options[1]
                          ? activeClass
                          : inactiveClass
                      }
                    >
                      {item.options[1]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
