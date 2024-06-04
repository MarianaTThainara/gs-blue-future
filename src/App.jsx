import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";

export default function App() {
  return (
    <div className="bg-amber-100 min-h-screen w-full relative">
      <NavMenu />
      {/* Paginas \/ */}
      <Outlet />
      <Footer />
    </div>
  );
}
