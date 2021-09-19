import { configureStore, current } from "@reduxjs/toolkit";
import burgerReducer from "../features/restaurants/burgerSlice"
import itemsPerPageReducer from "../features/restaurants/itemsPerPageSlice";
import currentPageReducer from "../features/restaurants/currentPageSlice"
export default configureStore({
    reducer: {
        burger: burgerReducer,
        itemsPerPage: itemsPerPageReducer,
        currentPage: currentPageReducer,
    }
})