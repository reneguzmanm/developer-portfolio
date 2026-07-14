import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">

        <a
          href="#"
          className="flex items-center gap-3 text-white"
        >
          <img
            src={logo}
            alt="Logo RG"
            className="h-9 w-9"
          />

          <div className="leading-tight">
            <p className="text-lg font-bold">
              René Guzmán
            </p>

            <p className="text-xs text-slate-400">
              Full Stack Developer
            </p>
          </div>
        </a>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            Sobre mí
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experiencia
          </a>

          <a href="#projects" className="transition hover:text-white">
            Proyectos
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contacto
          </a>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;