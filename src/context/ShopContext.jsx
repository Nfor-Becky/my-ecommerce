import React, { createContext, useState } from 'react';
import all_products from '../components/assets/all_products';

export const ShopContext = createContext(); 
const getDefault = () =>{
    let cart = {};
    for(let index=0; index<all_products.length;index++){
        cart[index]=0;
    }
    return cart;
   } 
export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefault)

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const [products] = useState(all_products, cartItems,addToCart,removeFromCart);
    return (
        <ShopContext.Provider value={{ all_products: products }}>
            {children}
        </ShopContext.Provider>
    );
};
export default ShopProvider; 