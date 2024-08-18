"use client";

import Image from "next/image";
import React from "react";
import profilePic from "@/public/Profile.jpg";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

type Props = {};

export default function Intro({}: Props) {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [text, count] = useTypewriter({
    words: [
      "echo 'Hi, I’m Asim!'",
      "terminal.sh",
      ">> CraftingSolutions --on-the-go",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="scroll-mt-[100rem]
    "
      ref={ref}
    >
      <div className="flex items-center justify-center mb-10">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt="Asim's profile"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            🐼
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center mb-10 mt-4 px-4 font-semibold !leading-[1.5] text-3xl sm:text-4xl text-gray-500 scroll-px-10 dark:text-gray-200"
        >
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="pink" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition transform origin-center"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack transform origin-center dark:bg-white/10"
            href="/CV.pdf"
            download={true}
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack transform origin-center dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/asim-avhad/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack transform origin-center dark:bg-white/10 dark:text-white/60"
            href="https://github.com/asim-avhad"
            target="_blank"
          >
            <BsGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
