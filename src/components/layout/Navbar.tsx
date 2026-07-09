const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <a
          href="#"
          className="text-xl font-bold text-white"
        >
          René Guzmán
        </a>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a
            href="#about"
            className="transition hover:text-white"
          >
            Sobre mí
          </a>

          <a
            href="#experience"
            className="transition hover:text-white"
          >
            Experiencia
          </a>

          <a
            href="#projects"
            className="transition hover:text-white"
          >
            Proyectos
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;