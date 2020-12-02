import React from 'react';
import { motion } from 'framer-motion';
import { item } from '../styles/motion';
import Verve from '../images/verve.png';

const CardsList = ({ data }: {data: any[]}) => (
  <motion.div variants={item} className="flex flex-wrap justify-between items-center flex-nowrap mt-10 mb-8 md:mb-0">

    {data.map((card) => (
      <div className="w-full" key={card.cardnumber}>
        <div className="flex justify-start items-center border-t-2 pt-8 pb-2 w-full">
          <div className="w-32 h-20 bg-themeBlack themeRadius px-2 py-2 mr-4 md:mr-8">
            <p className="text-white text-lg text-right ipm font-normal">{`N${card.cardbalance}.00`}</p>
            <div className="flex justify-between items-center text-white mt-4">
              <span className="text-sm ipm">{`*${card.cardnumber.substr(-4)}`}</span>
              <img className="w-4 sm:w-10 rounded" src={Verve} alt="Verve  logo" width="100%" height="100%" />
            </div>
          </div>
          <button type="button" aria-label="Fund Card" className="py-2 px-4 text-sm rounded bg-themePurple text-white hover:text-themePurple border-2 border-themePurple text-bold text-white w-36 focus:outline-none mr-2 md:mr-6 hover:bg-transparent">
            Fund Card
          </button>
          <button type="button" aria-label="Fund Card" className="p-4 text-sm rounded whitespace-nowrap bg-transparent text-bold text-themePurple w-36 focus:outline-none hover:text-themeGreen mr-2 md:mr-6">
            Freeze Card
          </button>
          <button type="button" aria-label="Fund Card" className="p-4 text-sm rounded whitespace-nowrap bg-transparent text-bold text-themeRed hover:text-red-400 w-36 focus:outline-none mr-2 md:mr-6">
            Delete Card
          </button>
        </div>
        <button type="button" aria-label="" className="text-sm text-themePurple pb-6 focus:outline-none hover:text-themeGreen"> View Details </button>
      </div>
    ))}

  </motion.div>
);

export default CardsList;
