import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { item } from '../styles/motion';
import logo from '../images/logo.png';
import sideNavData from '../data/sideNavData';

const SideNav = () => (
  <nav className="bg-themePurple w:8/12 md:w-3/12 lg:w-2/12 h-screen z-30 fixed">
    <div className="flex flex-col align-center">
      <div className="mt-24 md:mt-8 mb-4 px-7">
        <img className="w-14" src={logo} alt="Wallets logo" width="100%" height="100%" />
      </div>
      <ul className="text-white font-light px-6 md:px-10">
        {sideNavData.map((menu) => (
          <motion.li className="my-4 md:my-7 p-0" key={menu.name} variants={item} initial="hidden" animate="visible">
            <NavLink to={`/${menu.name.split(' ').join('').toLowerCase()}`} className="flex justify-between text-xs md:text-sm items-center m-0 p-0 text-white hover:text-themeGreen" activeClassName="text-themeGreen">
              {menu.name}
              {menu.subgroup && (
                <svg width="6" height="10" viewBox="0 0 6 10" className="mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85012 4.99957C5.85012 5.17879 5.78169 5.35799 5.64512 5.49463L1.3453 9.7944C1.07178 10.0679 0.628311 10.0679 0.3549 9.7944C0.0814885 9.52099 0.0814885 9.07761 0.3549 8.80407L4.15962 4.99957L0.355033 1.19505C0.0816214 0.921531 0.0816214 0.478195 0.355033 0.204806C0.628444 -0.0688486 1.07191 -0.0688486 1.34543 0.204806L5.64525 4.50451C5.78185 4.64122 5.85012 4.82042 5.85012 4.99957Z" fill="white" />
                </svg>
              )}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </div>
  </nav>
);

export default SideNav;
