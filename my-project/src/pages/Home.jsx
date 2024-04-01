import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import ServicesOffered from '../partials/ServicesOffered';



function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <ServicesOffered/>

      </main>

    

  

    </div>
  );
}

export default Home;