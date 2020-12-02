import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { motion } from 'framer-motion';
import { item } from '../styles/motion';

const TransactionTable = ({ transactions }:{ transactions: Array<null|any>}) => (
  <motion.div variants={item} className="col-span-12 bg-white w-full border border-opacity-5 mt-10 themeShadow themeRadius px-4 xl:px-10 pt-10 pb-6 text-themeBlack">
    <div className="flex justify-between">
      <p className="text-themePurple">Recent Transactions</p>
      <p className="text-sm text-themeBlack">View More</p>
    </div>

    <table className="border-collapse w-full mt-7 px-10">
      <thead>
        <tr>
          <th className="py-5 font-bold uppercase text-xs text-left hidden lg:table-cell">DATE/TIME</th>
          <th className="py-5 font-bold uppercase text-xs text-left hidden lg:table-cell">CATEGORY</th>
          <th className="py-5 font-bold uppercase text-xs text-left hidden lg:table-cell">REFRENCE</th>
          <th className="py-5 font-bold uppercase text-xs text-left hidden lg:table-cell">NARRATION</th>
          <th className="py-5 font-bold uppercase text-xs text-left hidden lg:table-cell">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(((transaction, index) => (
          <tr
            key={`${transaction.narration + index}`}
            className={`bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 py-10 px-6 lg:p-0 shadow-lg lg:shadow-none ${index !== transactions.length - 1 && 'border-b'}`}
          >
            <td className="w-full lg:w-auto py-8 md:py-5 text-sm text-right lg:text-left block lg:table-cell relative lg:static uppercase">
              <span className="lg:hidden absolute top-0 left-0 text-themePurple bg-white shadow-lg px-2 py-1 text-xs font-bold uppercase">DATE/TIME</span>
              { moment(moment(transaction.TransactionDate.slice(0, -7)), moment.ISO_8601).subtract(1, 'hours').format('MM/DD/yyyy, HH:mm:ss a')}
            </td>
            <td className="w-full lg:w-auto py-8 md:py-5 text-sm text-right lg:text-left block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 text-themePurple bg-white shadow-lg px-2 py-1 text-xs font-bold uppercase">CATEGORY</span>
              { transaction.transactiontype === 'dr' ? 'Debit' : 'Credit'}
            </td>
            <td className="w-full lg:w-auto py-8 md:py-5 text-sm text-right lg:text-left block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 text-themePurple bg-white shadow-lg px-2 py-1 text-xs font-bold uppercase">REFRENCE</span>
              W798300
              {index}
            </td>
            <td className="w-full lg:w-auto py-8 md:py-5 text-sm text-right lg:text-left block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 text-themePurple bg-white shadow-lg px-2 py-1 text-xs font-bold uppercase">NARRATION</span>
              { transaction.narration}
            </td>
            <td className="w-full lg:w-auto py-8 md:py-5 text-sm text-right lg:text-left block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 text-themePurple bg-white shadow-lg px-2 py-1 text-xs font-bold uppercase">AMOUNT</span>
              {numeral(transaction.Amount).format('0,0.00')}
            </td>
          </tr>
        )))}
      </tbody>
    </table>

  </motion.div>
);

export default TransactionTable;
