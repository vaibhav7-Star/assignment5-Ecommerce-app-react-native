

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Combinereducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
