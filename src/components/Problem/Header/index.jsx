import Teste from "@/assets/img/problemBanner2.png";
import HeroSection from "../../HeroSection";

function Header() {
  return (
    <header className="w-full">
      <HeroSection
        backgroundImage={Teste}
        mainTitle="A Gravidade da Pesca Ilegal no Brasil"
        subTitle="Um desafio para a sustentabilidade dos nossos oceanos"
        buttonText="Saiba mais"
        buttonTarget="impact"
      />
    </header>
  );
}

export default Header;
