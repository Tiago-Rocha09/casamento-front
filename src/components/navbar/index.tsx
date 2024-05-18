export const NavBar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex w-full container mx-auto gap-x-2 min-h-16 justify-center">
        <li className="flex items-center py-2 px-4 cursor-pointer">
          <a href="#main-section">Início</a>
        </li>
        <li className="flex items-center py-2 px-4 cursor-pointer">
          <a href="#about-section">O casal</a>
        </li>
        <li className="flex items-center py-2 px-4 cursor-pointer">
          <a href="#gift-list-section">Lista de presentes</a>
        </li>
        <li className="flex items-center py-2 px-4 cursor-pointer">
          <a href="#lua-de-mel">Operação lua de mel</a>
        </li>
        <li className="flex items-center py-2 px-4 cursor-pointer">
          <a href="#confirm-presence-section">Confirme sua presença</a>
        </li>
        <li className="flex items-center py-2 px-4 cursor-pointer">
          <a href="#local-section">Local</a>
        </li>
      </ul>
    </nav>
  );
};
