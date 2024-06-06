function Main() {
  return (
    <main className="min-h-screen">
    <div className="content p-8 font-roboto text-justify">
        <section id="data" className="mt-8">
          <h2 className="text-2xl font-bold">Dados Oficiais</h2>
          <p className="mt-4">Apresentação de dados da FAO e do IBAMA. Estudos detalhados sobre os estoques pesqueiros e impacto econômico.</p>
          <img src="/path/to/graph.jpg" alt="Estatísticas de pesca ilegal" className="mt-4"/>
        </section>
        <section id="case-studies" className="mt-8">
          <h2 className="text-2xl font-bold">Estudos de Caso</h2>
          <p className="mt-4">Detalhamento dos casos da Tainha e outros exemplos críticos.</p>
          <img src="/path/to/map.jpg" alt="Mapa de áreas de pesca" className="mt-4"/>
        </section>
        <section id="conference" className="mt-8">
          <h2 className="text-2xl font-bold">Conferência do Oceans 20</h2>
          <p className="mt-4">Resumo das discussões e conclusões do Oceans 20. Comentários de especialistas e representantes do G20.</p>
          <video src="/path/to/video.mp4" controls className="mt-4"></video>
        </section>
      </div>
    </main>
  );
}

export default Main;
