import GetInTouch from "@/components/home/GetInTouch";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="border-border" />
      <Projects />
      <hr className="border-border" />
      <GetInTouch />
      <hr className="border-border" />
    </>
  );
}
