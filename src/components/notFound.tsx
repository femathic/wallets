import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { item } from '../styles/motion';

const NotFound = () => (
  <motion.div variants={item} initial="hidden" animate="visible" className="w-full h-screen flex flex-col items-center justify-center">
    <p className="text-lg md:text-xl text-themePurple mb-6 text-center"> This page is probably under construction or can not be found</p>
    <Link to="/dashboard" className="text-center text-xs md:text-sm rounded bg-themePurple text-bold text-white w-56 py-6">
      Go to Dashboard
    </Link>
  </motion.div>
);

export default NotFound;
