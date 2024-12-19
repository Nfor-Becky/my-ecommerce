import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
<div className='item w-350 transform transition duration-300 hover:scale-105'>
<Link to={`/products/${props.id}`}>  <img onClick={window.scrollTo(0,0)} src={props.image} alt="" className='w-80 h-72 rounded-xl' /> </Link>
    <div className="flex flex-col m-2">
        <p className='mb-2'>{props.name}</p>
        <div className="item-prices flex gap-3">
            <div className="item-price-new flex items-center justify-center text-sm font-semibold rounded border bg-red-500 p-2  text-gray-800 w-24 h-10">
                {props.new_price}
            </div>
            <div className="item-price-old flex items-center justify-center text-sm font-semibold line-through text-gray-800 w-24 h-10">
                {props.old_price}
            </div>
        </div>
    </div>
</div>
  )
}

export default Item
