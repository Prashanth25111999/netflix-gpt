import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice"
import moviesReducer from "./slices/moviesSlice"
import gptReducer from "./slices/gptSlice"
import langConfigReducer from "./slices/langConfigSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        langConfig: langConfigReducer
    }
})

export default appStore