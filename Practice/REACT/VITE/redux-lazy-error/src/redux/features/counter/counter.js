import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	initialState: 0,
	name: "counter",
	reducers: {
		increment: (state) => state + 10,
		decrement: (state) => state - 10,
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
