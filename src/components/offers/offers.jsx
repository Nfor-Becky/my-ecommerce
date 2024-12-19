import React from 'react';
import Button from '../reusable/tbutton';
import imag from '../assets/hero3.png';
import './offer.css';

const Offers = () => {
  return (
    <div className='offers w-[65%] h-[60vh] flex m-auto my-16 p-16'>
      <div className="offers-left flex flex-col gap-3 flex-1 justify-center">
        <h1 className='text-4xl font-bold text-gray-700 '>Exclusive</h1>
        <h1 className='text-4xl font-bold text-gray-500 '>Offers for you</h1>
        <p className='text-sm uppercase'>Only ON Best Sellers Products</p>
        <Button>Check Now</Button>
      </div>
      <div className="offers-right flex float-end flex-1 items-center">
        <img src={imag} alt="" className='h-full w-auto' />
      </div> 
    </div>
  );
};

export default Offers;