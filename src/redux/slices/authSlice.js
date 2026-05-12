import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/axios.js";

export const fetchAuth = createAsyncThunk("auth/fethcAuth", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});

export const fetchAuthMe = createAsyncThunk(
  "auth/fetchAuthMe",
  async (params) => {
    const { data } = await axios.get("/auth/me", params);
    return data;
  },
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/auth/register", params);
    return data;
  },
);

const initialState = {
  dataUser: null,
  status: "loading",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.dataUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = "loading";
      state.dataUser = null;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.dataUser = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.dataUser = null;
      state.status = "error";
    });

    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = "loading";
      state.dataUser = null;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.dataUser = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.dataUser = null;
      state.status = "error";
    });

    builder.addCase(fetchRegister.pending, (state) => {
      state.status = "loading";
      state.dataUser = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.dataUser = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.dataUser = null;
      state.status = "error";
    });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
