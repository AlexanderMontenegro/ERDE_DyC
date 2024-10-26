import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const createProduct = (productData) => axios.post(`${API_URL}/products`, productData, { withCredentials: true });
export const updateProduct = (id, updatedData) => axios.put(`${API_URL}/products/${id}`, updatedData, { withCredentials: true });
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`, { withCredentials: true });
