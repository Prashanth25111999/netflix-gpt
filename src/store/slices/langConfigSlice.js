import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en"
    },
    reducers: {
        addLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
})
export default langConfigSlice.reducer
export const { addLanguage } = langConfigSlice.actions