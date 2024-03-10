"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { education, experience } from "@/constants/constant.js";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

//  AOS animation on scroll
const aosInstance: any = AOS;
import AOS from "aos";
import "aos/dist/aos.css"; // Import the styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="aboutPgFont">
      {/* <motion.div 
      initial={{ x:2000, opacity:1, zIndex:50}}
      animate={{x:1, opacity:0, zIndex:-50}}
      transition={{duration:2}}
      className="absolute top-0 h-screen w-screen bg-white"
      />
      <motion.div 
      initial={{ x:2000, opacity:1, zIndex:50}}
      animate={{x:1, opacity:0, zIndex:-50}}
      transition={{duration:2, delay:0.5}}
      className="absolute top-0 h-screen w-screen bg-white"
      />
      <motion.div 
      initial={{ x:2000, opacity:1, zIndex:50}}
      animate={{x:1, opacity:0, zIndex:-50}}
      transition={{duration:2, delay:1}}
      className="absolute top-0 h-screen w-screen bg-white"
      /> */}

      <h2
        data-aos="zoom-in"
        className="text-center text-3xl sm:text-6xl my-6 txtOutlineCSS"
      >
        ABOUT ME
      </h2>

      {/* ------ROW WISE------ */}
      {/* <div className="flexCenter py-10">
      <div className=" flexCenter w-fit md:w-1/2 mx-auto sm:px-0 px-2">
        <Image src="/imgs/abt3.png" alt="abt_png" height={310} width={360} />
      </div>
      <h2 className="flexCenter w-auto md:w-1/2 text-center px-3 mx-auto max-w-[460px] mb-10 leading-8">I'm passionate about picking up new talents, developing them, and using them to solve the real world problems. I constantly gain the knowledge and abilities that will help me to deal with the problems in the real world. I believe that I have the capability to face the problems and find a workable solution.</h2>
      </div> */}

      <div data-aos="zoom-in">
        {/* === IMG === */}
        <div className="mx-auto w-fit h-auto py-10 sm:px-0 px-2">
          <Image
            src="/imgs/fineabt.png"
            alt="abt_png"
            height={310}
            width={360}
          />
        </div>
        <h2 className=" px-3 mx-auto max-w-[720px] mb-10 md:leading-9 leading-6 text-md md:text-xl text-justify sm:text-center">
          I am passionate about picking up new talents, developing them, and
          using them to solve the real world problems. I constantly gain the
          knowledge and abilities that will help me to deal with the problems in
          the real world. I believe that I have the capability to face the
          problems and find a workable solution.
        </h2>
      </div>

      {/* =================== SKILLS =================== */}
      <Skills />

      {/* =================== EXPERIENCE =================== */}
      <h2
        data-aos="zoom-in"
        className="txtOutlineCSS text-center text-2xl sm:text-5xl my-4"
      >
        EXPERIENCE
      </h2>

      <main className="p-2 flexCenter flex-col gap-8 text-md sm:text-xl ">
        {experience.map((ele, i) => (
          <div
            data-aos={i % 2 === 0 ? "zoom-in" : "zoom-in"}
            key={i}
            className="custom-card p-4 w-full max-w-[860px] py-5 border-[1px] rounded-tr-3xl rounded-lg flexCenter flex-col gap-4"
          >
            <h2 className="text-xl sm:text-2xl text-center font-bold text-[#e7caff]">
              {ele.title}
            </h2>
            <h2 className="text-center ">{ele.subTitle}</h2>
            <p className="text-center leading-8 sm:leading-10">{ele.details}</p>
          </div>
        ))}
      </main>

      {/* === EDUCATION === */}
      <h2
        data-aos="zoom-in"
        className="txtOutlineCSS text-center text-2xl sm:text-5xl mb-10 mt-20"
      >
        EDUCATION
      </h2>

      <main className="p-2 flexCenter flex-col gap-8 text-md sm:text-xl">
        {education.map((ele, i) => (
          <div
            data-aos={i % 2 === 0 ? "zoom-in" : "zoom-in"}
            key={i}
            className="p-2 w-full max-w-[860px] px-3 py-5 rounded-tr-3xl rounded-lg  border-[1px] flexCenter flex-col gap-4"
          >
            <h2 className="text-xl sm:text-2xl text-center font-bold text-[#e7caff]">
              {ele.heading}
            </h2>
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
