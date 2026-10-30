import GetInTouch from "@/components/home/GetInTouch";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <hr className="border-border" />
      <Projects />
      <hr className="border-border" />
      <GetInTouch />
      <hr className="border-border" />
      <footer></footer>
    </>
  );
}
