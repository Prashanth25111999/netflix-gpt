import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice"
import moviesReducer from "./slices/moviesSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
})

export default appStore