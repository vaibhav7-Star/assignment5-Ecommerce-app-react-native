



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser(state, action) {
      state.users.push(action.payload); 
    },
  },
});

export const { registerUser } = authSlice.actions;

export default authSlice.reducer;



