
function Main() {
  return (
    <main className="min-h-screen text-justify">
      <div className="content container mx-auto px-4 py-8">
        <section id="impact" className="mt-8">
          <h2 className="text-2xl font-bold">Impactos da Pesca Ilegal</h2>

          <div className="text-gray-300">
            <p className="text-lg mt-4">A pesca ilegal é um problema grave para os ecossistemas marinhos e a sustentabilidade dos estoques pesqueiros no Brasil. Prejudica pescadores legais, expõe consumidores a riscos pela falta de transparência e dificulta a gestão governamental.</p>
            <p className="text-lg mt-4">Dados da Organização das Nações Unidas para a Alimentação (FAO) indicam que cerca de vinte e seis milhões de toneladas de pescados são capturadas ilegalmente, resultando em prejuízos econômicos de até cinquenta bilhões de dólares. Essa falta de declarações precisas compromete a avaliação dos estoques pesqueiros e enfraquece a regulamentação e gestão sustentável dos recursos.</p>
            <p className="text-lg mt-4">Um exemplo crítico é a pesca da Tainha, que frequentemente ultrapassa as cotas preestabelecidas, como reportado pelo Portal Oceana. Isso evidencia a gravidade do problema, com disparidade entre produção declarada e volumes exportados.</p>
          </div>

          <div className="container mx-auto w-1/2">
            <iframe className="w-full aspect-video mt-8" src="https://www.youtube.com/embed/tv0_-w4a570?si=ven4qR-RwzUF9eTa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className="mt-4" >
              <a href="https://brasil.oceana.org/campanhas/sustentabilidade-na-pesca-da-tainha/" target="_blank" rel="noopener noreferrer">https://brasil.oceana.org/campanhas/sustentabilidade-na-pesca-da-tainha/</a>
            </p>
          </div>
        </section>

        <section id="importance" className="mt-10">
          <h2 className="text-2xl font-bold">Importância dos Oceanos</h2>
          <div className="text-gray-300">
            <p className="mt-4 text-lg">A importância do oceano para a vida na Terra é tão grande, que não é possível pensar nela sem o mar. Mesmo assim, a discussão sobre esse ecossistema é recente entre as principais economias do mundo. Esse recurso cobre mais de dois terços da superfície de nosso planeta e detém chaves importantes para combater o aquecimento global, preservar e restaurar a biodiversidade terrestre, fornecer energia, alimentos, logística e recursos naturais, além de garantir o crescimento econômico e uma distribuição mais justa de prosperidade para a população.</p>
          </div>

          <div className="container mx-auto w-1/2">
            <iframe className="w-full aspect-video mt-8" src="https://www.youtube.com/embed/qf1t5RX7Iyg?si=TA2ljSUxeKzIqcGD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <p className="mt-8 text-lg text-center">
            <cite className="text-orange-500 antialiased">"Os oceanos são os pulmões do nosso planeta, e devemos protegê-los a todo custo."</cite>
            <p className="text-right">António Guterres, Secretário-Geral das Nações Unidas
            </p></p>
        </section>
      </div>


    </main>
  );
}

export default Main;



