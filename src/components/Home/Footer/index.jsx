import UndergroundPicture from "@/assets/img/underground.png";
import ProfileCard from "@/components/ProfileCard/Arthur";
import ProfileCard2 from "@/components/ProfileCard/Mariana";
import ProfileCard3 from "@/components/ProfileCard/Wesley"

function Footer() {
  return (
    
    <section className="h-auto relative">
      <h1 className="text-center text-wrap text-indigo-50 text-7xl font-roboto font-normal tracking-wide drop mt-44 mb-44 leading-loose">Integrantes da Equipe Yara<span className="text-orange-500 font-bold">App</span>
      </h1>
      <img src={UndergroundPicture} alt="Under The Sea" className="w-full h-100" />
      <footer className=" w-full h-auto absolute top-[15%] flex justify-evenly">
        <ProfileCard/>
        <ProfileCard2/>
        <ProfileCard3/>
      </footer>
    </section>
  );
}

export default Footer;
