import React from 'react';
import { motion } from 'framer-motion';
import { item } from '../styles/motion';

const CardsHeading = () => (
  <motion.div variants={item}>
    <div className="flex flex-wrap justify-between items-center flex-nowrap mt-6 mb-8 md:mb-0">
      <h2 className="text-lg text-themePurple sctm">Cards</h2>
      <div className="flex justify-between flex-nowrap mt-6 w-72">
        <button type="button" aria-label="Fund Wallet" className="p-2 rounded w-48 text-themePurple border-2 border-themePurple text-bold text-sm w-full focus:outline-none hover:bg-themePurple hover:text-white mr-2 md:mr-10">
          New Physical Card
        </button>
        <button type="button" aria-label="Fund Wallet" className="p-2 rounded w-48 text-themePurple border-2 border-themePurple text-bold text-sm w-full focus:outline-none hover:bg-themePurple hover:text-white">
          New Virtual Card
        </button>
      </div>
    </div>

    <div className="flex flex-wrap justify-start items-center flex-nowrap mt-2 md:mt-8 mb-2 md:mb-0">
      <a href="#!" className="text-themeBlack pb-2 mr-3 md:mr-16 hover:text-lg hover:text-themeGreen">Virtual Cards</a>
      <h4 className="text-themePurple border-b-2 text-bold border-themePurple hover:text-themeGreen px-2 pb-2">Physical Cards</h4>
    </div>

    <div className="flex flex-wrap justify-start items-center flex-nowrap mt-2 md:mt-8 mb-8 md:mb-0 relative text-gray-600">
      <input
        className="border border-gray-300 bg-white h-12 pl-14 pr-4 hover:border-gray-500 rounded focus:outline-none focus:ring focus:border-themePurple ips font-normal"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="button" className="absolute left-0 top-0 mt-4 ml-6">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6189 15.4886L11.1303 10.8205C12.2752 9.67232 12.9845 8.08942 12.9845 6.34369C12.9845 2.8456 10.1389 0 6.64081 0C3.14272 0 0.297119 2.8456 0.297119 6.34369C0.297119 9.84179 3.14272 12.6874 6.64081 12.6874C8.17629 12.6874 9.58549 12.1385 10.6839 11.2277L15.1833 15.9073C15.2426 15.9692 15.3217 16 15.4011 16C15.4767 16 15.5519 15.9719 15.6105 15.9157C15.7307 15.8 15.7343 15.6088 15.6189 15.4886ZM6.64081 12.0832C3.47591 12.0832 0.90128 9.50859 0.90128 6.34369C0.90128 3.17879 3.47591 0.604161 6.64081 0.604161C9.80571 0.604161 12.3803 3.17879 12.3803 6.34369C12.3803 9.50859 9.80541 12.0832 6.64081 12.0832Z" fill="black" fillOpacity="0.35" />
        </svg>
      </button>
    </div>
  </motion.div>
);

export default CardsHeading;
