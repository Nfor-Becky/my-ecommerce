import React from 'react';
import Hero from '../components/hero/hero';
import Offers from '../components/offers/offers';
import Popular from '../components/popular/popular';
import NewCollection from '../components/newCollections/newCollection';
import Newsletter from '../components/Newsletter/Newsletter';
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection/>
      <Newsletter/>

    </div>
  );
};

export default Shop;