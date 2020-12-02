import React from 'react';
import numeral from 'numeral';
import { motion } from 'framer-motion';
import { item } from '../styles/motion';

const BlackCard = ({ balance }:{balance: number}) => (
  <motion.div variants={item} className="col-span-12 lg:col-span-5 bg-themeBlack w-full themeRadius px-4 md:px-10 pt-10 pb-4">
    <p className="text-sm text-white">YOUR WALLET BALANCE</p>
    <h2 className="text-3xl xl:text-4xl text-themeGreen">{`N${numeral(balance).format('0,0.00')}`}</h2>
    <div className="flex justify-between flex-nowrap mt-4">
      <button type="button" aria-label="Ref" className="px-2 py-1 themeRadius text-themeBlue bg-themeBlueAlt text-sm  mr-5 w-full justify-center items-center focus:outline-none border-4 border-themeBlueAlt hover:border-themeBlue flex flex-nowrap">
        <span className="mr-2 tracking-wide">0003480384</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.99998 8.1664C8.53982 8.1664 8.16638 8.53984 8.16638 9V12.3336C8.16638 12.7938 8.53982 13.1664 8.99998 13.1664C9.46014 13.1664 9.83358 12.7938 9.83358 12.3336V9C9.83358 8.7789 9.7453 8.56718 9.58904 8.41094C9.43279 8.2547 9.22108 8.1664 8.99998 8.1664Z" fill="#0084F4" />
          <path d="M9.83368 6.5C9.83368 7.61094 8.1665 7.61094 8.1665 6.5C8.1665 5.38906 9.83368 5.38906 9.83368 6.5Z" fill="#0084F4" />
          <path d="M8.99998 0.666397C6.78978 0.666397 4.67038 1.54452 3.10778 3.1078C1.5445 4.6703 0.666382 6.7898 0.666382 9C0.666382 11.2102 1.5445 13.3296 3.10778 14.8922C4.67028 16.4555 6.78978 17.3336 8.99998 17.3336C11.2102 17.3336 13.3296 16.4555 14.8922 14.8922C16.4555 13.3297 17.3336 11.2102 17.3336 9C17.3336 6.7898 16.4555 4.6704 14.8922 3.1078C13.3297 1.54452 11.2102 0.666397 8.99998 0.666397ZM8.99998 15.6664C7.23202 15.6664 5.53598 14.9641 4.28598 13.7141C3.03598 12.4641 2.33364 10.7681 2.33364 9.00006C2.33364 7.23206 3.03598 5.53606 4.28598 4.28606C5.53598 3.03606 7.23198 2.33372 8.99998 2.33372C10.768 2.33372 12.464 3.03606 13.714 4.28606C14.964 5.53606 15.6663 7.23206 15.6663 9.00006C15.6663 10.7681 14.964 12.4641 13.714 13.7141C12.464 14.9641 10.768 15.6664 8.99998 15.6664Z" fill="#0084F4" />
        </svg>
      </button>
      <button type="button" aria-label="Fund Wallet" className="px-2 py-1 themeRadius text-themeGreen border border-themeGreen text-sm w-full focus:outline-none hover:bg-themeGreen hover:text-white">
        Fund Your Wallet
      </button>
    </div>
  </motion.div>
);

export default BlackCard;
