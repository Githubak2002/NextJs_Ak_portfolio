import React from "react";
import { contactArray2 } from "@/constants/constant";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const Contack = () => {
  return (
    <section className="aboutPgFont">
      <h2 className="text-center text-3xl sm:text-6xl my-4 txtOutlineCSS mb-10">
        CONTACT
      </h2>

      <h3 className=" text-justify sm:text-center leading-8 sm:leading-10  text-lg sm:text-2xl px-3 sm:px-0 py-6 max-w-[780px] mx-auto ">
      &#34;Hi!👋 Whether you have a project or just want to chat, your message matters! Let&#39;s talk,  brainstorm, or grab a virtual coffee! 🚀 Feel free
        to reach out—I'd love to chat! 📩 Can&#39;t wait to hear from you and make something great together! 😊✨ I'm really excited to chat with you!&#34;
      </h3>

      {/* <h2 className="text-center">Get instant reply!</h2> */}

      <h2 className="txtOutlineCSS text-center text-2xl sm:text-3xl mt-10 mb-4">SOCIAL</h2>
      <main className="flexCenter max-w-[656px] mx-auto gap-x-10 gap-y-3 flex-wrap flex-col sm:flex-row  px-4 sm:px-0">
        {contactArray2.map((ele, i) => (
          <Link key={i}
          className="my-4 flexStart gap-3 text-lg sm:text-2xl"
          href={ele.link}
        >
          <Image
            src={ele.imgurl}
            alt="LinkedIn"
            height={50}
            width={50}
            className="hover:scale-125 transition-all hover:rotate-12 max-w-[30px] h-auto"
          />
          <h1>{ele.social}</h1>
        </Link>
        ))}
      </main>


      <Link
        className="my-4 flexCenter gap-3 text-lg sm:text-2x"
        href="https://www.linkedin.com/in/anuraglohar"
      >
        <Image
          src="/imgs/li.webp"
          alt="LinkedIn"
          height={50}
          width={50}
          className="hover:scale-125 transition-all hover:rotate-12"
        />
        <h1 className="text-blue-400 font-black">Let's Connect →</h1>
      </Link>

      {/* <Link
        className="my-4 flexCenter gap-3 text-lg sm:text-2xl text-blue-500"
        href="https://www.linkedin.com/in/anuraglohar"
      >
        <Image
          src="/imgs/github.png"
          alt="github"
          height={50}
          width={50}
          className="hover:scale-125 transition-all hover:rotate-12 shadow-2xl  "
        />
        <h1>Let's Connect →</h1>
      </Link> */}

      <Footer />
    </section>
  );
};

export default Contack;
