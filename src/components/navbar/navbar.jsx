import React, { useState } from 'react'
import cart from "../assets/online-shopping.png"
import bag from "../assets/shopping-cart.png"
import Button from '../reusable/button'
import HR from '../reusable/hr'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu]=useState("shop");
  return (
    <div className='flex justify-between py-5 px-7 custom shadow '>
      <div className='nav-logo flex items-center gap-2'>
        <img src={cart} alt='' className='w-8 h-8'/>
        <p className='font-semibold size-7 text-xl'>SHOPPING</p>
      </div>
      <ul className='nav-menu flex items-center py-5 gap-12 size-5 extra-light cursor-pointer'>
                <li onClick={() => setMenu("shop")}>
                  <Link to='/'>Shop {menu === "shop" ? <HR /> : null}</Link>
                </li>
                <li onClick={() => setMenu("men")}>
                  <Link to='/men'>Men {menu === "men" ? <HR /> : null}</Link>
                </li>
                <li onClick={() => setMenu("women")}>
                  <Link to='/women'>Women {menu === "women" ? <HR /> : null}</Link>
                </li>
                <li onClick={() => setMenu("kids")}>
                  <Link to='/kids'>Kids {menu === "kids" ? <HR /> : null}</Link>
                </li>
            </ul>
      <div className='nav-login-cart flex gap-11 items-center'>
        <Link to='/login'><Button>Login</Button></Link> 
       <Link to='/cart'> <img src={bag} alt="" className='w-6 h-6'/></Link>
       <div className="cart-count w-5 h-5 flex justify-center -mt-9 -ml-14 rounded-full bg-red-600 text-white">0</div>
      </div>  
    </div>
  )
}

export default Navbar
