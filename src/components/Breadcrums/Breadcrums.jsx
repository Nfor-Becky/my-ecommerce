import React from 'react'
import arrow from '../assets/right-arrow.png'
const Breadcrums = (props) => {
    const{product} = props;
  return (
    <div className='flex items-center text-gray-700 uppercase text-xl gap-2 font-bold mx-16 my-5'>
      HOME <img src={arrow} alt="" className='w-5 h-5'/>SHOP <img src={arrow} alt=""  className='w-5 h-5'/> {product.category} <img src={arrow} alt=""  className='w-5 h-5' /> {product.name}
    </div>
  )
}

export default Breadcrums
