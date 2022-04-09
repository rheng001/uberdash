import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@redux/store';

interface SelectedItems {
  items: Array<any>;
  restaurantName: string;
}
// Define a type for the slice state
interface CartState {
  selectedItems: SelectedItems;
}

// Define the initial state using that type
const initialState: CartState = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<SelectedItems>) => {
    addToCart: (state, action) => {
      let newState = {...state};

      if (action.payload.checkboxValue) {
        console.log('ADD TO CART');
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.resturantName,
        };
      } else {
        console.log('REMOVE TO CART');

        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              item => item.title !== action.payload.title,
            ),
          ],
          restaurantName: action.payload.resturantName,
        };
      }
      return newState;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

//Select slice name to get access to states
export const cartSelector = (state: {cart: CartState}) => state.cart;

export const {addToCart} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedItems = (state: RootState) =>
  state.cart.selectedItems.items;

export default cartSlice.reducer;
