"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface HeroProps {
  onSplashComplete: () => void;
}

export function Hero({ onSplashComplete }: HeroProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col bg-white overflow-y-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* 로고 */}
        <motion.div variants={itemVariants}>
          <Image
            src="/logo/logo.png"
            alt="Mellog Logo"
            width={130}
            height={130}
            priority
          />
        </motion.div>

        {/* 태그라인*/}
        <motion.div variants={itemVariants} className="mt-10">
          <span className="text-lg font-semibold text-[#F76F8E]">
            지도로 만드는 나만의 앨범
          </span>
        </motion.div>

        {/* 브랜드명*/}
        <motion.div variants={itemVariants} className="mt-1">
          <h1 className="text-4xl font-extrabold text-[#F76F8E]">mellog</h1>
        </motion.div>
      </div>

      {/* 5. 카피라이트 푸터 */}
      <motion.div
        variants={itemVariants}
        className="w-full text-center pb-10"
        onAnimationComplete={onSplashComplete}
      >
        <p className="text-gray-400 text-sm">
          © 2025 deulsseokz. All rights reserved.
        </p>
      </motion.div>
    </motion.div>
  );
}
