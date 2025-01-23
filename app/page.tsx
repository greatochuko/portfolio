import AboutSection from "@/components/AboutSection";
import LetsConnectSection from "@/components/LetsConnectSection";
import RecentProjectSection from "@/components/RecentProjectSection";
import StackSection from "@/components/StackSection";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-12 py-0">
      <AboutSection />
      <RecentProjectSection />
      <StackSection />
      <LetsConnectSection />
    </div>
  );
}
