import React from 'react';
import Product from '../Product/index';
import productsData from '../data';

const ProductList = () => (
    <div className="row">
        { productsData.map((productData) => (
            <Product product={productData} key={productData.id}/>
        ))}
    </div>
);

export default ProductList;