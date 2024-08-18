"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type Props = {};

export default function About({}: Props) {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader>About me</SectionHeader>
      <p className="mb-3">
        I am currently a final year{" "}
        <span className="font-medium">
          Computer Science & Design Engineering Student
        </span>
        , I loved programming from the very beginning of my engineering. My
        passion for coding made me learn{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express.js and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. With full-stack web development, I am also into{" "}
        <span className="font-medium">
          Machine Learning, Deep Learning and NLP
        </span>
        . I am also familiar with coding languages like{" "}
        <span className="font-medium"> C, C++ and Python</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games. I am a{" "}
        <span className="font-medium">
          state-level <span className="underline">swimmer</span>
        </span>
        . My favorite stroke is <span className="font-medium">Butterfly</span>.
        Furthermore, I love trekking. I have done{" "}
        <span className="font-medium">9 Himalayan Treks</span>. With all this, I
        play <span className="font-medium">flute</span> really well. Speaking
        about another hobbies, I enjoy{" "}
        <span className="font-medium">cycling, reading books</span> and
        sometimes watching movies.
      </p>
    </motion.section>
  );
}
