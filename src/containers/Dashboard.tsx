import React from 'react';
import BlackCard from '../components/blackCard';
import SummaryCard from '../components/summaryCard';
import TransactionTable from '../components/transactionTable';
import cardData from '../data/cards.json';

const Dashboard = () => {
  const transactions: Array<any> = [];
  const balance: number = cardData.reduce((acc, next) => acc + next.cardbalance, 0);
  cardData.map((data) => transactions.push(...data.Transactions));
  const spent: number = transactions.reduce((acc, next) => {
    if (next.transactiontype === 'dr') return acc + next.Amount;
    return acc;
  }, 0);
  const received: number = transactions.reduce((acc, next) => {
    if (next.transactiontype === 'cr') return acc + next.Amount;
    return acc;
  }, 0);
  return (
    <div className="flex flex-col py-4 px-4 md:px-6 bg-white w-full px-0 sm:px-4 md:pl-15 md:pr-16 mt-24 lg:mt-32 mb-48">
      <div className="grid grid-cols-12 gap-4 lg:gap-7 w-full">
        <BlackCard balance={balance} />
        <SummaryCard numOfTransactions={transactions.length} spent={spent} received={received} />
      </div>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Dashboard;
