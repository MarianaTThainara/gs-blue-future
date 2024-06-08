import AreaProtecaoYaraApp from "@/assets/img/AreaProtecaoYaraApp.png";
import HomeYaraApp from "@/assets/img/HomeYaraApp.png";
import { useState } from "react";

export default function Main() {

  const challenge= [
    {
      title: 'Coleta e Armazenamento de Dados',
      text: 'Fornece dados valiosos sobre as atividades das embarcações, essenciais para análises detalhadas e para a tomada de decisões informadas sobre a gestão dos ecossistemas marinhos.'
    },
    {
      title: 'Avaliação da Eficácia das Medidas de Proteção',
      text: 'As informações coletadas ajudam a avaliar a eficácia das medidas de proteção existentes e a planejar estratégias de conservação a longo prazo.'
    },
    {
      title: 'Promoção da Economia Azul',
      text: 'Alinhado com as práticas da Economia Azul e as diretrizes globais estabelecidas pelos países do G20, o YaraApp apoia a sustentabilidade, a responsabilidade ecológica e o crescimento econômico equilibrado.'
    },
  ]

  const imagensApp = [
    {
      id: 1,
      image: HomeYaraApp,
      alt: 'Imagem da página inicial do YaraApp'
    },
    {
      id: 2,
      image: AreaProtecaoYaraApp,
      alt: 'Imagem da área de proteção do YaraApp'
    },
  ]

  const [imageActive, setImageActive] = useState(imagensApp[0].id);

  const handleNextImage = () => {
    const currentIndex = imagensApp.findIndex(app => app.id === imageActive);
    const nextIndex = (currentIndex + 1) % imagensApp.length;
    setImageActive(imagensApp[nextIndex].id);
  };

  const handlePreviousImage = () => {
    const currentIndex = imagensApp.findIndex(app => app.id === imageActive);
    const previousIndex = (currentIndex - 1 + imagensApp.length) % imagensApp.length;
    setImageActive(imagensApp[previousIndex].id);
  };

  return (
    <main className="min-h-screen">
      
      <section
        id="features"
        className="flex items-center justify-center border-b border-b-gray-700">

        <div className="p-20 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          <div>
            <h3 className="text-6xl font-bold">
              Yara<span className="text-orange-500">App</span>
            </h3>

            <p className="text-gray-300 mt-4 text-xl">
              Aplicativo criado para enfrentar o desafio da pesca ilegal e promover a sustentabilidade dos ecossistemas marinhos no Brasil. Nosso público alvo inclui governos, agências ambientais e empresas privadas envolvidas na proteção dos recursos marinhos e na gestão sustentável da pesca. As pessoas diretamente afetadas pelo uso do YaraApp são pescadores, comunidades costeiras, autoridades reguladoras e ecologistas, todos os quais se beneficiam de um ambiente marinho mais saudável e regulado.
            </p>

          </div>

          <div>
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/_Li2epAqVTY?si=1iIWTrWPsvqWvHm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <a href="https://www.youtube.com/embed/_Li2epAqVTY?si=1iIWTrWPsvqWvHm0" className="font-medium underline text-orange-500 block mt-4" target="_blank">Pitch YaraApp</a>
          </div>

        </div>

      </section>

      <section className="flex items-center justify-center border-b border-b-gray-700">

        <div className="p-20 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>

            <div className="mb-12">

              <h3 className="text-6xl font-bold text-orange-500">
                Funcionalidades
              </h3>

              <p className="text-gray-300 mt-4 text-xl">
                O YaraApp oferece várias funcionalidades principais que tornam a gestão ambiental mais eficaz:
              </p>

            </div>

            <div>
              <ul className="flex flex-col gap-12">
                <li className="flex items-center gap-8">
                  <span className="text-6xl font-bold text-orange-500">1.</span>
                  <div className="text-xl text-gray-300">
                    <span className="uppercase font-medium">Cadastro Detalhado dos Ecossistemas</span>
                    <p className="text-lg leading-1">Os usuários podem registrar informações sobre os ecossistemas, incluindo espécies presentes, localização e delimitação de áreas de proteção. Isso permite uma clara definição de zonas regulamentadas e áreas de proteção ambiental.</p>
                  </div>
                </li>
                <li className="flex items-center gap-8">
                  <span className="text-6xl font-bold text-orange-500">2.</span>
                  <div className="text-xl text-gray-300">
                    <span className="uppercase font-medium">Monitoramento em Tempo Real</span>
                    <p className="text-lg leading-1">Utilizando dados de satélites, o YaraApp monitora as atividades das embarcações em tempo real. Isso possibilita a análise dos padrões de comportamento das embarcações, identificando atividades suspeitas como tempo de permanência excessivo ou movimentações inconsistentes.</p>
                  </div>
                </li>
                <li className="flex items-center gap-8">
                  <span className="text-6xl font-bold text-orange-500">3.</span>
                  <div className="text-xl text-gray-300">
                    <span className="uppercase font-medium">Notificações Automáticas</span>
                    <p className="text-lg leading-1">Quando atividades suspeitas são detectadas, o aplicativo envia notificações automáticas às autoridades competentes, permitindo uma resposta rápida e eficiente.</p>
                  </div>
                </li>

                
              </ul>
            </div>

          </div>

          <div className="p-2 text-center">

            <span className="text-xs text-gray-300 font-medium">Prévia do aplicativo:</span>

            <div className="h-full flex items-center justify-center">

              <button type="button" onClick={handlePreviousImage} className="rounded-full p-2 hover:bg-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

              </button>

              {imagensApp.map((app) => {
                if (app.id === imageActive) {
                  return (
                    <img src={app.image} alt={app.alt} key={app.id} className="max-w-[320px] p-4"/>
                  );
                }
                return null;
              })}

              <button type="button" onClick={handleNextImage} className="rounded-full p-2 hover:bg-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

            </div>

          </div>

        </div>

      </section>

      <section className="flex items-center justify-center border-b border-b-gray-700 text-center lg:text-start">

        <div className="p-20 lg:p-24 gap-14">

          <div className="mb-12">

            <h3 className="text-6xl font-bold text-orange-500">
              Impactos
            </h3>

            <p className="text-gray-300 mt-4 text-xl text-center lg:text-start">
              O YaraApp contribui significativamente para a sustentabilidade e a economia azul ao:
            </p>

          </div>

          <ul className="col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

            {challenge.map((ch) => {

              return <li className="group p-6 border border-gray-700 rounded text-center flex flex-col gap-4 text-gray-300 hover:bg-orange-500 hover:text-white select-none hover:border-orange-400">
                
                <span className="group-hover:text-white font-medium text-lg text-orange-500">{ch.title}</span>

                {ch.text}

              </li>
            })}
          </ul>

        </div>

      </section>

      <section
        id="features"
        className="flex items-center justify-center border-b border-b-gray-700 text-center lg:text-start">

        <div className="p-20 lg:p-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-4">

          <h3 className="text-6xl font-bold min-w-96 text-orange-500">
            Modelo de negócio e fonte de receita
          </h3>

          <p className="text-gray-300 mt-4 text-xl">
            Focado no mercado B2B. Oferecemos serviços para governos, agências ambientais e empresas privadas, proporcionando monitoramento e análise de dados sobre as atividades das embarcações. Nossa principal fonte de receita vem da quantidade de embarcações monitoradas e do processamento de grandes volumes de dados. Além de contribuir para a proteção dos recursos naturais, o YaraApp promove a sustentabilidade da pesca no Brasil, combatendo a pesca ilegal e garantindo um futuro mais sustentável para os nossos ecossistemas marinhos.
          </p>

        </div>

      </section>

     <section className="bg-gradient-to-t from-[#0e100e] to-[#112627] min-h-screen flex items-center justify-center">
        <div className="w-full p-24 lg:w-4/5 lg:p-0">
          <cite className="text-3xl lg:text-4xl text-orange-500 text-justify font-bold">
            "A tecnologia pode ser um grande aliado na luta pela preservação dos oceanos. Mas é importante usá-la de forma responsável e ética. Precisamos garantir que as novas tecnologias sejam usadas para o bem dos oceanos e não para causar mais danos. Também precisamos garantir que os benefícios dessas tecnologias sejam compartilhados por todos, e não apenas por alguns."
          </cite>
          <small className="block font-medium text-lg text-gray-300 text-end mt-12">
            ~Gretchen Pickus, Diretora do Programa Global de Oceanos do Pew Charitable Trusts
          </small>
        </div>
      </section>

      <div className="px-12 pb-4 flex items-center justify-between font-medium text-orange-500">
        <a href="/study">&larr; Estudos realizados</a>
      </div>

    </main>
  );
}