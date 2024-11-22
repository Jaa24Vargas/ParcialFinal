import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPoems = createAsyncThunk(
  "poems/fetchPoems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://poetrydb.org/poemcount/20");
      if (response.status !== 200 || !response.data) {
        throw new Error("No poems found.");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error || "Failed to fetch poems. Try again later."
      );
    }
  }
);
