import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCatalog } from "./catalogOperations";

export interface Card {
	id: number;
	year: number;
	make: string;
	model: string;
	type: string;
	img: string;
	description: string;
	fuelConsumption: string;
	engineSize: string;
	accessories: string[];
	functionalities: string[];
	rentalPrice: string;
	rentalCompany: string;
	address: string;
	rentalConditions: string;
	mileage: number;
}
export interface InitState {
	items: Card[];
	favorites: Card[];
	isLoading: Boolean;
	error: null | string | undefined;
}
const catalogInitState: InitState = {
	items: [],
	favorites: [],
	isLoading: false,
	error: null,
};

const catalogSlice = createSlice({
	name: "catalog",
	initialState: catalogInitState,
	reducers: {
		addCard(state, action: PayloadAction<Card>) {
			state.favorites.push(action.payload);
		},
		removeCard(state, action: PayloadAction<number>) {
			const index = state.favorites.findIndex(
				(item) => item.id === action.payload
			);
			state.favorites.splice(index, 1);
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchCatalog.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCatalog.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchCatalog.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload;
			}),
});

export const { addCard, removeCard } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
