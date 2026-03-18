import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import HowIWork from "@/components/HowIWork";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <HowIWork />
    <Experience />
    <Contact />
    <Footer />
  </div>
);

export default Index;
