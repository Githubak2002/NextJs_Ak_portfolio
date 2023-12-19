import React from "react";
import Image from "next/image";
import { projectsArray } from "../../Constants/constant";
import Link from 'next/link';

import "remixicon/fonts/remixicon.css";

const Projects = () => {
  return (
    <section className="px-[3%] sm:px-[8%]">
      <h2 className="my-4 sm:my-6 text-3xl sm:text-6xl text-center font-bold ">
        PROJECTS
      </h2>

      <div className="mt-12 sm:mt-20 flexCenter gap-5 sm:gap-10 flex-wrap flex-col sm:flex-row">
      {projectsArray.map((ele, i) => (
        <main key={i} className="border-2 border-white rounded-xl overflow-hidden flex flex-col gap-4 w-full sm:max-w-[420px] h-auto ">
          <div className="flexCenter w-fit">
            <Image
              src={ele.imgurl}
              alt="error"
              // fill
              height={1220}
              width={1280}
              className="w-full sm:max-w-[420px] sm:h-[280px] h-auto"
            />
          </div>
          <h2 className=" font-mono font-bold px-2 sm:px-3 text-2xl sm:text-3xl">
            {ele.name}
          </h2>
          <h3
            style={{ fontFamily: "Marcellus" }}
            className="px-2 sm:px-3 font-mono font-thin"
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

    </section>
  );
};

export default Projects;
