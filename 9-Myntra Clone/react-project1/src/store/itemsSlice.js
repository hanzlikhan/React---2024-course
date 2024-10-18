import { createSlice } from "@reduxjs/toolkit";


const itemsSlice = createSlice({
  name: "items",
  initialState: [],  // This should directly be the array of items
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload; // No need to modify the state if you're not adding items dynamically yet
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;  // Export the reducer itself
