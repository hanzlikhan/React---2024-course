import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";  // Note the change here
import fetchStatusSlice from "./fetchStatus";

const hanzalStore = configureStore({
  reducer: { 
    items: itemsReducer, 
    fetchStatus : fetchStatusSlice.reducer; // Correctly referencing the reducer
  },
});

export default hanzalStore;
