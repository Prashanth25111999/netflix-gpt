import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        isGptSearch: false
    },
    reducers: {
        addSearchValue: (state) => {
            state.isGptSearch = !state.isGptSearch
        }
    }
})

export default gptSlice.reducer
export const { addSearchValue } = gptSlice.actions