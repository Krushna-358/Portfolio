"use client";
import Image from "next/image";
import React from "react";
import luffy from "@/images/home/luffyt.webp";
import imagebg from "@/images/home/imagebg.png";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <div id="Home" className="pb-14 bg-gradient-to-b from-teal-100">
      <div className="grid relative grid-cols-1 md:grid-cols-6 gap-4 place-items-center p-4">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-3 pt-20 text-center md:text-left"
        >
          <span className="before:block before:absolute p-2 before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white font-bold p-3">Welcome</span>
          </span>
          <p className="mt-10 text-[30px] font-bold font-[Poppins]">Hi, I am Krushna Babhulkar </p>
          <h1 className="text-4xl mb-0 pl-0 pt-5">A passionate developer crafting </h1>

          <h1 className="text-4xl mb-0 pl-0 pb-9 pt-4">seamless digital experiences.</h1>
          
            
          

          <button className="relative px-5 py-3 overflow-hidden font-medium  bg-cyan-200 mt-5 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              <Link href={"#Contact"}>Contact Me</Link>
            </span>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 mt-10 relative w-full flex justify-center"
        >
          <Image
            src={imagebg}
            alt="Background Image"
            className="relative w-full h-auto max-w-md"
          />
          <Image
            src={luffy}
            alt="Luffy"
            className="absolute w-40  md:w-min bottom-16 md:bottom-[5rem] md:right-[7rem] rounded-2xl shadow-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 0.5, bounce: 0.7 },
          }}
          viewport={{ once: true }}
          className=" hidden md:ml-24 col-span-1 md:mt-0 h-auto md:flex flex-col gap-3  items-center
       p-4 shadow bg-white rounded-2xl"
        >
          <span className="text-xl ngr">Follow on - </span>
          <Link
            target="_blank"
            href={"https://www.instagram.com/krushna_babhulkar/"}
          >
            <FaSquareInstagram className="text-2xl rounded-md cursor-pointer" />
          </Link>
          <Link
            href={
              "https://x.com/i/flow/login?redirect_after_login=%2FKrishna863435"
            }
            target="_blank"
          >
            <FaSquareXTwitter className="text-2xl cursor-pointer  rounded-md" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/krushna-babhulkar-584362338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
            target="_blank"
          >
            <FaLinkedin className="text-2xl cursor-pointer  rounded-md" />
          </Link>
          <Link href={"https://github.com/Krushna-358/"} target="_blank">
            <FaGithubSquare className="text-2xl cursor-pointer  rounded-md" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
