import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false
  },  // This should directly be the array of items
  reducers: {
    markFetchDone: (state) => {
      return state.fetchDone = true; // No need to modify the state if you're not adding items dynamically yet
    },
    markFetchingStarted: (state) => {
      return state.currentlyFetching = true; // No need to modify the state if you're not adding items dynamically yet
    },
    markFetchingFinished: (state) => {
      return state.currentlyFetching = false; // No need to modify the state if you're not adding items dynamically yet
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;  // Export the reducer itself
