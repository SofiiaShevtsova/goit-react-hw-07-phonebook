import axios from "axios";
import {   getContactsProgress,
  getContactsSuccess,
  getContactsError,
  addContactProgress,
  addContactSuccess,
  addContactError,
  removeContactError,
  removeContactProgress,
  removeContactSuccess
  } from "./phonebookSlice";

axios.defaults.baseURL = "https://63af5dd2cb0f90e514726ce0.mockapi.io/contacts";

export const getContacts = () => async dispatch => {
    try {
      dispatch(getContactsProgress())
        const response = await axios.get("/contacts");
        dispatch(getContactsSuccess(response.data))
    } catch (e) {
        dispatch(getContactsError(e))
  }
};

export const addContact = (contact) => async dispatch => {
    try {
      dispatch(addContactProgress())
        const response = await axios.post("/contacts", contact);
        dispatch(addContactSuccess(response.data))
    } catch (e) {
        dispatch(addContactError(e))
  }
};

export const removeContact = (id) => async dispatch => {
    try {
      dispatch(removeContactProgress())
        const response = await axios.delete(`/contacts/${id}`);
        dispatch(removeContactSuccess(response.data.id))
    } catch (e) {
        dispatch(removeContactError(e))
  }
};
