import Teste from "@/assets/img/solutionBanner2.png";
import HeroSection from "../../HeroSection";

function Header() {
  return (
    <header className="w-full">
      <HeroSection
        backgroundImage={Teste}
        mainTitle="YaraApp: Tecnologia a Serviço da Sustentabilidade Marinha"
        subTitle="Inovação para proteger nossos ecossistemas"
        buttonText="Saiba mais"
        buttonTarget="features"
      />
    </header>
  );
}

export default Header;
