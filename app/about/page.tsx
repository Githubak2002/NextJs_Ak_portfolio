import Image from "next/image";
import React from "react";
import { education, experience } from "@/constants/constant.js";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <section className="aboutPgFont">
      <h2 className="text-center text-3xl sm:text-6xl my-4 txtOutlineCSS">
        ABOUT ME
      </h2>
      

      {/* ------ROW WISE------ */}
      {/* <div className="flexCenter py-10">
      <div className=" flexCenter w-fit md:w-1/2 mx-auto sm:px-0 px-2">
        <Image src="/imgs/abt3.png" alt="abt_png" height={310} width={360} />
      </div>
      <h2 className="flexCenter w-auto md:w-1/2 text-center px-3 mx-auto max-w-[460px] mb-10 leading-8">I'm passionate about picking up new talents, developing them, and using them to solve the real world problems. I constantly gain the knowledge and abilities that will help me to deal with the problems in the real world. I believe that I have the capability to face the problems and find a workable solution.</h2>
      </div> */}

      <div className="" >
      {/* === IMG === */}
      <div className="mx-auto w-fit  sm:px-0 px-2">
        <Image src="/imgs/abt3.png" alt="abt_png" height={310} width={360} />
      </div>
      <h2 className=" px-3 mx-auto max-w-[690px] mb-10 leading-10 text-xl ms:text-2xl text-justify sm:text-center">I am passionate about picking up new talents, developing them, and using them to solve the real world problems. I constantly gain the knowledge and abilities that will help me to deal with the problems in the real world. I believe that I have the capability to face the problems and find a workable solution.</h2>
      </div>


      {/* === EXPERIENCE === */}
      <h2 className="txtOutlineCSS text-center text-2xl sm:text-5xl my-4">
        EXPERIENCE 
      </h2>

      <main className="p-2 flexCenter flex-col gap-8 text-lg sm:text-xl">
        {experience.map((ele, i) => (
          <div
            key={i}
            className="p-2 w-full max-w-[560px] py-5 border-[1.2px] flexCenter flex-col gap-4"
          >
            <h2 className="text-xl sm:text-2xl text-center font-bold text-[#e7caff]">{ele.title}</h2>
            <h2 className="text-center ">{ele.subTitle}</h2>
            <h2 className="text-center ">{ele.details}</h2>
          </div>
        ))}
      </main>



      {/* === EDUCATION === */}
      <h2 className="txtOutlineCSS text-center text-2xl sm:text-5xl mb-10 mt-20">
      📖 EDUCATION 📖
      </h2>

      <main className="p-2 flexCenter flex-col gap-8 text-lg sm:text-xl">
        {education.map((ele, i) => (
          <div
            key={i}
            className="p-2 w-full max-w-[560px] py-5 border-[1.2px] flexCenter flex-col gap-4"
          >
            <h2 className="text-xl sm:text-2xl text-center font-bold text-[#e7caff]">{ele.heading}</h2>
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
