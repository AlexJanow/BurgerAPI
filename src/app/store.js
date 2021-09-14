import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "../features/restaurants/burgerSlice"

export default configureStore({
    reducer: {
        burger: burgerReducer
    }
})