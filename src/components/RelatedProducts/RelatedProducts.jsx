import React from 'react'
import data_product from '../assets/data'
import Item from '../items/items'
const RelatedProducts = () => {
  return (
    <div className="item flex flex-col items-center gap-2 h-[90vh]">
      <h1 className='text-gray-800 font-semibold text-5xl'>Related Products</h1>
      <hr className='w-48 h-1 rounded-xl bg-red-700' />
      <div className='mt-12 flex gap-7'>
        {data_product.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
