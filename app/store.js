// src/app/store.js

import { Blogslice } from '@/services/blogSlice';
import { newsreportSlice } from '@/services/newsreportSlice';
import { topBrokerApi } from '@/services/topBorckerSlice';
import { weeklyArtical } from '@/services/weeklyArticalSlice';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    [newsreportSlice.reducerPath]: newsreportSlice.reducer,
    [topBrokerApi.reducerPath]: topBrokerApi.reducer,
    [Blogslice.reducerPath]: Blogslice.reducer,
    [weeklyArtical.reducerPath]: weeklyArtical.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsreportSlice.middleware).concat(topBrokerApi.middleware).concat(Blogslice.middleware).concat(weeklyArtical.middleware),
});
export default store;