import Button from "./BasicButton";

export default function ProjectCard({ titulo, descripcion, botonTexto, botonHref }) {
  return (
    <div className="bg-romance rounded-lg shadow-md p-6 flex flex-col min-h-[150px] w-full max-w-xs">
      <h3 className="text-xl font-bold text-donkey mb-2">{titulo}</h3>
      <p className="text-text-primary mb-4">{descripcion}</p>

      <div className="mt-auto">
        <Button text={botonTexto} href={botonHref} position="right" />
      </div>
    </div>
  );
}
