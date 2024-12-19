import React from 'react'
import TButton from '../reusable/tbutton'
import './letter.css'
const Newsletter = () => {
  return (
    <div className=' newsletter w-[65%] h-[40vh] items-center justify-center m-auto my-16 py-36 mb-36 flex flex-col'>
      <h1 className='text-gray-700 text-5xl font-bold'>Get Exclusive Offers On Your Email</h1>
      <p className='text-gray-600 text-xl'>Subscribe to our newsletter and stay updated</p>
      <div className="flex">
      <input type="email" placeholder='Your Email id' className=' w-350 ml-8 border-none outline-none text-gray-700 text-lg'/>
      <TButton>Subscribe</TButton>
      </div>
    </div>
        
  )
}

export default Newsletter
