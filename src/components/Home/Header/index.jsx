import Teste from "@/assets/img/teste2.png";

function Header() {
  return (
    <section className="h-auto relative">
      <img src={Teste} alt="Teste" className="w-full h-100" />
      <header className="w-full absolute top-[25%]">
        <h1 className="text-7xl text-center text-white font-bold underline mb-12">
          Titulo da página
        </h1>
        <p className="text-center text-white text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </header>
    </section>
  );
}

export default Header;
