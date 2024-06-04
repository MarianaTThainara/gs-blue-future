import Teste from "@/assets/img/teste.jpg";

function Header() {
  return (
    <section className="min-h-screen relative">
      <img src={Teste} alt="Teste" className="w-full" />
      <header className="w-full absolute top-[25%] text-center text-white text-5xl">
        <h1 className="text-7xl font-bold underline mb-12">Titulo da página</h1>
        <p className="text-center text-white text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </header>
    </section>
  );
}

export default Header;
