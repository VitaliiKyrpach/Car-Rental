import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://65283a8c931d71583df210de.mockapi.io/adverts";

type Car = any;

// interface ValidationErrors {
// 	error: { message: string };
// }

export const fetchCatalog = createAsyncThunk<
	Car[],
	undefined,
	{ rejectValue: string | null }
>("catalog/fetchCatalog", async (_, { rejectWithValue }) => {
	try {
		const response = await axios.get(`${baseURL}`);
		return response.data;
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});
