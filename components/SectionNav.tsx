"use client";

const TABS = [
  { name: "가이드", swiperIndex: 0 },
  { name: "테스트", swiperIndex: 1 },
  { name: "이벤트", swiperIndex: 2 },
  { name: "멜로그 존", swiperIndex: 3 },
];

interface SectionNavProps {
  currentSwiperIndex: number;
  onTabClick: (swiperIndex: number) => void;
}

export function SectionNav({
  currentSwiperIndex,
  onTabClick,
}: SectionNavProps) {
  const baseTabClass =
    "flex-1 py-3 px-2 text-center text-m font-bold transition-colors duration-200 focus:outline-none";
  const inactiveTabClass = "text-[#ACACAC] hover:text-black";
  const activeTabClass = "bg-[#FFE4EA] text-[#313131] font-bold";

  return (
    <div className="w-full bg-[#FFE4EA]">
      <div className="flex w-full max-w-[500px] mx-auto items-center justify-around  bg-white">
        {TABS.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabClick(tab.swiperIndex)}
            className={`
              ${baseTabClass}
              ${
                currentSwiperIndex === tab.swiperIndex
                  ? activeTabClass
                  : inactiveTabClass
              }
            `}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}
