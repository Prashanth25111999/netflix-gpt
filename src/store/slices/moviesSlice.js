import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        trailersVideo: []
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailers: (state, action) => {
            state.trailersVideo = action.payload
        }
    }
})

export default nowPlayingMoviesSlice.reducer;
export const { addNowPlayingMovies, addTrailers } = nowPlayingMoviesSlice.actions