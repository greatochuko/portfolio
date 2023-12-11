import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen pb-20 lg:pb-4 dark:bg-zinc-900 ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
