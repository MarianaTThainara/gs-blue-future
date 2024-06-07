import ProfileCard from "@/components/ProfileCard";
import ArthurPhoto from "@/assets/img/Arthur_Takamori.jpg";
import MarianaPhoto from "@/assets/img/tojal.jpg";
import WesleyPhoto from "@/assets/img/wesley.jpg";

export default function SectionTime() {

  const time = [
    {
      name: 'Arthur Takamori',
      rm: '********',
      photo: ArthurPhoto,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Mariana Tojal',
      rm: '********',
      photo: MarianaPhoto,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Wesley Matos',
      rm: '********',
      photo: WesleyPhoto,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ]

  return (
    <section className="min-h-screen p-20">

        <div>

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
