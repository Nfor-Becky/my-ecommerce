import React, { useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  const { all_product, cartItems, removeFromCart} = useState(ShopContext);
  return (
    <div className=''>
      <div className="">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {}
      <div className="">
        <div className="">
          <img src="" alt="" />
          <p></p>
          <p></p>
          <button className=''></button>
          <p></p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Cart
