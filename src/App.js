import React from 'react';
import Header from './Header/index';
import ProductList from './ProductList/index';
import './App.css';


const App = () => (
  <div className="App">
    <Header />
    <div className="container product-list">
      <ProductList />
    </div>
  </div>
);

export default App;
