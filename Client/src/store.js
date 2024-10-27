// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import articuloReducer from './articuloSlice';

export const store = configureStore({
  reducer: {
    articulos: articuloReducer,
  },
});
