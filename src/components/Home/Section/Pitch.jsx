export default function SectionPitch() {
  return (
    <>
      <section className="min-h-screen p-24">

        <h1 className="text-center text-wrap text-indigo-50 text-3xl tracking-wide drop leading-1 mb-20 font-semibold">
            Entenda mais sobre o futuro dos <span className="text-orange-500 antialiased">ecossistemas marinhos brasileiros</span>:
        </h1>

        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/_Li2epAqVTY?si=1iIWTrWPsvqWvHm0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <a href="https://www.youtube.com/embed/_Li2epAqVTY?si=1iIWTrWPsvqWvHm0" className="font-medium underline text-orange-500" target="_blank">Pitch - YaraApp</a>
      </section>

      <section className="bg-gradient-to-t from-[#0e100e] to-[#112627] min-h-screen p-20 lg:p-24 flex items-center justify-center flex-col border-y border-gray-700">

          <h2 className="text-wrap text-center text-5xl tracking-wide drop font-black">O que é Yara<span className="text-orange-500 antialiased">App</span>?</h2>

          <p className="text-center text-gray-300 text-2xl font-semibold pt-20">O YaraApp é uma <span className="text-orange-500 antialiased font-black">solução</span> para monitorar e combater a <span className="text-orange-500 antialiased font-black">pesca ilegal</span> no Brasil, promovendo a <span className="text-orange-500 antialiased font-black">sustentabilidade dos ecossistemas marinhos</span>. Utilizando dados de satélites, o aplicativo <span className="text-orange-500 antialiased font-black">monitora embarcações</span> em tempo real, permitindo a definição de áreas protegidas e a identificação de atividades suspeitas. Com notificações automáticas às autoridades, o YaraApp facilita uma resposta <span className="text-orange-500 antialiased font-black">rápida e eficiente</span>. Além disso, coleta dados essenciais para análises futuras, apoiando a <span className="text-orange-500 antialiased font-black">gestão ambiental</span>.</p>
        </section>
    </>
  );
}

