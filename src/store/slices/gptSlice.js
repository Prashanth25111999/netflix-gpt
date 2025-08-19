import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        isGptSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        addSearchValue: (state) => {
            state.isGptSearch = !state.isGptSearch
        },
        addGptMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults; // not movieNames again
        }
    }
})

export default gptSlice.reducer
export const { addSearchValue, addGptMovieResults } = gptSlice.actions