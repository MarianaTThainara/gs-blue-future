import mainCover from "@/assets/img/maincover.png";

function Header() {
  return (
    <section className="h-auto relative select-none">
      <img src={mainCover} alt="Sea Picture" className="w-full h-100" />
      <header className="w-full absolute top-[20%] flex-col drop-shadow-md font-fjalla">
        <h1 className="flex justify-center items-center text-9xl text-white mb-12 font-medium antialiased tracking-wide h-5/6">Yara
        <span className="font-medium text-orange-500 antialiased">App</span> 
        </h1>
        <p className="text-center text-indigo-50 text-4xl font-normal tracking-wide drop-shadow-md">
          Tecnologia e ancestralidade unidas pela proteção marinha.
        </p>
      </header>
    </section>
  );
}

export default Header;
