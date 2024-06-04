import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Teste from '@/assets/img/teste.jpg'


export default function App() {
  return (
    <>
    
      <div className="bg-amber-100 min-h-screen w-full">
        
        <div className="relative">

          <Header />

          <img src={Teste} alt="Teste" className="w-full" />

        </div>

        <div>

          aaa
        </div>

        {/* //Main */}
        <Outlet />
        <Footer />

      </div>
    
    </>
  );
}
