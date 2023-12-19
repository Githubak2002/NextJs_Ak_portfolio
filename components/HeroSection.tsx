"use client";
import React from "react";
import Image from "next/image";
import { BiLogoGmail } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const btncss = "mt-5 sm:mt-10 py-3 px-5 border-2 rounded-full w-fit font-bold";

const HeroSection = () => {
  // const router = useRouter();

  return (
    <section className="HeroFontCSS ">
      <main className="lg:mt-0 sm:mt-12 min-h-[80vh] px-2 sm:p-20 sm:py-0 flexCenter flex-col lg:flex-row ">

        <div className="lg:w-1/2 mb-6 sm:mb-8 lg:mb-0 sm:w-auto w-screen lg:text-left text-center ">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3">
          {/* <h1 className="font-black mb-3 text-2xl sm:text-4xl"> */}
            Hello! 👋🏼 I{" "}
            <sup>
              <i className="ri-single-quotes-r mx-[-6px] sm:mx-[-20px]" />
            </sup>{" "}
            m <br />{" "}
            {/* <span className=" text-transparent bg-clip-text bg-gradient-to-r  from-[#5b6bfedc] to-[#925ef2f6]"> */}
            <span className=" gradient-text2 ">
            {/* <span className=" text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-400"> */}
              {" "}
              Anurag Lohar{" "}
            </span>
          </h1>

          {/* React text TypeAnimation */}
          <TypeAnimation
            className="font-bold sm:text-5xl text-xl "
            sequence={[
              "Web Developer",
              1000,
              "Frontend WebD",
              1000,
              "3D Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />

          <div className="flex lg:flex-row flex-col flexStart">
            <Link href="https://drive.google.com/file/d/18dbHCECfPZSGMeMZ7VpLSQt4MWRQwwNV/view?usp=sharing" target="blank" className={`${btncss} lg:mr-2`}>Resume → </Link>
            <Link href="/contact" className={`${btncss} lg:ml-2`}>
              Contact me
            </Link>
          </div>

          {/* --- contacts logo links → lin git mail --- */}
          <div className="mt-10 text-2xl sm:text-6xl flexCenter gap-x-4 lg:justify-start ">
            <a href="https://github.com/Githubak2002" target="blank">
              <i className="ri-github-line font-thin" />
            </a>
            <a href="https://www.linkedin.com/in/anuraglohar" target="blank">
              <i className="ri-linkedin-fill " />
            </a>
            <a href="mailto:anuragofficial2023@gmail.com" target="blank">
              <BiLogoGmail />
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-auto">
        <Image
          src="/imgs/heropng.png"
          // src="/imgs/ak.png"
          alt="error"
          width={520}
          height={430}
          className="md:mt-0 mt-10"
          />
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
