"use client";
import Image from "next/image";

//  AOS animation on scroll
const aosInstance: any = AOS;
import AOS from "aos";
import "aos/dist/aos.css"; // Import the styles
import { useEffect } from "react";

const slikk_css =
  "flexCenter flex-col p-5 justify-center border-white border-[0.5px] rounded-xl min-w-[130px] max-w-[170px] h-24";

export default function SkillCard(props: any) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <main
      data-aos="fade-up"
      className={`hover:bg-[#ffffff2b] hover:cursor-pointer hover:scale-125 transition-all ${slikk_css}`}
    >
      <Image
        src={props.path}
        alt={props.name}
        height={48}
        width={48}
        className="text-white mb-2 px-2 "
      />
      <h2 className="text-white text-center text-wrap">{props.name}</h2>
    </main>
  );
}
