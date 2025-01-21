import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RecentProjectSection from "@/components/RecentProjectSection";
import StackSection from "@/components/StackSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-0">
      <AboutSection />
      <RecentProjectSection />
      <StackSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
