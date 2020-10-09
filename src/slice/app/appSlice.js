import { createSlice } from '@reduxjs/toolkit'


const appSlice = createSlice({
    name: `todos`,
    initialState: {
        initialized: false,
    },
    reducers: {
        initializedSuccess(state, action) {
            state.initialized = true
        }
    }
})


export const { initializedSuccess } = appSlice.actions

export default appSlice.reducer