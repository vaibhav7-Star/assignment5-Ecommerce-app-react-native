import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './Createslice';
import authReducer from './Authslice';

const rootReducer = combineReducers({
  counter: cartReducer,
  auth: authReducer,
});

export default rootReducer;
