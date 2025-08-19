import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailersVideo: [],
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrailers: (state, action) => {
            state.trailersVideo = action.payload
        }
    }
})

export default nowPlayingMoviesSlice.reducer;
export const { addNowPlayingMovies, addTrailers, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = nowPlayingMoviesSlice.actions