import {combineReducers, AnyAction, Reducer} from '@reduxjs/toolkit';

//Slices
import cartReducer from '@redux/slices/cartSlice';

//Services

const combinedReducer = combineReducers({
  //Slices
  cart: cartReducer,

  //Services
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return combinedReducer(state, action);
};

export default rootReducer;
