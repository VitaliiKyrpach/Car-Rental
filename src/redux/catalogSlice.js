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
	reducers: {
		addCard(state, action) {
			state.favorites.push(action.payload);
		},
		removeCard(state, action) {
			const index = state.favorites.findIndex(
				(item) => item.id === action.payload
			);
			state.favorites.splice(index, 1);
		},
	},
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

export const { addCard, removeCard } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
