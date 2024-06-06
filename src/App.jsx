import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";

export default function App() {
  return (
    <div className="bg-[#0e100e] min-h-screen w-full relative font-mono text-white">
      <NavMenu />
      {/* Paginas \/ */}
      <Outlet />
      <Footer />
    </div>
  );
}
