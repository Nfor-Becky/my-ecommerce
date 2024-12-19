import React from 'react'
import data_product from '../assets/data'
import Item from '../items/items'
const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-2 p-4'>
      <h1 className='text-gray-800 font-semibold text-5xl'>Popular In Women</h1>
      <hr className='w-48 h-1 rounded-xl bg-red-700' />
      <div className="popular_item mt-12 flex gap-4">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Popular
