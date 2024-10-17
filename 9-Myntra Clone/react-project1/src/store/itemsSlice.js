import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";  // Assuming this is an array of items

const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,  // This should directly be the array of items
  reducers: {
    addInitialItems: (state, action) => {
      return state; // No need to modify the state if you're not adding items dynamically yet
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;  // Export the reducer itself
