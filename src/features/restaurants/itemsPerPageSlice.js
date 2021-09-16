import { createSlice } from "@reduxjs/toolkit";

const itemsPerPageSlice = createSlice({
    name: "itemsPerPage",
    initialState: {
        items: 5,
    },
    reducers: {
        fivePerPage: state => { state.items = 5 },
        tenPerPage: state => { state.items = 10 },
        loadMore: state => { state.items += 5 },
    }
})

export const { fivePerPage, tenPerPage, loadMore } = itemsPerPageSlice.actions

export default itemsPerPageSlice.reducer