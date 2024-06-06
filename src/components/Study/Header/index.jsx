import Teste from "@/assets/img/infosBanner2.png";
import HeroSection from "@/components/HeroSection";

function Header() {
  return (
    <header className="w-full font-roboto">
      <HeroSection
        backgroundImage={Teste}
        mainTitle="Análise da Pesca Ilegal e Suas Implicações"
        subTitle="Entendendo o impacto para criar soluções"
        buttonText="Saiba mais"
        buttonTarget="data"
      />
    </header>
  );
}

export default Header;
