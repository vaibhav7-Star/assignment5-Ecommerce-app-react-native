import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        Add:(state,action)=>{
   state.push(action.payload)
        },
         Remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
        }
    }
)

export const {Add, Remove} = cartSlice.actions;

export default cartSlice.reducer;
