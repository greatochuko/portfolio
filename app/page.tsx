import AboutSection from "@/components/AboutSection";
import RecentProjectSection from "@/components/RecentProjectSection";
import StackSection from "@/components/StackSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-0">
      <AboutSection />
      <RecentProjectSection />
      <StackSection />
    </div>
  );
}
