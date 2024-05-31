import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="bg-cover bg-scroll bg-center h-screen w-screen flex items-center justify-center" style={{backgroundImage: "url(/bg-1.jpg)"}}>
      <div className="w-9/12 h-5/6 flex flex-col text-white text-lg leading-relaxed antialiased hover:subpixel-antialiased tracking-wide bg-blue-950 bg-gradient-to-l from-cyan-950 to-blue-950 opacity-50 rounded-sm">

        <Header />
        <div className="grow overflow-y-auto text-center py-6" >
        <Outlet />
        </div>
        <Footer />

      </div>
    </div>
  );
}
