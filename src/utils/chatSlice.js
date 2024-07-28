import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        messages : []
    },
    reducers : {
        addMessage : (state, action) => {
            state.messages.slice(LIVE_CHAT_COUNT, 5);
            state.messages.unshift(action.payload);
        }
    }
});

export const { addMessage } = chatSlice.actions;   

export default chatSlice.reducer;