function Main() {
  return (
    <main className="min-h-screen text-justify">
      <div className="content p-8">
        <section id="features" className="mt-8">
          <h2 className="text-2xl font-bold">Funcionalidades</h2>
          <p className="mt-4">Apresentação do YaraApp, um aplicativo que monitora em tempo real as atividades de embarcações nos ecossistemas marinhos brasileiros, utilizando dados de satélites.</p>
          <ul className="list-disc list-inside mt-4">
            <li>Cadastrar ecossistemas e informar dados sobre a espécie e localização.</li>
            <li>Análise de padrões de comportamento das embarcações.</li>
            <li>Notificações automáticas de atividades suspeitas.</li>
            <li>Coleta e armazenamento de dados das atividades das embarcações.</li>
          </ul>
        </section>
        <section id="benefits" className="mt-8">
          <h2 className="text-2xl font-bold">Benefícios e Impacto</h2>
          <p className="mt-4">Como o YaraApp contribui para a sustentabilidade e a economia azul, com dados sobre a eficácia e impacto do aplicativo.</p>
          <blockquote className="mt-4 p-4 bg-gray-100 border-l-4 border-blue-500 text-black">“YaraApp é uma ferramenta revolucionária para a gestão sustentável dos nossos recursos marinhos.” - Especialista do G20</blockquote>
        </section>
        <section id="business-model" className="mt-8">
          <h2 className="text-2xl font-bold">Modelo de Negócios</h2>
          <p className="mt-4">Explicação do modelo B2B e principais fontes de receita. Potencial de mercado e projeções de crescimento.</p>
          <img src="/path/to/chart.jpg" alt="Projeções de crescimento" className="mt-4"/>
        </section>
      </div>
    </main>
  );
}

export default Main;
