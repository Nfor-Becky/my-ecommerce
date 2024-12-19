import React from 'react'
import './footer.css'
import cart from "../assets/online-shopping.png"
import gram from "../assets/instagram.png"
import pin from "../assets/pinterest.png"
import sap from "../assets/whatsapp.png"
const Footer = () => {
  return (
    <div className=' footer flex flex-col justify-center items-center gap-12'>
      <div className="logo flex items-center gap-5">
        <img src={cart} alt="" className='w-16 h-16'/>
        <p className='text-5xl font-bold text-gray-700'>SHOOPER</p>
      </div>
      <ul className="cursor-pointer flex gap-3 justify-between px-8 uppercase">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <div className="social-icon flex list-none text-xl">
        <div className="icon-con p-3 pb-2 bg-white border-s-violet-100">
            <img src={gram} alt=""className='w-8 h-8' />
        </div>
        <div className="icon-con icon-con p-3 pb-2 bg-white border-s-violet-100">
            <img src={sap} alt="" className='w-8 h-8'/>
        </div>
        <div className="icon-con icon-con p-3 pb-2 bg-white border-s-violet-100">
            <img src={pin} alt="" className='w-8 h-8'/>
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-8 w-full mb-8 text-xl text-gray-700">
        <hr className='w-[80%] border-none rounded-xl h-1 bg-gray-500 '/>
        <p>Copyright @ 2024 - All RIght Reserved</p>
      </div>
    </div>
  )
}

export default Footer
