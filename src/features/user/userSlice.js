import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'User',
        level: 1,
        totalLevel: 1,
        gold: 100,
        currHp: 20,
        maxHp: 20,
        currMp: 2,
        maxMp: 2
    },
    reducers: {
        changeUsername: (state, action) => {
            state.username = action.payload
        }
    }
})

export const {changeUsername} = userSlice.actions;

export default userSlice.reducer;