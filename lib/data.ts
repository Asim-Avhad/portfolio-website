import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiMongodb } from "react-icons/si";
import syncWriteImg from "@/public/Syncwrite.png";
import sociableImg from "@/public/Sociable.png";
import expenseImg from "@/public/Expense.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Completed TE",
    location: "Nashik, Maharashtra",
    description:
      "Successfully managed to complete my Third Year in Computer Science & Design Engineering with a CGPA of 8.8.",
    icon: React.createElement(LuGraduationCap),
    date: "June, 2024",
  },
  {
    title: "IT & Cybersecurity Intern",
    location: "Dubai, UAE",
    description:
      "I worked as a IT & Cybersecurity Intern at FIVE Holdings, Dubai for 1 month. Explored a new field of IT in Hospitality industry and worked on a Inventory Management Project",
    icon: React.createElement(CgWorkAlt),
    date: "Dec, 2023 - Jan, 2024",
  },
  {
    title: "Techathon",
    location: "Pune, Maharashtra",
    description:
      "I participated in Techathon as the team lead. Initially, our team was in the no-code (Figma, design) category, but the judge asked us to switch to the Coding category. Despite the challenge, we successfully completed the website in a short period of time, though the outcome wasn't in our favor.",
    icon: React.createElement(FaReact),
    date: "Feb, 2024",
  },
  {
    title: "MongoDB Teaching Assistant", 
    location: "K. K. Wagh IEER, Nashik",
    description: "I assisted in teaching MongoDB to second-year AI&DS students as part of a DBMS course. Along with conducting practical sessions, I also facilitated two MongoDB assignments, ensuring students grasped the key concepts effectively.",
    icon: React.createElement(SiMongodb), 
    date: "Nov, 2023"
  }, 
] as const;

export const projectsData = [
  {
    title: "SyncWrite",
    description:
      "SyncWrite is a collaborative documents environment. I worked on this project as a full-stack developer to create an environment for documents.",
    tags: ["React", "Next.js", "Tailwind", "Clerk", "Shadcn"],
    imageUrl: syncWriteImg,
    prolink: "https://sync-write-virid.vercel.app/" 
  },
  {
    title: "Sociable",
    description:
      "The Sociable is a social media application. I worked as a full-stack developer. It has features such as posting an image, commenting, adding friends.",
    tags: ["React", "MongoDB", "Tailwind", "Redux"],
    imageUrl: sociableImg,
    prolink: "https://github.com/Asim-Avhad/Sociable-Social-Media"
  },
  {
    title: "Expense Tracker",
    description:
      "A website made for everyone to keep track of their expenses. I worked as a full-stack developer to create this website using React and Chart.js.",
    tags: ["React", "Chart.js", "MongoDB", "Tailwind"],
    imageUrl: expenseImg,
    prolink: "https://github.com/Asim-Avhad/Expense-Tracker"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "C",
  "C++",
  "Figma",
  "Bootstrap"
] as const;