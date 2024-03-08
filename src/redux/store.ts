import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

import { filterReducer } from "./filterSlice";
import { CatReducer, reducer } from "./catalogReducer";

const persistConfig = {
	key: "catalog",
	storage,
	whitelist: ["favorites"],
};

export const store = configureStore({
	reducer: {
		catalog: persistReducer<CatReducer>(persistConfig, reducer),
		filters: filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
	// devTools: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
