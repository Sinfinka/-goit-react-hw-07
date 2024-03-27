import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    prepare(value) {
      return {
        payload: {
          id: nanoid(),
          ...value,
        },
      };
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;

export const selectContact = (state) => state.contacts.items;
