import React from 'react'
import hero from "../assets/shops.png"
import shopping_bag from "../assets/shop.png"
import './hero.css'
const Hero = () => {
  return (
    <div className='hero flex flex-1 p-8 m-auto justify-between gap-36'>
    <div className=" hero-left flex flex-col gap-11 mt-8 pl-16">
            <h2 className='text-gray-900 text-xl font-semibold '>New ARRIVALS ONLY</h2>
      <div className="text-black text-8xl font-semibold">
            <div className=" flex">
                <p className=''>new</p>
                <img src={shopping_bag} alt='' className='w-24 h-24'/>
            </div>
            <p>collection</p>
            <p>for everyone</p>
            </div>
            <div className="hero-latest-btn flex justify-center items-center text-xl gap-4  rounded mt-8 bg-red-500 text-white ">
                <div className="">Latest Collections</div> 
            </div>
        </div>
        <div className="hero-right flex-1">
        <img src={hero} alt='' className='w-100 h-100'/>
        </div>
    </div>
  )
}

export default Hero
