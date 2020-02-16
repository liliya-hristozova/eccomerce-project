import React from 'react';
import './product.css';


const Product = ({ product }) => (
    <div className="col-md-4">
        <div className="product-tile card mb-4 shadow-sm">
            <img className="product-image bd-placeholder-img card-img-top" src={product.image} alt={product.title} />
            <div className="card-body">
                <span className="product-brand">{product.brand}</span>
                <span className="product-title">{product.title}</span>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="product-raiting">{product.raiting}</div>
                    <span className="product-price">{product.price.toFixed(2)}$</span>
                </div>
                
            </div>
        </div>
    </div>

);


export default Product;