import React from "react";
import { experience } from "@/constants/constant.js";

const Experience = () => {
  return (
    <section className=" dark:text-gray-800">
      {/* <section className="dark:bg-gray-100 dark:text-gray-800"> */}
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-sm before:mx-auto sm:before:mx-0 before:dark:bg-[#c680ff]">
              <h3
                data-aos={"fade-up"}
                className="txtOutlineCSS text-2xl md:text-3xl lg:text-4xl my-4"
              >
                Experience
              </h3>
              <p
                data-aos={"fade-up"}
                className="text-sm font-bold tracking-wider text-white"
              >
                13+ months Work Experience
                <br />
                1 Freelance Project
                <br />
                15+ Projects
              </p>
            </div>
          </div>

          <main className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              {experience.map((ele, i) => (
                <div
                  data-aos={"fade-up"}
                  key={i}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#c680ff]"
                >
                  <h2 className="text-xl font-semibold tracking-wide text-[#c680ff]">
                    {ele.title}
                  </h2>
                  <time className="text-xs pt-1 tracking-wide uppercase dark:text-slate-200">
                    {ele.subTitle}
                  </time>
                  <p className="mt-3">{ele.details}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Experience;
