import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://65283a8c931d71583df210de.mockapi.io/adverts";

export const fetchCatalog = createAsyncThunk(
	"catalog/fetchCatalog",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${baseURL}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
