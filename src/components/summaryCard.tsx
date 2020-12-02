import React from 'react';
import numeral from 'numeral';
import { motion } from 'framer-motion';
import { item } from '../styles/motion';

const SummaryCard = (props) => {
  const { numOfTransactions, spent, received }
    : { numOfTransactions: number, spent: number, received: number } = props;
  return (
    <motion.div
      className="flex justify-between items-center col-span-12 lg:col-span-7 bg-white w-full border border-opacity-5 themeShadow themeRadius px-4 xl:px-10 pt-10 pb-8 text-themeBlack relative"
      variants={item}
    >
      <label htmlFor="time">
        <select id="time" name="time" className="absolute top-0 right-0 mx-5 my-3 px-3 py-2 text-xs bg-transparent border focus:outline-none hover:border-gray-500 rounded focus:outline-none focus:ring focus:border-themePurple">
          <option className="bg-themePurple text-white border-2" value="week">This Week</option>
          <option className="bg-themePurple text-white border-2" value="month">This Month</option>
        </select>
      </label>
      <div className="flex flex-col border-r-2 border-gray-300 pr-1 md:pr-6 py-1 sm:py-2 md:text-base mt-4">
        <p className="text-xs md:text-sm text-themeBlack">TRANSACTIONS</p>
        <p className="text-2xl md:text-4xl xl:text-5xl text-themeBlack scdm">
          {numOfTransactions > 999
            ? numeral(numOfTransactions).format('0.0a')
            : numOfTransactions}
        </p>
      </div>
      <div className="flex flex-col border-r-2 border-gray-300 px-1 md:px-6 py-1 sm:py-2 md:text-base mt-4">
        <p className="text-xs md:text-sm  text-themeBlack">AMOUNT SPENT</p>
        <p className="text-2xl md:text-4xl xl:text-5xl text-themeBlack scdm">
          {spent > 999
            ? numeral(spent).format('0.0a')
            : spent}
        </p>
      </div>
      <div className="flex flex-col pl-1 md:pl-6 py-1 sm:py-2 md:text-base mt-4">
        <p className="text-xs md:text-sm text-themeBlack">AMOUNT RECEIVED</p>
        <p className="text-2xl md:text-4xl xl:text-5xl text-themeBlack scdm">
          {received > 999
            ? numeral(received).format('0.0a')
            : received}
        </p>
      </div>
    </motion.div>
  );
};

export default SummaryCard;
