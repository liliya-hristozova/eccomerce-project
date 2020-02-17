import React from 'react';
import './productPrice.css';

const ProductPrice = ({ price }) => (
    <p className="product-price">
        Price:
        <span>
            {price.toFixed(2)}$
        </span>
    </p>
);

export default ProductPrice;