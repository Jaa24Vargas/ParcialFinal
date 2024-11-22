import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Poem {
  id: string;
  title: string;
  excerpt: string;
  author?: string;
  category?: string;
}

interface PoemState {
  poems: Poem[];
  loading: boolean;
  error: string | null;
}

const initialState: PoemState = {
  poems: [],
  loading: false,
  error: null,
};

const poemSlice = createSlice({
  name: "poems",
  initialState,
  reducers: {
    setPoems: (state, action: PayloadAction<Poem[]>) => {
      state.poems = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addPoem: (state, action: PayloadAction<Poem>) => {
      state.poems.push(action.payload);
    },
    removePoem: (state, action: PayloadAction<string>) => {
      state.poems = state.poems.filter((poem) => poem.id !== action.payload);
    },
  },
});

export const { setPoems, setLoading, setError, addPoem, removePoem } =
  poemSlice.actions;

export default poemSlice.reducer;
