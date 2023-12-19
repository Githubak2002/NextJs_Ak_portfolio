import Image from 'next/image'
import React from 'react'
import { Education } from '@/constants/constant.js'

const About = () => {
  return (
    <section className='aboutPgFont'>
       <h2 className='text-center font-black text-6xl my-4 txtOutlineCSS   '>ABOUT ME</h2>

      {/* === IMG === */}
       <div className='mx-auto w-fit '>
        <Image
        src="/imgs/abt2.png"
        alt="abt_png" 
        height={310}
        width={360}
        />
       </div>

      {/* === EDUCATION === */}

      <h2 className='txtOutlineCSS text-center font-semibold text-3xl my-3'>📖 EDUCATION 📖</h2>

      <main className='p-2 flexCenter flex-col gap-8'>

        {
          Education.map((ele,i) => (
            <div key={i} className='p-2 w-full max-w-[420px] py-5 border-[1.2px] flexCenter flex-col gap-4'>
              <h2 className='font-bold text-xl  text-[#e7caff]'>{ele.heading}</h2>
              <h2 className='text-center '>{ele.detail1}</h2>
              <h2 className='text-center '>{ele.detail2}</h2>
            </div>
          ))
        }
      </main>


    </section>
  )
}

export default About