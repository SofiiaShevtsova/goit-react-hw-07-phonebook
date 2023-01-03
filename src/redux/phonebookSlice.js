import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const statusProgress = (state, action) => {
  state.isLoading = true;
};

const statusError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    getContactsProgress: statusProgress,
    getContactsSuccess: (state, action) => {
      state.contacts = [...action.payload];
      state.isLoading = false;
      state.error = null;
    },
    getContactsError: statusError,
    addContactProgress: statusProgress,
    addContactSuccess: (state, action) => {
      if (state.contacts.find(elem => elem.name === action.payload.name)) {
        alert('You have this contacts');
        state.isLoading = false;
        state.error = null;
        return state;
      }
      state.isLoading = false;
      state.error = null;
      state.contacts = [...state.contacts, action.payload];
    },
    addContactError: statusError,
    removeContactProgress: statusProgress,
    removeContactSuccess: (state, action) => {
      state.contacts = state.contacts.filter(
        elem => elem.id !== action.payload
      );
      state.isLoading = false;
      state.error = null;
    },
    removeContactError: statusError,
    findContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  getContactsProgress,
  getContactsSuccess,
  getContactsError,
  addContactProgress,
  addContactSuccess,
  addContactError,
  removeContactError,
  removeContactProgress,
  removeContactSuccess,
  findContact,
} = phonebookSlice.actions;

export default phonebookSlice.reducer;
