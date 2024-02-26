"use client";
import React from "react";
import Image from "next/image";
import { BiLogoGmail } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

import {motion} from 'framer-motion'

const btncss = "mt-5 sm:mt-10 p-3 border hover:scale-x-125 hover:border-none transition-all  w-fit txtOutlineCSS";

const HeroSection = () => {
  // const router = useRouter();

  return (
    // <section className="HeroFontCSS  "> 

    <motion.section 
    initial={{scale:0,opacity:0}} 
    animate={{scale:1, opacity:1}} 
    transition={{delay:0.5,duration:0.8}} 
    className="txtOutlineCSS "
    > 
      <main className="lg:mt-0 sm:mt-6 md:min-h-[86vh] min-h-[90vh] px-2 sm:p-20 sm:py-0 gap-y-6 flexCenter flex-col lg:flex-row ">

        <div className="lg:w-1/2 sm:mb-8 lg:mb-0 sm:w-auto w-screen lg:text-left text-center ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl  mb-3">
          {/* <h1 className="font-black mb-3 text-2xl sm:text-4xl"> */}
            Hello! 👋🏼 I&#39; m <br />{" "}
            <span className=" gradient-text2 txtOutlineCSS1 text-4xl sm:text-6xl ">
              {" "}
              ANURAG LOHAR{" "}
            </span>
          </h1>

          {/* React text TypeAnimation */}
          <TypeAnimation
            className="sm:text-5xl text-2xl font-normal"
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

          <div className="flexCenter lg:flexStart gap-3">
            <Link href="https://drive.google.com/file/d/1OrZKuEtW979tChBNnp_fWkRdJdkIGma7/view" target="blank" className={`${btncss} lg:mr-2`}>Resume → </Link>
            <Link href="/projects" className={`${btncss} lg:ml-2`}>
              Projects
            </Link>
          </div>

          {/* --- contacts logo links → lin git mail --- */}
          <div className="mt-10 text-4xl sm:text-6xl flexCenter gap-x-4 lg:justify-start font-thin ">
          <Link className="hover:scale-125 transition-all" href="https://github.com/Githubak2002" target="blank">
              <i className="ri-github-line" />
            </Link>
            <Link className="hover:scale-125 transition-all" href="https://www.linkedin.com/in/anuraglohar" target="blank">
              <i className="ri-linkedin-fill " />
            </Link>
            <Link className="hover:scale-125 transition-all" href="mailto:anuragofficial2023@gmail.com" target="blank">
              {/* <i className="ri-mail-line  " /> */}
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
    </motion.section>
  );
};

export default HeroSection;
