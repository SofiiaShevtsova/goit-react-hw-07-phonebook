import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts:[],
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContactsToState: (state, action) => {
      if (state.contacts.find(elem => elem.name === action.payload.name)) {
      alert('You have this contacts');
      return state;
    }
      state.contacts = [...state.contacts, action.payload];
    },
    removeContactFromState: (state, action) => {
      state.contacts = state.contacts.filter(
        elem => elem.id !== action.payload
      );
    },
    findContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContactsToState, removeContactFromState, findContact } =
  phonebookSlice.actions;

export default phonebookSlice.reducer;
