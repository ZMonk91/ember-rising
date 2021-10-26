import { configureStore } from "@reduxjs/toolkit";
import chatReducer from '../features/chat/chatSlice'
import userReducer from '../features/user/userSlice'
import skillsReducer from '../features/skills/skillsSlice'

export default configureStore({
    reducer: {
        chat: chatReducer,
        user: userReducer,
        skills: skillsReducer
    }
})