import React from "react";
import Image from "next/image";
import { projectsArray, projectsArray2 } from "../../constants/constant.js";
import Link from 'next/link';
import Footer from "@/components/Footer";
import { blender3D } from "../../constants/constant.js";
import Card3D from "@/components/Card.jsx";

// import {motion} from 'framer-motion'
// import Card from "@/components/Card.tsx";
import "remixicon/fonts/remixicon.css";

const projInfo = "All my projects, including their live links, are first published on my GitHub profile. Feel free to check them out for live demos and access to the code.";

const Projects = () => {
  return (
    // <section className="projectsFontCSS px-[3%] sm:px-[8%] mb-10">
    <section className=" font3Css sm:projectsFontCSS  ">
      
      <h2 className="text-center text-3xl sm:text-6xl my-6 txtOutlineCSS">
        PROJECTS
      </h2>

      {/* ============ MAIN PROJECTS ============ */}
      <main className="mt-12 sm:mt-20 flexCenter gap-5 sm:gap-10 flex-wrap flex-col sm:flex-row px-3 sm:px-0">
      {projectsArray.map((ele, i) => (
        <div key={i} className="border-[1px] border-white rounded-xl overflow-hidden flex flex-col gap-4 w-full sm:max-w-[420px] h-auto ">
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
            <i className="ri-external-link-line hover:text-blue-500" />
            </Link>

            <Link href={ele.repoLink} target="blank">
            <i className="ri-github-line hover:text-blue-500" />
            </Link>
          </div>
        </div>
      ))}
      </main>


      {/* ============ BLENDER 3D ============ */}
      <main className="my-14 py-10 border-y-[1px] flexBetween flex-col sm:flex-row px-0 sm:px-4 w-full">

        {/* ==== 3D card ==== */}
        <Link href={blender3D.link} target="blank" className="mx-auto w-fit">
          <Card3D title = {blender3D.title} />
        </Link>

        <div className="px-3 sm:px-6 mt-8 sm:mt-0 w-auto sm:w-[65%] text-center sm:text-left">
          <h2 className="font-bold text-[#fa9750ef] text-2xl sm:text-4xl"> <i className="ri-blender-fill pr-3 text-[#fa9750ef] " /> {blender3D.title}</h2>
          <h2 className=" text-xl py-5 sm:py-4">{blender3D.subTitle}</h2>
          <p className=" leading-8 sm:leading-7 text-sm sm:text-base mb-4">{blender3D.detail}</p>
          <Link href={blender3D.link} target="blank" className="hover:underline hover:font-black text-blue-500">All my 3D Render <i className="ri-external-link-line text-blue-500" /></Link>

        </div>

      </main>


      {/* ============ Few small Projects ============ */}

      <h2 className="text-center text-xl sm:text-3xl my-6 txtOutlineCSS">Minor <span className="px-1" />Porjects</h2>
      <main className="mt-10 sm:mt-16 flexCenter gap-5 sm:gap-10 flex-wrap flex-col sm:flex-row px-3 sm:px-0">
      {projectsArray2.map((ele, i) => (
        <div key={i} className="border-[1px] border-white overflow-hidden flex flex-col gap-4 w-full sm:max-w-[280px] h-auto rounded-sm ">

          <Link href={ele.liveLink} target="blank" className="flexCenter w-fit overflow-hidden">
            <Image
              src={ele.imgurl}
              alt="error"
              height={1220}
              width={1280}
              className="w-full sm:max-w-[280px] sm:h-[180px] h-auto hover:scale-105 hover:opacity-50 cursor-pointer transition-all"
            />
          </Link>

          <h2 className="font-bold text-xl font-sans px-2 sm:px-3">
            {ele.name}
          </h2>
          <h3 className="px-2 sm:px-3 font-thin text-base"> {ele.content} </h3>

          <div className="px-3 pb-4 text-3xl font-thin flexBetween">
            <Link href={ele.liveLink} target="blank"> <i className="ri-external-link-line hover:text-blue-500" /> </Link>
            <Link href={ele.repoLink} target="blank"> <i className="ri-github-line hover:text-blue-500" /> </Link>
          </div>
        </div>
      ))}
      </main>
      <h2 className="text-center max-w-[580px] mx-auto mt-5 py-6 px-4 leading-8 sm:leading-7 ">{projInfo}</h2>
      <Link href="https://github.com/Githubak2002" target="blank" className="border-2 w-fit mx-auto rounded-xl p-2 flexCenter transition-all hover:scale-110 hover:translate-y-[-5px] "> GITHUB <span className="ri-github-line font-thin  pl-2" />
      </Link>

    <Footer />
    </section>
  );
};

export default Projects;
