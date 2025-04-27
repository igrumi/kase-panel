import zibzabImg from "../assets/zibzab.png";
import zibzabPfp from "../assets/zibzabpfp.png";
import Button from "../components/BasicButton";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="bg-romance min-h-screen pt-10">
      {/* Hero */}
      <section
        id="home"
        className="flex flex-col items-center text-center py-20 px-6 bg-romance"
      >
        <img
          src={zibzabPfp}
          alt="zibzab"
          className="w-48 h-auto rounded-full mb-6 shadow-lg"
        />
        <h2 className="text-4xl font-bold text-espresso mb-4">¿zib zib zab?</h2>
        <p className="text-text-secondary max-w-2xl pb-10">
          zab zib zib ble ble blu zab bli zeb zub zab zab.
        </p>

        <Button text="Ver proyectos" href="#proyectos" position="center" />
      </section>

      {/* Proyectos destacados */}
      <section id="proyectos" className="py-20 px-8 bg-westar ">
        <h2 className="text-4xl font-bold text-espresso text-center mb-12">
          Proyectos
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <ProjectCard
            titulo="Bot de Discord"
            descripcion="Bot en honor al mejor gato que existe, Pascual."
            botonTexto="Invitar"
            botonHref="https://discord.com/oauth2/authorize?client_id=1240349102311477340"
          />

          <ProjectCard
            titulo="Esta pág XD"
            descripcion="App web personal para aprendizaje."
            botonTexto="Ver"
            botonHref="#home"
          />

          <ProjectCard
            titulo="Micro herramientas"
            descripcion="Apps y scripts que solucionan problemas reales."
            botonTexto="Ver"
            botonHref="/tools"
          />
        </div>
      </section>

      {/* Frase final */}
      <section className="flex flex-col justify-center items-center text-center py-20 px-6 bg-romance">
        <h2 className="text-3xl font-semibold text-espresso mb-4">⌘</h2>
      </section>
    </div>
  );
}
