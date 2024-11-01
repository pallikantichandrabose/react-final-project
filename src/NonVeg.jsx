/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';

function NonVeg() {
  const nonVegProducts = useSelector((state) => state.products.nonveg);

  return (
    <ProductList products={nonVegProducts} title="Non-Veg Products" />
  );
}

export default NonVeg;
