import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./sort/sortSlice.js";

export const store = configureStore({
	reducer: { sort: sortReducer },
});
