const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");

export const tradeideasSlice  = createApi({
    reducerPath: "tradeideas",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL }),
    endpoints: (builder) => ({
        tradeIdea : builder.query({
            query: () => `/admin/trade/trade_view`,
        }),
    }),
})

export const {useTradeIdeaQuery} = tradeideasSlice;