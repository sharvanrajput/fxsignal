// src/services/api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsreportSlice = createApi({
  reducerPath: 'api', // optional custom key in the store
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => '/admin/news/news_view', // endpoint path
    }),

  }),
});

export const { useGetNewsQuery } = newsreportSlice;
