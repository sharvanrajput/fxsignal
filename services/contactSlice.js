import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const contactSlice = createApi({
    reducerPath:"contact",
    baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_BASEURL}),
    endpoints:(builder)=>({
        sendContactInfo: builder.mutation({
            query:(body)=>({
                url:"/admin/contact_us/add_contact_us",
                method:"POST",
                body,
            })
        })
    })
})

export const {useSendContactInfoMutation} = contactSlice
