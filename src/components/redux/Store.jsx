import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './MovieSlice'
//  npm i redux react-redux @reduxjs/toolkit

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
