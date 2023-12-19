import Image from "next/image";
import React from "react";
import { education, experience } from "@/constants/constant.js";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <section className="aboutPgFont">
      <h2 className="text-center font-black text-6xl my-4 txtOutlineCSS   ">
        ABOUT ME
      </h2>

      {/* === IMG === */}
      <div className="mx-auto w-fit ">
        <Image src="/imgs/abt2.png" alt="abt_png" height={310} width={360} />
      </div>

      {/* === EXPERIENCE === */}
      <h2 className="txtOutlineCSS text-center font-semibold text-3xl my-3">
        🧑🏼‍💻 EXPERIENCE 🧑🏼‍💻
      </h2>

      <main className="p-2 flexCenter flex-col gap-8">
        {experience.map((ele, i) => (
          <div
            key={i}
            className="p-2 w-full max-w-[420px] py-5 border-[1.2px] flexCenter flex-col gap-4"
          >
            <h2 className="text-center font-bold text-xl  text-[#e7caff]">{ele.title}</h2>
            <h2 className="text-center ">{ele.subTitle}</h2>
            <h2 className="text-center ">{ele.details}</h2>
          </div>
        ))}
      </main>

      {/* === EDUCATION === */}
      <h2 className="txtOutlineCSS text-center font-semibold text-3xl mt-20 mb-3 ">
        📖 EDUCATION 📖
      </h2>

      <main className="p-2 flexCenter flex-col-reverse gap-8">
        {education.map((ele, i) => (
          <div
            key={i}
            className="p-2 w-full max-w-[420px] py-5 border-[1.2px] flexCenter flex-col gap-4"
          >
            <h2 className="font-bold text-xl  text-[#e7caff]">{ele.heading}</h2>
            <h2 className="text-center ">{ele.detail1}</h2>
            <h2 className="text-center ">{ele.detail2}</h2>
          </div>
        ))}
      </main>

      <Footer />
    </section>
  );
};

export default About;
