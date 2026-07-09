const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} René Guzmán. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;