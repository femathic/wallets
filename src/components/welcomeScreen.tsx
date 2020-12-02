import React from 'react';

const WelcomeScreen = ({ close } : {close: Function}) => (
  <div className="w-full h-full py-4 lg:py-10 px-4">
    <h2 className="text-center text-lg text-themePurple mb-6">
      <span role="img" aria-label="greeting" className="text-sm"> 🙌🏽 </span>
      <br />
      Welcome to Wallets Business
    </h2>
    <div className="text-left text-sm text-dark border-t py-6">
      <p className="mb-4">Hello,</p>
      <p className="mb-4">
        Thanks so much for signing up. We know how difficult it can be to set up
        a corporate account for your business and that why we’ve made it really
        easy for you to get started with as little requirements as possible.
      </p>
      <p className="mb-4">
        Your Wallets Business account allows you to carry out most of your banking
        transactions right off the bat. You can also carry out bulk transactions very
        quickly. Cards are definitely something you want to try out especially for
        your cash and online expenses.
      </p>
      <p className="mb-4">
        I’ll leave you now to go ahead and start exploring. If you run into any issues
        or need to clarify anything, please send me an email at john@wallets.africa
        or hit me up on Twitter @thejohnoke.
      </p>
      <p className="mb-4">Thanks!</p>
      <p>John Oke, CEO, Wallets Africa</p>
    </div>
    <div className="px-4 lg:px-14">
      <button
        type="button"
        aria-label="close"
        className="p-4 text-sm rounded text-bold text-white bg-themePurple w-full focus:outline-none shadow-none hover:shadow-lg"
        onClick={() => close()}
      >
        Show me awesome
      </button>
    </div>
  </div>
);

export default WelcomeScreen;
