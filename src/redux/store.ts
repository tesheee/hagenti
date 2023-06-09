import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import filter from "./slices/filterSlice";
import products from "./slices/productsSlice";
import search from "./slices/searchSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    cart,
    filter,
    products,
    search,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispath = typeof store.dispatch

export const useAppDispath = () => useDispatch<AppDispath>()