
function Main() {
  return (
    <main className="min-h-screen text-justify">

      <section id="impact" className="w-full min-h-screen flex items-center justify-center border-b border-b-gray-800">

        <div className="p-20 lg:p-24">

          <div className="mb-6">

            <span className="uppercase text-sm">Problema</span>
            <h2 className="text-2xl font-bold">Impactos da Pesca Ilegal</h2>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            <div className="text-lg space-y-5 text-gray-300">
              <p>A pesca ilegal é um problema grave para os ecossistemas marinhos e a sustentabilidade dos estoques pesqueiros no Brasil. Prejudica pescadores legais, expõe consumidores a riscos pela falta de transparência e dificulta a gestão governamental.</p>
              <p className="text-lg mt-4 text-gray-300">Dados da Organização das Nações Unidas para a Alimentação (FAO) indicam que cerca de vinte e seis milhões de toneladas de pescados são capturadas ilegalmente, resultando em prejuízos econômicos de até cinquenta bilhões de dólares. Essa falta de declarações precisas compromete a avaliação dos estoques pesqueiros e enfraquece a regulamentação e gestão sustentável dos recursos.</p>
              <p className="text-lg mt-4 text-gray-300">Um exemplo crítico é a pesca da Tainha, que frequentemente ultrapassa as cotas preestabelecidas, como reportado pelo Portal Oceana. Isso evidencia a gravidade do problema, com disparidade entre produção declarada e volumes exportados.</p>
            </div>

            <div className="w-full">

              <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/tv0_-w4a570?si=ven4qR-RwzUF9eTa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

              <p className="mt-4">
                <a href="https://brasil.oceana.org/campanhas/sustentabilidade-na-pesca-da-tainha/" target="_blank" rel="noopener noreferrer" className="font-medium text-orange-500 underline">Brasil Oceana</a>
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-gradient-to-t from-[#0e100e] to-[#112627] min-h-screen flex items-center justify-center border-b border-b-gray-800">


        <div className="w-full p-24 lg:w-1/2 lg:p-0">
          <cite className="text-5xl lg:text-6xl text-orange-500 text-center font-bold">"Os oceanos são os pulmões do nosso planeta, e devemos protegê-los a todo custo."</cite>
          <small className="block font-medium text-gray-300 text-end mt-12">~António Guterres, Secretário-Geral das Nações Unidas</small>

        </div>

      </section>

      <section id="importance" className="w-full min-h-screen flex items-center justify-center">

        <div className="p-20 lg:p-24">

          <div className="mb-6">

            <span className="uppercase text-sm">Mais sobre</span>
            <h2 className="text-2xl font-bold">Importância dos Oceanos</h2>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            <p className="text-gray-300 text-lg">
              A importância do oceano para a vida na Terra é tão grande, que não é possível pensar nela sem o mar. Mesmo assim, a discussão sobre esse ecossistema é recente entre as principais economias do mundo. Esse recurso cobre mais de dois terços da superfície de nosso planeta e detém chaves importantes para combater o aquecimento global, preservar e restaurar a biodiversidade terrestre, fornecer energia, alimentos, logística e recursos naturais, além de garantir o crescimento econômico e uma distribuição mais justa de prosperidade para a população.
            </p>

            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/qf1t5RX7Iyg?si=TA2ljSUxeKzIqcGD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>

        </div>

      </section>

      <div className="px-12 pb-4 flex items-center justify-between font-medium text-orange-500">
        <a href="/">&larr; Página inicial</a>
        <a href="/study">Estudos realizados &rarr;</a>
      </div>

    </main>
  );
}

export default Main;



