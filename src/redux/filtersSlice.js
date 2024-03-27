import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    filterContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export default slice.reducer;

export const { filterContacts } = slice.actions;

export const selectFilter = (state) => state.filters.name;
