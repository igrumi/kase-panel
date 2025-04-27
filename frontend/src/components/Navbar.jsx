export default function Navbar() {
    return (
      <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 z-50">
        <div className="text-2xl font-bold text-indigo-600">kase.moe</div>
        <div className="space-x-4">
          <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-all">Inicio</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-all">Sobre mí</a>
        </div>
      </nav>
    );
  }
  