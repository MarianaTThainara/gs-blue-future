import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";
import ButtonScrollTop from "@/components/ButtonScrollTop";

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-t from-[#0e100e] to-[#112627] min-h-screen w-full relative text-white">
        <ButtonScrollTop />
        <NavMenu />
        {/* Paginas \/ */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
