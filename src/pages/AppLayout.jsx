import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <div className="pb-20 min-h-screen flex flex-col lg:pb-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
