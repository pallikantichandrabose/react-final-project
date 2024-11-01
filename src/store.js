// Importing necessary functions from Redux Toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Creating a slice to manage product data
const productSlice = createSlice({
    // Name of the slice, useful for action types in Redux dev tools and debugging
    name: 'products',

    // Initial state containing two categories of products: 'veg' and 'nonveg'
    initialState: {
        veg: [
            { name: 'Tomato', price: 200.5 },
            { name: 'Potato', price: 100.8 },
            { name: 'Carrot', price: 124.5 },
            { name: 'Bell Pepper', price: 188.2 }
        ],
        nonveg: [
            { name: 'Chicken', price: 260.9 },
            { name: 'Mutton', price: 700.65 },
            { name: 'Fish', price: 298.65 },
            { name: 'Prawns', price: 530.65 }
        ]
    },

    // Reducers section left empty as no actions are needed to modify product data in this slice
    reducers: {}
});

// Creating a slice to manage cart functionality
const cartSlice = createSlice({
    // Name of the slice for identifying actions and debugging
    name: 'cart',

    // Initial state for the cart, represented as an empty array to store items added to the cart
    initialState: [],

    // Reducers for cart actions
    reducers: {
        // Action to add an item to the cart
        addToCart: (state, action) => {
            // Check if the item already exists in the cart based on its name
            const item = state.find(item => item.name === action.payload.name);

            // If the item exists, increment its quantity
            if (item) {
                item.quantity += 1;
            } else {
                // If the item does not exist, add it to the cart with a quantity of 1
                state.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },

        // Action to increment the quantity of a specific cart item
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },

        // Action to decrement the quantity of a specific cart item
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);

            // Decrease quantity if the item exists and has quantity greater than 1
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item) {
                // Remove item from cart if quantity reaches 0 (optional functionality)
                return state.filter(item => item.name !== action.payload.name);
            }
        },

        // Action to remove an item completely from the cart
        removeFromCart: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        }
    }
});

// Exporting cart actions for use in components
export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

// Configuring the Redux store to combine product and cart reducers
const store = configureStore({
    reducer: {
        // Adding the product slice to the store under the key 'products'
        products: productSlice.reducer,

        // Adding the cart slice to the store under the key 'cart'
        cart: cartSlice.reducer
    }
});

// Exporting the store for use in the application
export default store;
