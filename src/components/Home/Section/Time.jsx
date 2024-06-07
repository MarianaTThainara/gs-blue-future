import ProfileCard from "@/components/ProfileCard";
import ArthurPhoto from "@/assets/img/Arthur_Takamori.jpg";
import MarianaPhoto from "@/assets/img/tojal.jpg";
import WesleyPhoto from "@/assets/img/wesley.jpg";

export default function SectionTime() {

  const time = [
    {
      name: 'Arthur Takamori',
      rm: '553809',
      photo: ArthurPhoto,
      about: 'Estudante de Engenharia de Software da turma 1ESOR-2023, Arthur desenvolveu o conceito do projeto YaraApp, sendo responsável por elaborar e identificar a necessidade iminente de proteção e controle dos cardumes nos oceanos brasileiros. Essa necessidade definiu a iniciativa de construção do aplicativo, podendo auxiliar na resolução do problema de maneira inteligente e monitorada. Além disso, realizou a construção da identidade visual do projeto através da utilização de ferramentas de programação, como o React e TailwindCSS.'
    },
    {
      name: 'Mariana Tojal',
      rm: '553014',
      photo: MarianaPhoto,
      about: 'Estudante de Engenharia de Software da turma 1ESOR-2023, Mariana desenvolveu o conceito do projeto YaraApp, desempenhando papel fundamental na elaboração do Pitch, que cumpre o seu papel de informar aos possíveis clientes do App sobre as condições que viabilizaram o projeto e sua importância para a sustentabilidade dos mares. Além disso, auxiliou no processo de construção da identidade visual do projeto através da utilização de ferramentas, como o React e TailwindCSS.'
    },
    {
      name: 'Wesley Matos',
      rm: '553488',
      photo: WesleyPhoto,
      about: 'Estudante de Engenharia de Software da turma 1ESOR-2023, Wesley desenvolveu o conceito do projeto YaraApp e organizou sua viabilização, sendo responsável por fundamentar a relevância deste aplicativo através de dados e indicando aos possíveis clientes sua importância e impacto no cenário através de gráficos e matérias que podem reforçar sua real importância no cenário. Além disso, auxiliou no processo de construção da identidade visual do projeto através da utilização de ferramentas, como o React e TailwindCSS.'
    },
  ]

  return (
    <section className="min-h-screen p-20">

        <div className="mb-12">

          <span>Yara<span className="text-orange-500 font-bold">App</span></span>

          <h1 className="text-indigo-50 text-3xl font-bold tracking-wide leading-none">
              Integrantes da equipe 
          </h1>

        </div>

        <div class="flex items-center justify-center p-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-center">

            {time.map((member) => {
            return <ProfileCard name={member.name}
                            rm={member.rm}
                            photo={member.photo}
                            about={member.about}/>
            })}
            
        </div>

        </div>

    </section>
  );
}
