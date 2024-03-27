import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { fetchContacts } from "../redux/contactsOps";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  loading: false,
  error: false,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;

export const selectContact = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
