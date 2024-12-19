import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/items/items';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  
  const filteredProducts = all_products.filter(item => item.category === props.category);
  console.log('Filtered Products:', filteredProducts); // Debugging line

  return (
    <div className=' m-auto'>
      <img src={props.banner} alt="" className='h-[50vh] w-[82%] my-8 mx-auto' />
      <div className="indexsort flex my-0 mx-40 justify-between items-center gap-3">
        <p className=" font-bold">
          <span>Showing 1-{filteredProducts.length}</span> out of {all_products.length} products
        </p>
        <div className="sort border rounded-full py-2 px-4 bg-slate-200">
          sort by <img src="" alt="" />
        </div>
      </div>
      <div className="mx-40 my-5 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default ShopCategory;