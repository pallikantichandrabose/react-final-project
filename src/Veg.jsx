/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';

function Veg() {
  const vegProducts = useSelector((state) => state.products.veg);

  return (
    <ProductList products={vegProducts} title="Veg Products" />
  );
}

export default Veg;
