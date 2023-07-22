import { configureStore } from "@reduxjs/toolkit";

//take note about the difference between assigning a variable to a an object with the "new" keyword and "without"
export const store = configureStore({
  reducer: {}
});