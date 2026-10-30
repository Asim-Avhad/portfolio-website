import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/Projects";
import WebWork from "@/components/WebWork";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Recognition from "@/components/Recognition";
import Beyond from "@/components/Beyond";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main">
      <Intro />
      <SectionDivider />
      <Projects />
      <WebWork />
      <About />
      <Experience />
      <Skills />
      <Recognition />
      <Beyond />
      <Contact />
    </main>
  );
}
