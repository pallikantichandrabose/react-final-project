/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// Importing necessary dependencies
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './store';

// ProductList component to display a list of products and add items to the cart
function ProductList({ products, title }) {
  // Setting up the Redux dispatch function to send actions to the store
  const dispatch = useDispatch();

  // Handler function to dispatch the addToCart action for a specific product
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Mapping over the products array to create a list of items with add-to-cart functionality
  const items = products.map((product, index) => (
    <li key={index}>
      {/* Displaying product name and price */}
      {product.name} - ${product.price.toFixed(2)}
      {' '}
      {/* Button to add the product to the cart, calls handleAddToCart on click */}
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </li>
  ));

  return (
    <>
      {/* Title of the product list, passed as a prop */}
      <h2 style={{ color: 'tomato' }}>{title}</h2>
      
      {/* Rendering the list of product items */}
      <ul>{items}</ul>
    </>
  );
}

// Exporting ProductList component as default for usage in other files
export default ProductList;
