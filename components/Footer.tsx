import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
// import { FaRegHeart } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 py-5 border-t-[1.2px] flexCenter flex-col gap-y-4">
      <h2 className="flexCenter gap-2 text-base sm:text-xl ">
        Made wiht
        <CiHeart />
        {/* <FaRegHeart /> */}
        using Next_js
        <TbBrandNextjs />
      </h2>
      <h2 className="text-center text-base sm:text-xl ">
        Feel free to contact
      </h2>

      {/* ==== LOGO LINKS ==== */}
      <div className="flexCenter gap-4 text-xl sm:text-3xl ">
        <Link href="https://github.com/Githubak2002" target="blank">
          <i className="ri-github-line font-thin" />
        </Link>
        <Link href="https://www.linkedin.com/in/anuraglohar" target="blank">
          <i className="ri-linkedin-fill " />
        </Link>
        <Link href="mailto:anuragofficial2023@gmail.com" target="blank">
          <BiLogoGmail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
