import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  address: "",
  balance: 0,
  connected: false,
  loading: false,
  currentPage: "mint",
  colorMode: "light_mode",
  remaining: "Loading...",
};

// Slice
const app = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setConnected: (state, action) => {
      state.connected = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setColorMode: (state, action) => {
      state.colorMode = action.payload;
    },
    setRemaining: (state, action) => {
      state.remaining = action.payload;
    },
  },
});

// Actions
export const {
  setAddress,
  setBalance,
  setConnected,
  setLoading,
  setCurrentPage,
  setColorMode,
  setRemaining,
} = app.actions;

// Selectors
export const selectAddress = (state) => state.app.address;
export const selectBalance = (state) => state.app.balance;
export const selectConnected = (state) => state.app.connected;
export const selectLoading = (state) => state.app.loading;
export const selectCurrentPage = (state) => state.app.currentPage;
export const selectColorMode = (state) => state.app.colorMode;
export const selectRemaining = (state) => state.app.remaining;

// Reducer
export default app.reducer;
