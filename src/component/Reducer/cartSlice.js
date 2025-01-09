import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  totalQuantity: JSON.parse(localStorage.getItem('cartTotalQuantity')) || 0,
  totalAmount: JSON.parse(localStorage.getItem('cartTotalAmount')) || 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItemIndex >= 0) {
        // Item already exists in the cart, update quantity and totalPrice
        state.items[existingItemIndex].quantity += 1;
        // state.items[existingItemIndex].totalPrice += newItem.price;
        state.items[existingItemIndex].totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // Item does not exist in the cart, add it
        newItem.quantity = 1;
        newItem.totalPrice = newItem.price;
        state.items.push(newItem);
      }

      // Update the totalQuantity and totalAmount
      state.totalQuantity += 1;
      state.totalAmount += newItem.price;

      // Save the updated state to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('cartTotalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('cartTotalAmount', JSON.stringify(state.totalAmount));
    },
    removeFromCart(state, action) {
      const { id, size } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id && item.size === size);
      
      if (itemIndex >= 0) {
        // Update total quantity and total price
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice -= item.price;
        } else {
          // Remove item from the cart completely
          state.items.splice(itemIndex, 1);
        }

        // Update totalQuantity and totalAmount
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;

        // Save the updated state to localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('cartTotalQuantity', JSON.stringify(state.totalQuantity));
        localStorage.setItem('cartTotalAmount', JSON.stringify(state.totalAmount));
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      // Clear cart data from localStorage
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartTotalQuantity');
      localStorage.removeItem('cartTotalAmount');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
