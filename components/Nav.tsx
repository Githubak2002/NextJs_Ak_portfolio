"use client"; 
import React, { useState } from 'react';
import Link from 'next/link';
// import { navArray } from '../constants/constant.js';
import { contactArray } from '@/constants/constant';

import 'remixicon/fonts/remixicon.css'
import StarsCanvas from './StarBackground';
// import { motion } from 'framer-motion';

const navCss = "gradient-text hover:scale-125 transition-all"; 
const dobbleLineCSS = "w-full h-1 border-white border-y-[0.1px]";
// const navCss = "hover:scale-125 transition-all hover:gradient-text"; 
const Nav = () => {

    const [menu,setMenu] = useState("hidden");
    // const [menu,setMenu] = useState("flex");
  
  return (
    <nav className='flex justify-between items-center sm:px-8 py-[2vh] font-sans '>
      <Link className={`gradient-text  txtOutlineCSS1 sm:p-0 pl-4 md:text-6xl text-4xl mt-2 sm:mt-4 ${navCss}`} href='/'> AK</Link>

      {/* ==== nav for laptop and tablet size screen ==== */}
      <main className='sm:flex hidden font-black txtOutlineCSS'>
      {
        <div className='flex gap-x-7 sm:text-xl md:text-2xl font-bold px-2'>
            <Link className={navCss} href="/"> HOME </Link>
            <Link className={navCss} href="/about"> ABOUT </Link>
            <Link className={navCss} href="/projects"> PROJECTS </Link>
            {/* <Link className={navCss} href="/contact"> CONTACTS </Link> */}
        </div>
       }
      </main>


      {/* ==== nav for mobile size screen ==== */}
      <i onClick={() => setMenu("flex")} className="sm:hidden pr-4 text-xl ri-menu-2-fill" />
      <main 
      // className={`z-50 fixed top-0 sm:hidden flex flex-col h-screen ${menu} items-center pt-[26vh] justify-flex-start bg-gradient-to-r from-[#4f4f4f] to-[#000000] w-full font-bold text-xl`}
      className={`z-50 fixed top-0 sm:hidden flex flex-col h-screen ${menu} items-center pt-[26vh] justify-flex-start bg-gradient-to-r from-[#373737] to-[#000000] w-full font-bold text-xl txtOutlineCSS`}
      // className={`z-50 fixed top-0 sm:hidden flex flex-col h-screen ${menu} items-center pt-[26vh] justify-flex-start w-full font-bold text-xl`}
      >
        <StarsCanvas />

        <div className='py-7 flex flex-col items-start gap-y-6'>
            <i onClick={() => setMenu("hidden")} className=" hover:cursor-pointer  absolute top-[3%] right-[4%] text-3xl ri-close-line" />
            <Link className={navCss} href="/" onClick={() => setMenu("hidden")}> Home → </Link>
            <Link className={navCss} href="/about" onClick={() => setMenu("hidden")}> About → </Link>
            <Link className={navCss} href="/projects" onClick={() => setMenu("hidden")}> Projects → </Link>
            {/* <Link className={navCss} href="/contact" onClick={() => setMenu("hidden")}> Contact → </Link> */}
        </div>    

        <div className='absolute bottom-24 right-0 flex-col w-[72%] flex gap-y-3'>
        {
          contactArray.map((ele,i) => (
            <div key={i} className='flexCenter w-full  '>  
              <div className=
              {dobbleLineCSS}/>
              <Link href={ele.link} target='blank' className='font-sans px-2 text-sm w-fit font-thin flex'>{ele.social}</Link>
              <div className={dobbleLineCSS}/>
            </div> 
          ))
        }
        </div>
        {/* <div className='flexCenter absolute bottom-24 w-[82%] right-0'>  
            <div className='w-full h-1 border-white border-y-[0.1px]'/>
            <h2 className='font-sans px-2 text-sm w-fit font-thin '>anuragofficial2023@gmail.com </h2>
            <div className='w-full h-1 border-white border-y-[0.1px]'/>
        </div>  */}

            
      </main>

    </nav>
  )
}

export default Nav