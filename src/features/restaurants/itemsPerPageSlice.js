import { createSlice } from "@reduxjs/toolkit";

const itemsPerPageSlice = createSlice({
    name: "itemsPerPage",
    initialState: {
        items: 5,
    },
    reducers: {
        itemsPerPage: (state, action) => { state.items = action.payload },
        loadMore: state => { state.items += 5 },
    }
})

export const { itemsPerPage, loadMore } = itemsPerPageSlice.actions

export default itemsPerPageSlice.reducer