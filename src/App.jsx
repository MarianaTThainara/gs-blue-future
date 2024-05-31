import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-dvh flex flex-col  text-white text-lg leading-relaxed antialiased hover:subpixel-antialiased tracking-wide divide-y-2 divide-blue-400/25 bg-blue-950 bg-gradient-to-l from-cyan-950 to-blue-950">
      <Header />
      <div className="grow overflow-y-auto text-center py-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
