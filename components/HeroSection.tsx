"use client";
import React from "react";
import Image from "next/image";
import { BiLogoGmail } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const btncss = "mt-5 sm:mt-10 p-2 font-sans border-2 w-fit font-bold";

const HeroSection = () => {
  // const router = useRouter();

  return (
    // <section className="txtOutlineCSS   ">
    <section className="HeroFontCSS   "> 
      <main className="lg:mt-0 sm:mt-12 min-h-[80vh] px-2 sm:p-20 sm:py-0 flexCenter flex-col lg:flex-row ">

        <div className="lg:w-1/2 mb-6 sm:mb-8 lg:mb-0 sm:w-auto w-screen lg:text-left text-center ">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3">
          {/* <h1 className="font-black mb-3 text-2xl sm:text-4xl"> */}
            Hello! 👋🏼 I{" "}
            <sup>
              <i className="ri-single-quotes-r mx-[-6px] sm:mx-[-20px]" />
            </sup>{" "}
            m <br />{" "}
            <span className=" gradient-text2 txtOutlineCSS1 text-4xl sm:text-6xl ">
              {" "}
              Anurag Lohar{" "}
            </span>
          </h1>

          {/* React text TypeAnimation */}
          <TypeAnimation
            className="font-bold sm:text-5xl text-2xl"
            sequence={[
              "Frontend WebD",
              1000,
              "Web Designer",
              1000,
              "Full Stack WebD",
              1000,
              "3D Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />

          {/* <div className="flex lg:flex-row flex-col flexStart">
            <Link href="https://drive.google.com/file/d/18dbHCECfPZSGMeMZ7VpLSQt4MWRQwwNV/view?usp=sharing" target="blank" className={`${btncss} lg:mr-2`}>Resume → </Link>
            <Link href="/contact" className={`${btncss} lg:ml-2`}>
              Contact me
            </Link>
          </div> */}

          <div className="flexCenter lg:flexStart gap-3">
            <Link href="https://drive.google.com/file/d/18dbHCECfPZSGMeMZ7VpLSQt4MWRQwwNV/view?usp=sharing" target="blank" className={`${btncss} lg:mr-2`}>Resume → </Link>
            <Link href="/contact" className={`${btncss} lg:ml-2`}>
              Contact me
            </Link>
          </div>

          {/* --- contacts logo links → lin git mail --- */}
          <div className="mt-10 text-4xl sm:text-6xl flexCenter gap-x-4 lg:justify-start ">
          <Link className="hover:scale-125 transition-all" href="https://github.com/Githubak2002" target="blank">
              <i className="ri-github-line font-thin" />
            </Link>
            <Link className="hover:scale-125 transition-all" href="https://www.linkedin.com/in/anuraglohar" target="blank">
              <i className="ri-linkedin-fill " />
            </Link>
            <Link className="hover:scale-125 transition-all" href="mailto:anuragofficial2023@gmail.com" target="blank">
              <BiLogoGmail />
            </Link>
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
