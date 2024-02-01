import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./catalogOperations";

const handlePending = (state) => {
	state.isLoading = true;
};
const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const catalogSlice = createSlice({
	name: "catalog",
	initialState: {
		items: [],
		favorites: [],
		isLoading: false,
		error: null,
	},
	// reducers: {
	// 	handleSuccess(state, action) {
	// 		state.success = action.payload;
	// 	},
	// },
	extraReducers: (builder) =>
		builder
			.addCase(fetchCatalog.pending, handlePending)
			.addCase(fetchCatalog.rejected, handleRejected)
			.addCase(fetchCatalog.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload;
			}),
});

export const catalogReducer = catalogSlice.reducer;
