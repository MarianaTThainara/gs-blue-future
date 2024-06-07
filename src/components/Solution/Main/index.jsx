export default function Main() {
  return (
    <main className="min-h-screen">
      
      <section
        id="features"
        className="w-full min-h-screen flex items-center justify-center border-b border-b-gray-700 text-justify">

        <div className="p-20 lg:p-24">
          <div className="mb-12">
            <h2 className="text-2xl font-bold">
              Yara<span className="text-orange-500">App</span>: Tecnologia a Serviço da Sustentabilidade Marinha
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="text-lg space-y-5 text-gray-300">
              <p>
                Para enfrentar o desafio da pesca ilegal e promover a
                sustentabilidade dos ecossistemas marinhos no Brasil,
                apresentamos o YaraApp. Este aplicativo inovador utiliza dados
                de satélites para monitorar em tempo real as atividades das
                embarcações nos ecossistemas marinhos brasileiros.
              </p>
              <p className="text-lg mt-4 text-gray-300">
                O YaraApp permite o cadastramento detalhado dos ecossistemas,
                informando dados sobre a espécie, localização e delimitando um
                raio de proteção. Esta funcionalidade ajuda as autoridades a
                definirem claramente áreas de proteção e zonas regulamentadas,
                contribuindo para uma gestão ambiental mais eficaz. Com a
                tecnologia do YaraApp, é possível realizar uma análise minuciosa
                dos padrões de comportamento das embarcações dentro dos
                ecossistemas cadastrados, identificando atividades suspeitas
                como tempo de permanência excessivo ou movimentações
                inconsistentes.
              </p>
              <p className="text-lg mt-4 text-gray-300">
                Quando uma atividade suspeita é detectada, o aplicativo envia
                notificações automáticas às autoridades competentes, permitindo
                uma resposta imediata e eficiente. Além disso, o YaraApp
                desempenha um papel fundamental na coleta e armazenamento de
                dados das atividades das embarcações, proporcionando informações
                valiosas para análises detalhadas e tomadas de decisões futuras.
                Estas informações são essenciais para avaliar a eficácia das
                medidas de proteção existentes e planejar estratégias de
                conservação a longo prazo.
              </p>
              <p className="text-lg mt-4 text-gray-300">
                O modelo de negócios do YaraApp foca no mercado B2B, fornecendo
                serviços para governos, agências ambientais e empresas privadas.
                A principal fonte de receita é baseada na quantidade de
                embarcações monitoradas e no processamento de volumes de dados.
                Desta forma, o YaraApp não só contribui para a proteção dos
                recursos naturais, mas também promove a sustentabilidade da
                pesca no Brasil, enfrentando os desafios da pesca ilegal e
                garantindo um futuro mais sustentável para nossos ecossistemas
                marinhos.
              </p>
              <p className="text-lg mt-4 text-gray-300">
                Com o YaraApp, estamos não apenas respondendo a um problema
                urgente, mas também alinhando-nos às práticas da Economia Azul,
                conforme discutido no Oceans 20. Nosso compromisso é com a
                sustentabilidade, a responsabilidade ecológica e o crescimento
                econômico equilibrado, alinhado às diretrizes globais
                estabelecidas pelos países do G20.
              </p>
            </div>
            <div className="w-full">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/your-video-id"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="mt-4">
                <a
                  href="https://your-link-here.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-orange-500 underline"
                >
                  Saiba mais sobre o YaraApp e o funcionamento do aplicativo
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-t from-[#0e100e] to-[#112627] min-h-screen flex items-center justify-center">
        <div className="w-full p-24 lg:w-1/2 lg:p-0">
          <cite className="text-5xl lg:text-6xl text-orange-500 text-center font-bold">
            "A tecnologia é nossa aliada na proteção dos oceanos e na promoção da
            sustentabilidade."
          </cite>
          <small className="block font-medium text-base text-gray-300 text-end mt-12">
            ~Citação Inspiradora
          </small>
        </div>
      </section>

      <div className="px-12 pb-4 flex items-center justify-between font-medium text-orange-500">
        <a href="/study">&larr; Estudos realizados</a>
      </div>
    </main>
  );
}