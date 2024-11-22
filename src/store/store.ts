// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import poemReducer from './slices/poemSlices'; 

export const store = configureStore({
  reducer: {
    poems: poemReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 