// src/app/store.js

import { api } from '@/services/newsreportSlice';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // adds `api` slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // adds RTK Query middleware
});
export default store;