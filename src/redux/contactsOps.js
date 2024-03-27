import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://660403ad2393662c31d05e97.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = axios.get("/contacts");
    return (await response).data;
  }
);
