import React from 'react';
import user from '../images/user.png';

const TopNav = ({ toggleShowSideNav }: {toggleShowSideNav: Function}) => (
  <nav className="flex justify-between items-center py-4 px-6 bg-white w-full md:w-9/12 lg:w-10/12 h-18 px-0 sm:px-4 md:pl-15 md:pr-16 fixed z-40 themeShadow">
    <a
      href="#!"
      onClick={() => toggleShowSideNav()}
      className="block md:hidden flex items-center px-4 py-3 mr-4 rounded hover:opacity-75 text-themePurple border-2 border-themePurple focus:outline-none"
    >
      <span className=""> -</span>
      <svg className="text-themeBlack h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
      <span className=""> -</span>
    </a>
    <p className="text-sm text-themePurple hidden sm:block scdm">
      Hello, Enterprise Wallet Payments Salary Account
    </p>
    <div className="flex justify-between items-center text-themeBlack">
      <img className="w-8 sm:w-12 rounded-full shadow-none hover:shadow-lg" src={user} alt="Wallets logo" width="100%" height="100%" />
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="mx-1 sm:mx-3" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00069 9.56021C7.71394 9.56021 7.42722 9.45072 7.2086 9.2322L0.328959 2.35249C-0.108676 1.91486 -0.108676 1.20531 0.328959 0.767852C0.766416 0.330394 1.47582 0.330394 1.91349 0.767852L8.00069 6.8554L14.0879 0.768064C14.5256 0.330606 15.2349 0.330606 15.6723 0.768064C16.1102 1.20552 16.1102 1.91507 15.6723 2.35271L8.79278 9.23242C8.57405 9.45097 8.28733 9.56021 8.00069 9.56021Z" fill="#011627" />
      </svg>
      <a href="/two" className="border-l-2 border-gray-300 pl-1 sm:pl-3 py-1 sm:py-3 text-themeBlack hover:text-themePurple text-sm md:text-base">Logout</a>
    </div>
  </nav>
);

export default TopNav;
