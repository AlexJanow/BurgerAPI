import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getBurger = createAsyncThunk(
    "burger/getBurger",
    async ({ dispatch, getState }) => {
        return fetch(
            `https://my-burger-api.herokuapp.com/burgers`
        ).then((res) => res.json())

    }
)
const burgerSlice = createSlice({
    name: "burger",
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [getBurger.pending]: (state, action) => {
            state.status = "loading"
        },
        [getBurger.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.status = "success"
        },
        [getBurger.rejected]: (state, action) => {
            state.status = "failed"
        },
    },
})

export const selectBurger = ({ burger }) => burger

export default burgerSlice.reducer