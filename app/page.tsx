import Intro from "@/components/Intro";
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
