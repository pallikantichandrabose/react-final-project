/* eslint-disable no-unused-vars */
// Importing necessary dependencies and Redux actions for managing the cart
import React, { useState } from 'react';                   // React and useState for managing component state
import { useDispatch, useSelector } from 'react-redux';    // Redux hooks for dispatching actions and selecting state
import { decrementQuantity, incrementQuantity, removeFromCart } from './store'; // Cart action creators
import './Cart.css';                                       // CSS file for styling the Cart component
import { CiDiscount1 } from 'react-icons/ci';              // Icon library for discount icon in the component

// Main Cart component function
function Cart() {
  const dispatch = useDispatch();                          // Hook to dispatch actions to Redux store
  const cartItems = useSelector((state) => state.cart);    // Selects cart items from Redux state

  // State variables to manage discounts, coupon codes, and messages
  const [discountPercentage, setDiscountPercentage] = useState(0);  // Selected discount percentage
  const [couponCode, setCouponCode] = useState('');                 // Coupon code input by the user
  const [couponDiscount, setCouponDiscount] = useState(0);          // Discount from a valid coupon code
  const [couponMessage, setCouponMessage] = useState('');           // Feedback message for coupon validation

  // Function to validate the coupon code and apply a discount
  const handleApplyCoupon = () => {
    if (couponCode === 'SAVE10') {                       // Check if coupon code is valid
      setCouponDiscount(10);                             // Set 10% discount for valid code
      setCouponMessage('Valid coupon code');             // Message for valid coupon
    } else {
      setCouponDiscount(0);                              // Reset discount for invalid code
      setCouponMessage('Invalid coupon code');           // Message for invalid coupon
    }
  };

  // Helper function to calculate total values based on cart items, discount, and coupon
  const calculateTotal = () => {
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0); // Total item quantity
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0); // Total price before discounts
    
    // Combine selected discount and coupon discount
    const totalDiscountPercentage = discountPercentage + couponDiscount; 
    const discountAmount = (totalPrice * totalDiscountPercentage) / 100; // Calculate discount amount
    const deliveryCharge = totalPrice > 500 ? 0 : 50;                    // Free delivery for orders over $500
    const finalTotal = totalPrice + deliveryCharge - discountAmount;     // Calculate final amount after discounts

    return {
      totalQuantity,
      totalPrice,
      discountAmount,
      deliveryCharge,
      finalTotal,
      totalDiscountPercentage // Total discount for displaying in summary
    };
  };

  // Destructure the calculated values for easy usage in JSX
  const { totalQuantity, totalPrice, discountAmount, deliveryCharge, finalTotal, totalDiscountPercentage } = calculateTotal();

  // Function to apply a direct discount percentage
  const applyDiscount = (percentage) => {
    setDiscountPercentage(percentage);
  };

  return (
    <>
      <h2 style={{ color: 'rebeccapurple' }}>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>                         // Display message if cart is empty
      ) : (
        <ul>
          {cartItems.map((item, index) => (               // Map through cart items to render each item
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)} <br />
              <button onClick={() => dispatch(decrementQuantity(item))}>-</button>  {/* Decrease item quantity */}
              {item.quantity}                                              {/* Display item quantity */}
              <button onClick={() => dispatch(incrementQuantity(item))}>+</button>  {/* Increase item quantity */}
              <button onClick={() => dispatch(removeFromCart(item))}>Delete</button> {/* Remove item */}
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (                             // Display totals and discounts if cart is not empty
        <>
          <h2>Total Amount</h2>
          <div className="cart-summary">
            <p className="summary-label">Items:</p>           {/* Display total item count */}
            <p className="summary-value">{totalQuantity}</p>

            <p className="summary-label">Delivery:</p>        {/* Display delivery charge */}
            <p className="summary-value">${deliveryCharge.toFixed(2)}</p>

            <p className="summary-label">Total:</p>           {/* Display total price before discount */}
            <p className="summary-value">${totalPrice.toFixed(2)}</p>

            <p className="summary-label">Discount Applied:</p> {/* Display combined discount percentage and amount */}
            <p className="summary-value">{totalDiscountPercentage}% (-${discountAmount.toFixed(2)})</p>

            <p className="summary-label">Final Total:</p>     {/* Display final total price after discount and delivery */}
            <p className="summary-value">${finalTotal.toFixed(2)}</p>
          </div>

          {/* Buttons for applying different discount percentages */}
          <div className="discount-buttons">
            <button onClick={() => applyDiscount(10)}><CiDiscount1 /> 10% Discount</button>
            <button onClick={() => applyDiscount(20)}><CiDiscount1 /> 20% Discount</button>
            <button onClick={() => applyDiscount(30)}><CiDiscount1 /> 30% Discount</button>
          </div>

          {/* Input field and button for applying a coupon code */}
          <div className="coupon-code">
            <input
              type="text"
              placeholder="Enter coupon code"                // Placeholder text for coupon input
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)} // Update couponCode state with input
            />
            <button onClick={handleApplyCoupon}>Apply Coupon</button>  {/* Button to validate and apply coupon */}
            <p>{couponMessage}</p>    {/*Display message for coupon validation */}
          </div>
        </>
      )}
    </>
  );
}

export default Cart;  // Export the Cart component for use in other parts of the app
