import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../slices/weatherSlices.js';

const store = configureStore({
    reducer: weatherReducer,
});

export default store;