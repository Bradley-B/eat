import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialNoteState = {
    text: "loading... please do not touch anything!",
    loading: false,
    error: false
};

export const fetchNotesAsync = createAsyncThunk(
  'notes/get',
  async (person, thunkApi) => {
      let response = await fetch(`/api/get/notes/${person}`, {method: 'GET'});
      response = await response.json();
      thunkApi.dispatch(updateNotes(response.notes));
      return response.notes;
  }
);

export const putNotesAsync = createAsyncThunk(
  'notes/put',
  async (person, thunkApi) => {
      const dto = {notes: thunkApi.getState().notes.text};
      const response = await fetch(`/api/update/notes/${person}`, {
          method: 'PUT',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify(dto)
      });
      return response.ok;
  }
);

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
    },
    extraReducers: {
        [fetchNotesAsync.pending]: (state) => setPending(state),
        [fetchNotesAsync.fulfilled]: (state) => setFulfilled(state),
        [fetchNotesAsync.rejected]: (state) => setRejected(state),
        [putNotesAsync.pending]: (state) => setPending(state),
        [putNotesAsync.fulfilled]: (state) => setFulfilled(state),
        [putNotesAsync.rejected]: (state) => setRejected(state)
    }
});

function setPending(state) {
    state.loading = true;
    state.error = false;
}

function setRejected(state) {
    state.loading = false;
    state.error = true;
}

function setFulfilled(state) {
    state.loading = false;
    state.error = false;
}

export const { updateNotes } = noteSlice.actions;

export default noteSlice.reducer;
