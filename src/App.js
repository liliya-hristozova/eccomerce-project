import React from 'react';
import Header from './Header/index';
import ProductList from './ProductList/index';
import './data';

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <ProductList />
    </div>
  </div>
);

export default App;
