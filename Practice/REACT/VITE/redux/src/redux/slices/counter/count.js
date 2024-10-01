import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  initialState:0,
  name:'counter',
  reducers:{
      incrementCount : (state) => state + 1,
      decrementCount : (state) => state - 1,
  }
})

export const {incrementCount,decrementCount} = counter.actions;
export default counter.reducer;