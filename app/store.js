// src/app/store.js

import { newsreportSlice } from '@/services/newsreportSlice';
import { topBrokerApi } from '@/services/topBorckerSlice';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    [newsreportSlice.reducerPath]: newsreportSlice.reducer, 
    [topBrokerApi.reducerPath]: topBrokerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsreportSlice.middleware).concat(topBrokerApi.middleware), 
});
export default store;