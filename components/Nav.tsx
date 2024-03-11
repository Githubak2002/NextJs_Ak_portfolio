"use client";
import React, { useState } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import StarsCanvas from "./StarBackground";
// import { motion } from 'framer-motion';

const navCss = "gradient-text hover:scale-125 transition-all px-2";
const dobbleLineCSS = "w-full h-1 border-white border-y-[0.1px]";
// const navCss = "hover:scale-125 transition-all hover:gradient-text";
const Nav = () => {
  const [menu, setMenu] = useState("hidden");
  // const [menu,setMenu] = useState("flex");

  return (
    <nav className="flex justify-between items-center sm:px-8 font-sans py-2 sm:py-4 ">
      <Link
        className={`gradient-text  txtOutlineCSS1 sm:p-0 pl-4 md:text-5xl text-3xl ${navCss}`}
        href="/"
      >
        {" "}
        AK
      </Link>

      {/* ==== nav for laptop and tablet size screen ==== */}
      <main className="sm:flex hidden font-black txtOutlineCSS">
        {
          <div className="flex gap-x-2 sm:text-xl md:text-xl font-bold px-2">
            <Link className={navCss} href="/">
              {" "}
              HOME{" "}
            </Link>
            <Link className={navCss} href="/about">
              {" "}
              ABOUT{" "}
            </Link>
            <Link className={navCss} href="/projects">
              {" "}
              PROJECTS{" "}
            </Link>
            <Link className={navCss} href="/contact">
              {" "}
              CONTACT{" "}
            </Link>
            {/* <Link className={navCss} href="/contact"> CONTACTS </Link> */}
          </div>
        }
      </main>

      {/* ==== nav for mobile size screen ==== */}
      <i
        onClick={() => setMenu("flex")}
        className="sm:hidden pr-4 text-xl ri-menu-2-fill"
      />
      <main
        // className={`z-50 fixed top-0 sm:hidden flex flex-col h-screen ${menu} items-center pt-[26vh] justify-flex-start bg-gradient-to-r from-[#4f4f4f] to-[#000000] w-full font-bold text-xl`}
        className={`z-50 fixed top-0 sm:hidden flex flex-col h-screen ${menu} items-center pt-[26vh] justify-flex-start bg-gradient-to-r from-[#373737] to-[#000000] w-full font-bold text-xl txtOutlineCSS`}
        // className={`z-50 fixed top-0 sm:hidden flex flex-col h-screen ${menu} items-center pt-[26vh] justify-flex-start w-full font-bold text-xl`}
      >
        <StarsCanvas />

        <div className="py-7 flex flex-col items-start gap-y-6">
          <i
            onClick={() => setMenu("hidden")}
            className=" hover:cursor-pointer  absolute top-[1%] right-[4%] text-3xl ri-close-line"
          />
          <Link className={navCss} href="/" onClick={() => setMenu("hidden")}>
            {" "}
            Home →{" "}
          </Link>
          <Link
            className={navCss}
            href="/about"
            onClick={() => setMenu("hidden")}
          >
            {" "}
            About →{" "}
          </Link>
          <Link
            className={navCss}
            href="/projects"
            onClick={() => setMenu("hidden")}
          >
            {" "}
            Projects →{" "}
          </Link>
          <Link
            className={navCss}
            href="/contact"
            onClick={() => setMenu("hidden")}
          >
            {" "}
            Contact →{" "}
          </Link>
          {/* <Link className={navCss} href="/contact" onClick={() => setMenu("hidden")}> Contact → </Link> */}
        </div>

        <div className="flexCenter absolute bottom-24 w-[82%] right-0">
          <div className="w-full h-1 border-white border-y-[0.1px]" />
          <h2 className="font-sans px-2 text-sm w-fit font-thin ">
            anuragofficial2023@gmail.com{" "}
          </h2>
          <div className="w-full h-1 border-white border-y-[0.1px]" />
        </div>
      </main>
    </nav>
  );
};

export default Nav;

/* */
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import "remixicon/fonts/remixicon.css";
// import StarsCanvas from "./StarBackground";

// const Nav = () => {
//   const [menu, setMenu] = useState("hidden");

//   return (
//     <nav className="fixed top-0 w-full z-50 font-sans py-2 sm:py-4">
//       <div className="flex justify-between items-center sm:px-8">
//         <Link
//           className="gradient-text txtOutlineCSS1 pl-4 md:text-6xl text-3xl hover:scale-125 transition-all"
//           href="/"
//         >
//           {" "}
//           AK
//         </Link>

//         {/* Desktop Navigation */}
//         <main className="hidden sm:flex font-black txtOutlineCSS">
//           <div className="flex gap-x-2 sm:text-xl md:text-xl font-bold px-2">
//             <Link
//               className="gradient-text hover:scale-125 transition-all px-2"
//               href="/"
//             >
//               {" "}
//               HOME{" "}
//             </Link>
//             <Link
//               className="gradient-text hover:scale-125 transition-all px-2"
//               href="/about"
//             >
//               {" "}
//               ABOUT{" "}
//             </Link>
//             <Link
//               className="gradient-text hover:scale-125 transition-all px-2"
//               href="/projects"
//             >
//               {" "}
//               PROJECTS{" "}
//             </Link>
//             <Link
//               className="gradient-text hover:scale-125 transition-all px-2"
//               href="/contact"
//             >
//               {" "}
//               CONTACTS{" "}
//             </Link>
//           </div>
//         </main>

//         {/* Mobile Navigation */}
//         <i
//           onClick={() => setMenu("flex")}
//           className="sm:hidden pr-4 text-xl ri-menu-2-fill"
//         />
//       </div>

//       {/* Mobile Menu */}
//       <main
//         className={`sm:hidden flex flex-col items-center h-screen bg-gradient-to-r from-[#373737] to-[#000000] w-full font-bold text-xl txtOutlineCSS ${menu}`}
//       >
//         <StarsCanvas />
//         <div className="py-7 flex flex-col items-start gap-y-6">
//           <i
//             onClick={() => setMenu("hidden")}
//             className="hover:cursor-pointer absolute top-[1%] right-[4%] text-3xl ri-close-line"
//           />
//           <Link
//             className="gradient-text hover:scale-125 transition-all"
//             href="/"
//             onClick={() => setMenu("hidden")}
//           >
//             {" "}
//             Home →{" "}
//           </Link>
//           <Link
//             className="gradient-text hover:scale-125 transition-all"
//             href="/about"
//             onClick={() => setMenu("hidden")}
//           >
//             {" "}
//             About →{" "}
//           </Link>
//           <Link
//             className="gradient-text hover:scale-125 transition-all"
//             href="/projects"
//             onClick={() => setMenu("hidden")}
//           >
//             {" "}
//             Projects →{" "}
//           </Link>
//           <Link
//             className="gradient-text hover:scale-125 transition-all"
//             href="/contact"
//             onClick={() => setMenu("hidden")}
//           >
//             {" "}
//             Contacts →{" "}
//           </Link>
//         </div>

//         {/* Contact Info */}
//         <div className="flexCenter absolute bottom-24 w-[82%] right-0">
//           <div className="w-full h-1 border-white border-y-[0.1px]" />
//           <h2 className="font-sans px-2 text-sm w-fit font-thin ">
//             anuragofficial2023@gmail.com{" "}
//           </h2>
//           <div className="w-full h-1 border-white border-y-[0.1px]" />
//         </div>
//       </main>
//     </nav>
//   );
// };

// export default Nav;
