import SectionPitch from "../Section/Pitch";
import SectionTime from "../Section/Time"; 

function Main() {

  return (
    <main>

      <SectionPitch />
      <SectionTime />

      <div className="px-12 pb-4 flex items-center justify-end font-medium text-orange-500">
        <a href="/problem">Problema identificado &rarr;</a>
      </div>
    </main>
  );
}

export default Main;
