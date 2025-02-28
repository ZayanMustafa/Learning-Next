import AboutMe from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/project";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>
    </>
  );
}
