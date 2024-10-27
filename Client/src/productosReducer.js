// src/reducers/productosReducer.js
const initialState = {
    productos: [],
  };
  
  export const productosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTOS':
        return { ...state, productos: action.payload };
      default:
        return state;
    }
  };
  