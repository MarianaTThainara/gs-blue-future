function Main() {
  return (
    <main className="min-h-screen mt-8">
      <div className="content container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">
          Análise da Pesca Ilegal e Suas Implicações
        </h2>

        <section id="data" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Seção 1: Dados Oficiais
          </h3>

          <div className="text-gray-300 text-lg">
            <p className="mb-4">
              Diversos estudos e dados oficiais destacam a gravidade da pesca
              ilegal no Brasil e ao redor do mundo. De acordo com o relatório da
              FAO, cerca de 33% dos estoques de peixes estão sendo explorados em
              níveis biologicamente insustentáveis. Esta exploração excessiva é
              exacerbada pela pesca ilegal, que impede uma gestão eficaz dos
              recursos pesqueiros.
            </p>
            <p className="mb-4">
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

          <div className="mb-4">
            {/* Placeholder para gráficos */}
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              Gráficos: Estatísticas sobre estoques pesqueiros e impacto
              econômico
            </div>
          </div>
        </section>

        <section id="case-studies" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Seção 2: Estudos de Caso
          </h3>
          <p className="mb-4">
            A Oceana, uma organização não governamental dedicada à conservação
            dos oceanos, relatou que a pesca da Tainha no Brasil frequentemente
            excede as cotas estabelecidas, resultando em uma pressão adicional
            sobre essa espécie vulnerável. Este cenário de pesca excessiva e
            ilegal ameaça a recuperação dos estoques pesqueiros e a saúde dos
            ecossistemas marinhos.
          </p>
          <div className="mb-4">
            {/* Placeholder para imagens */}
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              Imagens: Fotos das espécies afetadas e mapas de áreas de pesca
            </div>
          </div>
        </section>

        <section id="conference" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Seção 3: Conferência do Oceans 20
          </h3>

          <div className="text-gray-300 text-lg">
            <p className="mb-4">
              Durante a primeira reunião do Oceans 20, parte da agenda do G20
              Social sobre a Economia Azul, foi destacado que a economia
              oceânica sustentável é essencial para garantir que as atividades
              humanas nos oceanos sejam ecologicamente responsáveis, socialmente
              inclusivas e economicamente viáveis a longo prazo. Esta abordagem
              engloba práticas de gestão ambiental, tecnologias inovadoras e
              colaboração entre governos, empresas e comunidades locais.
            </p>
            <blockquote className="text-orange-500 border-l-4 border-blue-500 pl-4 mb-4">
              A falta de transparência e a dificuldade na rastreabilidade dos
              produtos pesqueiros aumentam os riscos para os consumidores, que
              podem ser expostos a pescados de origem ilegal e possivelmente
              contaminados. A rastreabilidade inadequada também dificulta a
              implementação de políticas eficazes de conservação e gestão dos
              recursos marinhos.
            </blockquote>
          </div>

          <div className="mb-4">
            {/* Placeholder para vídeo */}
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              Vídeo: Trechos das palestras mais relevantes
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Desafios e Limitações da Abordagem Atual
          </h3>
          <p className="mb-4">
            Apesar dos esforços significativos, a abordagem atual para lidar com
            a pesca ilegal no Brasil e no mundo enfrenta várias limitações e
            desafios:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Falta de Recursos: As agências de fiscalização, como o IBAMA,
              frequentemente enfrentam escassez de recursos financeiros e
              tecnológicos para monitorar eficientemente as vastas áreas
              costeiras.
            </li>
            <li>
              Insuficiência Tecnológica: A ausência de tecnologias avançadas e
              integradas impede a detecção rápida e precisa das atividades de
              pesca ilegal.
            </li>
            <li>
              Cooperação Internacional: A cooperação entre países é essencial,
              mas muitas vezes insuficiente, o que dificulta o combate à pesca
              ilegal em águas internacionais.
            </li>
            <li>
              Rastreabilidade e Transparência: A falta de sistemas robustos de
              rastreamento e transparência dificulta a identificação da origem
              dos produtos pesqueiros, permitindo que o pescado ilegal entre no
              mercado legal.
            </li>
            <li>
              Pressões Econômicas: Pescadores legais enfrentam concorrência
              desleal de pescadores ilegais, o que pode levar à sobrepesca e
              degradação adicional dos ecossistemas marinhos.
            </li>
          </ul>
          <p>
            Estas falhas destacam a necessidade urgente de desenvolver e
            implementar novas estratégias que sejam mais eficazes e
            sustentáveis. A adoção de tecnologias inovadoras, o fortalecimento
            da cooperação internacional e a melhoria da transparência e
            rastreabilidade são passos cruciais para enfrentar esses desafios.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Conclusão</h3>
          <p>
            Neste contexto, torna-se imperativo buscar soluções que integrem
            tecnologia avançada e colaboração internacional para enfrentar o
            problema da pesca ilegal e promover a sustentabilidade dos recursos
            marinhos.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Main;
