import { RootState } from "./store";

export const selectCatalog = (state: RootState) =>
	state.catalog.items;
export const selectIsLoading = (state: RootState) =>
	state.catalog.isLoading;
export const selectError = (state: RootState) => state.catalog.error;
export const selectFavorites = (state: RootState) =>
	state.catalog.favorites;
export const selectFilters = (state: RootState) => state.filters;
