const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");

export const topBrokerApi = createApi({
  reducerPath: "topBroker",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL }),
  endpoints: (builder) => ({
    getTopBrokers: builder.query({
      query: () => "/admin/broker/broker_view",
    }),
  }),
});

export const { useGetTopBrokersQuery } = topBrokerApi;