import UndergroundPicture from "@/assets/img/underground2.png";
import ProfileCard from "@/components/ProfileCard/Arthur";
import ProfileCard2 from "@/components/ProfileCard/Mariana";
import ProfileCard3 from "@/components/ProfileCard/Wesley";

function Footer() {
  return (
    <section className="min-h-screen relative">
      <div className="relative">
        <img src={UndergroundPicture} alt="Under The Sea" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-indigo-50 text-5xl font-bold tracking-wide drop mt-30 mb-20 leading-loose">
            Integrantes da Equipe Yara<span className="text-orange-500 font-bold">App</span>
          </h1>
          <div className="w-full h-auto flex justify-evenly">
            <ProfileCard />
            <ProfileCard2 />
            <ProfileCard3 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
