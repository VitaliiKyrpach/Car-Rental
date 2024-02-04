import { createSlice } from "@reduxjs/toolkit";

const filterInitState = {
	brand: "",
	price: null,
	mileageFrom: null,
	mileageTo: null,
};

const filterSlice = createSlice({
	name: "filter",
	initialState: filterInitState,
	reducers: {
		interFilter(state, action) {
			return (state = action.payload);
		},
	},
});

export const { interFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
