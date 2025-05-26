import React from "react";
import logo from '../../assets/logo-header.svg';
import 'primeicons/primeicons.css';
import '../../App.css';

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 text-gray-800 font-sans bg-white">
      <div className="w-full mx-auto m-4 px-20">
        {/* Linha 1 */}
        <div className="flex items-center justify-between gap-6 px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 min-w-[200px]">
            <img src={logo} alt="Digital Store" className="h-10" />
          </div>

          {/* Busca */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-[480px]">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="bg-transparent outline-none flex-1 text-sm text-gray-700 placeholder-gray-500"
              />
              <i className="pi pi-search text-gray-500 text-sm"></i>
            </div>
          </div>

          {/* Ações */}
          <div className="flex items-center gap-12 min-w-[220px] justify-end">
            <a
              href="#"
              className="text-dark-gray-2 font-semibold hover:text-primary transition-colors underline underline-offset-2"
            >
              Cadastre-se
            </a>
            <button className="bg-primary text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:brightness-110 transition">
              Entrar
            </button>
            <div className="relative">
              <i className="pi pi-shopping-cart text-2xl text-primary hover:text-tertiary cursor-pointer"></i>
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
          </div>
        </div>

        {/* Linha 2: Menu */}
        <nav className="flex gap-10 px-6 pb-3 text-sm">
          <a href="#" className="text-primary font-semibold relative">
            Home
            <span
              className="block w-full h-0.5 bg-primary mt-1 rounded-full"
              style={{ backgroundColor: 'var(--color-primary)' }}
            ></span>
          </a>
          <a href="#" className="text-dark-gray-2 font-semibold hover:text-primary transition-colors">Produtos</a>
          <a href="#" className="text-dark-gray-2 font-semibold hover:text-primary transition-colors">Categorias</a>
          <a href="#" className="text-dark-gray-2 font-semibold hover:text-primary transition-colors">Meus Pedidos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
