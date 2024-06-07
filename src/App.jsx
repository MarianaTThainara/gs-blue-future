import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";

export default function App() {
  return (
    <div className="bg-gradient-to-t from-[#0e100e] to-[#112627] min-h-screen w-full relative text-white">
      <NavMenu />
      {/* Paginas \/ */}
      <Outlet />
      <Footer />
    </div>
  );
}
