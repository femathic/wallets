import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { container } from '../styles/motion';
import CardsHeading from '../components/cardsHeading';
import CardsList from '../components/cardsList';
import cardData from '../data/cards.json';

const Cards = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <motion.div
      className="flex flex-col py-4 px-4 md:px-6 bg-white w-full px-0 sm:px-4 md:pl-15 md:pr-16 mt-16 lg:mt-16 mb-48"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <CardsHeading />
      <CardsList data={cardData} />
    </motion.div>
  );
};

export default Cards;




