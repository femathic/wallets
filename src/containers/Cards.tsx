import React from 'react';
import CardsHeading from '../components/cardsHeading';
import CardsList from '../components/cardsList';
import cardData from '../data/cards.json';

const Cards = () => (
  <div className="flex flex-col py-4 px-4 md:px-6 bg-white w-full px-0 sm:px-4 md:pl-15 md:pr-16 mt-16 lg:mt-16 mb-48">
    <CardsHeading />
    <CardsList data={cardData} />
  </div>
);

export default Cards;
