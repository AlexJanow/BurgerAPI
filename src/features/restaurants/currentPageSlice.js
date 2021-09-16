import { createSlice } from "@reduxjs/toolkit"

const currentPageSlice = createSlice({
    name: "currentPage",
    initialState: {
        currentPage: 1
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

export const { setCurrentPage } = currentPageSlice.actions

export default currentPageSlice.reducer