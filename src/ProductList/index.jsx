import React from 'react';
import Product from '../Product/index';
import productsData from '../data';
import ProductPrice from '../ProductPrice/index';

const ProductList = () => (
    <div className="row">
        { productsData.map((productData) => (
            <Product product={productData} key={productData.id} Price={ProductPrice}/>
        ))}
    </div>
);

export default ProductList;