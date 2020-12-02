import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center">
    <p className="text-lg md:text-xl text-themePurple mb-6 text-center"> This page is probably under construction or can not be found</p>
    <Link to="/dashboard" className="text-center text-xs md:text-sm rounded bg-themePurple text-bold text-white w-56 py-6">
      Go to Dashboard
    </Link>
  </div>
);

export default NotFound;
