import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Filters {
	brand: string;
	price: null | number | string;
	mileageFrom: null | number | string;
	mileageTo: null | number | string;
}

const filterInitState: Filters = {
	brand: "",
	price: null,
	mileageFrom: null,
	mileageTo: null,
};

const filterSlice = createSlice({
	name: "filter",
	initialState: filterInitState,
	reducers: {
		interFilter(state, action: PayloadAction<Filters>) {
			return (state = action.payload);
		},
	},
});

export const { interFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
