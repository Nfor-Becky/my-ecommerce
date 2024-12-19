import React from 'react'
import new_collection from '../assets/collections'
import Item from '../items/items'
const NewCollection = () => {
  return (
    <div className='items-center justify-center gap-2 p-4 flex flex-col'>
      <h1 className="new text-gray-800 font-semibold text-5xl">New Collections</h1>
      <hr className='w-48 h-1 rounded-xl bg-red-700'/>
      <div className="collections mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {new_collection.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollection
