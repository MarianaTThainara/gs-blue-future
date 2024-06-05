import Teste from "@/assets/img/teste21.png";
import Logo from '@/assets/img/YARA_WHITE2.png'

function Header() {
  return (
    <section className="h-auto relative">
      <img src={Teste} alt="Teste" className="w-full h-100" />
      <header className="w-full absolute top-[25%] flex-col drop-shadow-md">
        <h1 className="flex justify-center items-center text-9xl text-orange-500 font-roboto mb-12 font-bold antialiased tracking-wide h-5/6">Yara
        <span className=" font-normal text-white antialiased">App</span> 
        <img src={Logo} alt="Yara Logo" className="w-auto justify-center"/>
        </h1>
        <p className="text-center text-indigo-50 text-3xl font-roboto font-normal tracking-wide drop">
          Tecnologia e Ancestralidade unidas pela proteção marinha.
        </p>
      </header>
    </section>
  );
}

export default Header;
