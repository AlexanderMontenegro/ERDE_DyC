// src/store/articuloSlice.js
import { createSlice } from '@reduxjs/toolkit';

const articuloSlice = createSlice({
  name: 'articulos',
  initialState: {
    lista: [],
  },
  reducers: {
    setArticulos: (state, action) => {
      state.lista = action.payload;
    },
  },
});

export const { setArticulos } = articuloSlice.actions;

export default articuloSlice.reducer;
