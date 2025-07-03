import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const weeklyArtical = createApi({
    reducerPath: "weeklyArtical",
    baseQuery: fetchBaseQuery({ baseUrl:  process.env.NEXT_PUBLIC_BASEURL }),
    endpoints: (builder) => ({
        getWeeklyArtical: builder.query({
            query: () => "/admin/analysis/analysis_view",
        }),
    }),

})

export const {useGetWeeklyArticalQuery} = weeklyArtical