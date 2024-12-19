import React, { useContext } from 'react'
import star from '../assets/star.png'
import blackStar from '../assets/starBlack.png'
import { ShopContext } from '../../context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart}=useContext(ShopContext);
  return (
    <div className='flex mx-[170px] my-6 gap-5' >
      <div className="left flex gap-4">
            <div className="img-list flex flex-col gap-4">
                <img src={product.image} alt=""  className='w-20 h-24' />
                <img src={product.image} alt=""  className='w-20 h-24 ' />
                <img src={product.image} alt=""  className='w-20 h-24' />
                </div>
            <div className="display-img">
                <img src={product.image} alt="" className='w-72 h-96 ' />
            </div>
      </div>
      <div className="right">
      <h1 className='text-4xl  font-bold text-gray-700 '>{product.name}</h1>
      <div className="right my-3 mx-0 flex"> 
        <img src={star} alt=""  className='w-5 h-5' />
        <img src={star}  alt=""  className='w-5 h-5' />
        <img src={star}  alt=""  className='w-5 h-5' />
        <img src={star}  alt=""  className='w-5 h-5' />
        <img src={blackStar} alt=""  className='w-5 h-5' />
        <p>(122)</p>
        </div>
      <div className="right-prices flex my-4 mx-0 text-2xl font-semibold gap-4">
        <div className="old-price text-gray-600 line-through">${product.old_price}</div>
        <div className="new-price text-red-400">${product.new_price}</div>
      </div>
      <div className="right-des">
        A light weught, usually knitted, pullover shirt, close-fitting and 
      </div>
      <div className="right-sizes mt-4 font-semibold">
        <h1 className='text-xl'>Select Size</h1>
        <div className="sizes flex mx-0 my-4 gap-5">
            <div className="py-2 px-4 cursor-pointer bg-slate-400 text-white border rounded-sm">S</div>
            <div className="py-2 px-4 cursor-pointer bg-slate-400 text-white border rounded-sm">M</div>
            <div className="py-2 px-4  cursor-pointer bg-slate-400 text-white border rounded-sm">L</div>
            <div className="py-2 px-4 cursor-pointer bg-slate-400 text-white border rounded-sm">XL</div>
            <div className="py-2 px-4  cursor-pointer bg-slate-400 text-white border rounded-sm">XXL</div>
        </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='text-white px-4 py-2 cursor-pointer bg-red-500 w-72'>ADD TO CART</button>
        <div className="my-4 font-medium ">
      <p className="right-category"> <span>Category :</span> Women, T-shirt, Gowns </p>
      <p className="right-category"> <span>Tags :</span> Latest, Modern </p>
      </div>
    </div>
    </div>
  )
}

export default ProductDisplay
