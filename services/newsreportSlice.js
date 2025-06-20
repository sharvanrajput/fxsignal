// src/services/api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api', // optional custom key in the store
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => '/admin/news/news_view', // endpoint path
    }),
    
  }),
});

export const { useGetNewsQuery } = api;
