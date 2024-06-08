export default function SectionPitch() {
  return (
    <section className="min-h-screen p-24">

      <h1 className="text-center text-wrap text-indigo-50 text-3xl tracking-wide drop leading-1 mb-20 font-semibold">
          Entenda mais sobre o futuro dos <span className="text-orange-500 antialiased">ecossistemas marinhos brasileiros</span>:
      </h1>

      <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/JGUVB19e13s?si=4SO8fTlikXxMkCTZ"></iframe>

      <a href="">Link do video aqui</a>

      <div className="bg-black bg-opacity-40 p-12 mt-[7rem] rounded-md py-[5rem]">
        <h2 className="text-wrap text-center text-indigo-50 text-4xl tracking-wide drop font-black">O que é Yara<span className="text-orange-500 antialiased">App</span>?</h2>

        <p className="text-wrap text-justify text-indigo-50 text-2xl tracking-wide drop leading-loose font-semibold pt-20">O Yara<span className="text-orange-500 antialiased">App</span> é uma <span className="text-orange-500 antialiased font-black">solução inovadora</span> para monitorar e combater a <span className="text-orange-500 antialiased font-black">pesca ilegal</span> no Brasil, promovendo a <span className="text-orange-500 antialiased font-black">sustentabilidade</span> dos ecossistemas marinhos. Utilizando dados de satélites, o aplicativo <span className="text-orange-500 antialiased font-black">monitora</span> embarcações em tempo real, permitindo a definição de áreas protegidas e a identificação de atividades suspeitas. Com notificações automáticas às autoridades, o Yara<span className="text-orange-500 antialiased">App</span> facilita uma resposta <span className="text-orange-500 antialiased font-black">rápida</span> rápida e <span className="text-orange-500 antialiased font-black">eficiente</span>. Além disso, coleta dados essenciais para análises futuras, apoiando a <span className="text-orange-500 antialiased font-black">gestão ambiental</span>.</p>
      </div>
    </section>
  );
}

