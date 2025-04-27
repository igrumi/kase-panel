import zibzabImg from '../assets/zibzab.png';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-100 to-white pt-20">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">it me</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        zib zib zib zab zab 
      </p>
      <img src={zibzabImg} alt="zibzab" className="w-48 h-auto mt-8" />
    </section>
  );
}
