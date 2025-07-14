// src/app/store.js

import { autoSlice } from '@/services/authSlice';
import { Blogslice } from '@/services/blogSlice';
import { newsreportSlice } from '@/services/newsreportSlice';
import { topBrokerApi } from '@/services/topBorckerSlice';
import { tradeideasSlice } from '@/services/tradeIdeasSlice';
import { weeklyArtical } from '@/services/weeklyArticalSlice';
import { configureStore } from '@reduxjs/toolkit';
import globalauthReducer from '@/services/globaluserauthData';
import { contactSlice } from '@/services/contactSlice';




const store = configureStore({
  reducer: {
    [newsreportSlice.reducerPath]: newsreportSlice.reducer,
    [topBrokerApi.reducerPath]: topBrokerApi.reducer,
    [Blogslice.reducerPath]: Blogslice.reducer,
    [weeklyArtical.reducerPath]: weeklyArtical.reducer,
    [tradeideasSlice.reducerPath]: tradeideasSlice.reducer,
    [autoSlice.reducerPath]: autoSlice.reducer,
    [contactSlice.reducerPath]: contactSlice.reducer,
    globalauth: globalauthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsreportSlice.middleware).concat(topBrokerApi.middleware).concat(Blogslice.middleware).concat(weeklyArtical.middleware).concat(tradeideasSlice.middleware).concat(autoSlice.middleware).concat(contactSlice.middleware),
});
export default store;