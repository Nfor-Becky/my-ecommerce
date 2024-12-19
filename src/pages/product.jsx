import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDIsplay/ProductDisplay';
import Description from '../components/Description/Description';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Product not found!</div>; // Handle product not found
    }

    return (
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product}/>
            <Description/>
            <RelatedProducts/>
        </div>
    );
}

export default Product;