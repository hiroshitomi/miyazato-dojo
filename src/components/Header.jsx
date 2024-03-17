const Header = () => {
  return (
    <header className="fixed top-0 w-full px-10 py-3 text-white z-40">
      <div className="flex items-center justify-between">
        <img src="/logo.png" alt="karatedomiyazato" className="size-10" />
        <nav className="flex justify-between gap-3 font-anton">
          <ul>Inicio</ul>
          <ul>Nosotros</ul>
          <ul>Beneficios</ul>
          <ul>Dojos</ul>
          <ul>Tienda</ul>
          <ul>
            <select>
              <option value="">Español</option>
              <option value="">English</option>
              <option value="">日本語</option>
            </select>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
