import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./modules/quoteReducer";
import weatherReducer from "./modules/weatherReducer";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    weather: weatherReducer,
  },
});

export default store;
