import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "../features/restaurants/burgerSlice"
import itemsPerPageReducer from "../features/restaurants/itemsPerPageSlice";

export default configureStore({
    reducer: {
        burger: burgerReducer,
        itemsPerPage: itemsPerPageReducer
    }
})