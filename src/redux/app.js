import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  address: "",
  balance: 0,
  connected: false,
  loading: false,
  currentPage: "mint",
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
  },
});

// Actions
export const {
  setAddress,
  setBalance,
  setConnected,
  setLoading,
  setCurrentPage,
} = app.actions;

// Selectors
export const selectAddress = (state) => state.app.address;
export const selectBalance = (state) => state.app.balance;
export const selectConnected = (state) => state.app.connected;
export const selectLoading = (state) => state.app.loading;
export const selectCurrentPage = (state) => state.app.currentPage;

// Reducer
export default app.reducer;
