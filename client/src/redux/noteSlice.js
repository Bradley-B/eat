import { createSlice } from '@reduxjs/toolkit'

const initialNoteState = {
    text: "loading... please do not touch anything!"
};

export const noteSlice = createSlice({
    name: 'notes',
    initialState: initialNoteState,
    reducers: {
        updateNotes: {
            reducer: (state, action) => {
                state.text = action.payload.text;
            },
            prepare: (text) => {
                return { payload: {text}}
            }
        },
    }
});

export const { updateNotes } = noteSlice.actions;

export default noteSlice.reducer;
