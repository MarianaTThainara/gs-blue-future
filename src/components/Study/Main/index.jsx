function Main() {

  const challenge= [
    {
      title: 'Falta de Recursos',
      text: 'As agências de fiscalização, como o IBAMA, frequentemente enfrentam escassez de recursos financeiros e tecnológicos para monitorar eficientemente as vastas áreas costeiras.'
    },
    {
      title: 'Insuficiência Tecnológica',
      text: 'A ausência de tecnologias avançadas e integradas impede a detecção rápida e precisa das atividades de pesca ilegal.'
    },
    {
      title: 'Cooperação Internacional',
      text: 'A cooperação entre países é essencial, mas muitas vezes insuficiente, o que dificulta o combate à pesca ilegal em águas internacionais.'
    },
    {
      title: 'Rastreabilidade e Transparência',
      text: 'A falta de sistemas robustos de rastreamento e transparência dificulta a identificação da origem dos produtos pesqueiros, permitindo que o pescado ilegal entre no mercado legal.'
    },
    {
      title: 'Pressões Econômicas',
      text: 'Pescadores legais enfrentam concorrência desleal de pescadores ilegais, o que pode levar à sobrepesca e degradação adicional dos ecossistemas marinhos.'
    },
  ]

  return (
    <main className="min-h-screen text-justify">

      <div className="mb-12 p-20 pb-0 lg:p-24 lg:pb-0">
        <span className="uppercase text-sm">Estudo</span>
        <h2 className="text-2xl font-semibold text-start">
          Análise da Pesca Ilegal e suas implicações
        </h2>
      </div>

      <div className="divide-y divide-gray-700">

        <section id="data" className="p-20 pt-0 lg:p-24">

          <h3 className="text-xl font-semibold mb-4">
            <span className="text-orange-500">#</span> Seção 1: Dados Oficiais
          </h3>

          <div className="text-gray-300 text-lg space-y-8">
            <p>
              Diversos estudos e dados oficiais destacam a gravidade da pesca
              ilegal no Brasil e ao redor do mundo. De acordo com o relatório da
              FAO, cerca de 33% dos estoques de peixes estão sendo explorados em
              níveis biologicamente insustentáveis. Esta exploração excessiva é
              exacerbada pela pesca ilegal, que impede uma gestão eficaz dos
              recursos pesqueiros.
            </p>
            <p>
              O Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais
              Renováveis (IBAMA) tem enfrentado dificuldades na fiscalização das
              atividades pesqueiras devido à vasta extensão da costa brasileira
              e à falta de recursos tecnológicos avançados. A pesca ilegal não
              apenas compromete a sustentabilidade dos estoques pesqueiros, mas
              também resulta em perdas econômicas significativas para o país,
              afetando a renda dos pescadores que atuam legalmente e as
              comunidades costeiras dependentes da pesca.
            </p>
          </div>

        </section>

        <section id="case-studies" className="p-20 lg:p-24 border-gray-700">

          <h3 className="text-xl font-semibold mb-4">
            <span className="text-orange-500">#</span> Seção 2: Estudos de Caso
          </h3>
          <p className="text-gray-300">
            A Oceana, uma organização não governamental dedicada à conservação
            dos oceanos, relatou que a pesca da Tainha no Brasil frequentemente
            excede as cotas estabelecidas, resultando em uma pressão adicional
            sobre essa espécie vulnerável. Este cenário de pesca excessiva e
            ilegal ameaça a recuperação dos estoques pesqueiros e a saúde dos
            ecossistemas marinhos.
          </p>

        </section>

        <section className="p-20 lg:p-24 border-gray-700">

            <h3 className="text-xl font-semibold mb-24">
              Estoques com status conhecido
            </h3>

            <div className="space-y-14 text-center lg:text-start">

              <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
                <span className="block text-[5.5rem] text-orange-500 font-bold leading-none px-4 text-center w-full">
                  94%
                </span>
                <p className="text-2xl text-gray-300 col-span-3">
                  Da situação dos estoque pesqueiros no Brasil é <span className="font-semibold text-orange-500">desconhecida</span>, incluindo os de maior importância econômica.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
                <span className="block text-[5.5rem] text-orange-500 font-bold leading-none w-full px-4 text-center">
                  4
                </span>
                <p className="text-2xl text-gray-300 col-span-3">
                  Estoques pesqueiros explorados pela frota comercial brasileira possuem um limite de captura anual estabelecido e consistente com as avaliações de estoque, o que representa somente <span className="font-semibold text-orange-500">3% do total</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
                  <span className="block text-[5.5rem] text-orange-500 font-bold leading-none w-full px-4 text-center">
                    118
                  </span>
                  <p className="text-2xl text-gray-300 col-span-3">
                    Estoques pesqueiros foram avaliados. Desses, <span className="font-semibold text-orange-500">apenas 7 (ou 6% do total)</span> possuem avaliações quantitativas feitas em um período igual ou menor do que 5 anos. 
                  </p>
                </div>
              <div>

            </div>

            <a href="https://brasil.oceana.org/wp-content/uploads/sites/23/fishery_audit_brazil/estoques.html" className="block font-medium text-sm mt-4 underline text-orange-500 w-full text-end" target="_blank">Referências: Brasil Oceana</a>

            </div>

        </section>

        <section id="conference" className="p-20 lg:p-24 border-gray-700">
          <h3 className="text-xl font-semibold mb-4">
            <span className="text-orange-500">#</span> Seção 3: Conferência do Oceans 20
          </h3>

          <div className="text-gray-300 text-lg space-y-4">
            <p>
              Durante a primeira reunião do Oceans 20, parte da agenda do G20
              Social sobre a Economia Azul, foi destacado que a economia
              oceânica sustentável é essencial para garantir que as atividades
              humanas nos oceanos sejam ecologicamente responsáveis, socialmente
              inclusivas e economicamente viáveis a longo prazo. Esta abordagem
              engloba práticas de gestão ambiental, tecnologias inovadoras e
              colaboração entre governos, empresas e comunidades locais.
            </p>
            <blockquote className="text-gray-400 border-l-4 border-orange-500 pl-8 italic">
              A falta de transparência e a dificuldade na rastreabilidade dos
              produtos pesqueiros aumentam os riscos para os consumidores, que
              podem ser expostos a pescados de origem ilegal e possivelmente
              contaminados. A rastreabilidade inadequada também dificulta a
              implementação de políticas eficazes de conservação e gestão dos
              recursos marinhos.
            </blockquote>
          </div>

        </section>

        <section className="min-h-screen p-20 lg:p-24 border-gray-700">
          <h3 className="text-xl font-semibold mb-8">
            Desafios e Limitações da Abordagem Atual
          </h3>
          <p className="mb-12 text-gray-300">
            Apesar dos esforços significativos, a abordagem atual para lidar com
            a pesca ilegal no Brasil e no mundo enfrenta várias limitações e
            desafios:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {challenge.map((ch) => {

              return <li className="group p-6 border border-gray-700 rounded text-center flex flex-col gap-4 text-gray-300 hover:bg-orange-500 hover:text-white select-none hover:border-orange-400">
                
                <span className="group-hover:text-white font-medium text-lg text-orange-500">{ch.title}</span>

                {ch.text}

              </li>
            })}
          </ul>
          <p className="text-gray-300">
            Estas falhas destacam a necessidade urgente de desenvolver e
            implementar novas estratégias que sejam mais eficazes e
            sustentáveis. A adoção de tecnologias inovadoras, o fortalecimento
            da cooperação internacional e a melhoria da transparência e
            rastreabilidade são passos cruciais para enfrentar esses desafios.
          </p>
        </section>

        <section id="conference" className="bg-gradient-to-t from-[#0e100e] to-[#112627] min-h-screen p-20 lg:p-24 flex items-center justify-center flex-col">

          <p className="text-3xl text-gray-300 text-center font-semibold px-4 leading-2">
            Neste contexto, torna-se imperativo buscar soluções que integrem
            tecnologia avançada e colaboração internacional para enfrentar <span className="text-orange-500">o problema da pesca ilegal</span> e promover a sustentabilidade dos recursos
            marinhos.
          </p>

        </section>

      </div>

      <div className="px-12 pb-4 flex items-center justify-between font-medium text-orange-500">
        <a href="/problem">&larr; Problema</a>
        <a href="/solution">Solução encontrada &rarr;</a>
      </div>

    </main>
  );
}

export default Main;
