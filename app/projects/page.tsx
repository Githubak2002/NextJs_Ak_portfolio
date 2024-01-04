import React from "react";
import Image from "next/image";
import { projectsArray } from "../../constants/constant.js";
import Link from 'next/link';
import Footer from "@/components/Footer";

import {motion} from 'framer-motion'

import "remixicon/fonts/remixicon.css";

const Projects = () => {
  return (
    // <section className="projectsFontCSS px-[3%] sm:px-[8%] mb-10">
    <section className="projectsFontCSS px-3 sm:px-0">
      
      <h2 className="text-center text-3xl sm:text-6xl my-6 txtOutlineCSS">
        PROJECTS
      </h2>

      <div className="mt-12 sm:mt-20 flexCenter gap-5 sm:gap-10 flex-wrap flex-col sm:flex-row">
      {projectsArray.map((ele, i) => (
        <main key={i} className="border-[1px] border-white rounded-xl overflow-hidden flex flex-col gap-4 w-full sm:max-w-[420px] h-auto ">
          <Link href={ele.liveLink} target="blank" className="flexCenter w-fit overflow-hidden">
            <Image
              src={ele.imgurl}
              alt="error"
              // fill
              height={1220}
              width={1280}
              // className="w-full sm:max-w-[380px] sm:h-[240px] h-auto hover:scale-105 hover:opacity-50 cursor-pointer transition-all"
              className="w-full sm:max-w-[420px] sm:h-[280px] h-auto hover:scale-105 hover:opacity-50 cursor-pointer transition-all"
            />
          </Link>
          <h2 className="font-bold font-sans px-2 sm:px-3 text-2xl sm:text-3xl">
            {ele.name}
          </h2>
          <h3
            className="px-2 sm:px-3 font-thin text-base"
          >
            {ele.content}
          </h3>

          <div className="px-3 pb-4 text-3xl font-thin flexBetween">
            <Link href={ele.liveLink} target="blank">
            <i className="ri-external-link-line" />
            </Link>

            <Link href={ele.repoLink} target="blank">
            <i className="ri-github-line" />
            </Link>
          </div>
        </main>
      ))}
      </div>



    <Footer />
    </section>
  );
};

export default Projects;
