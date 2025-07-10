const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");
export const apiUrl = process.env.NEXT_PUBLIC_BASEURL;

export const Blogslice = createApi({
    reducerPath:"blogs",
    baseQuery:fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL }),
    endpoints:(builder)=>({
        getBlogs:builder.query({
            query:()=> "/admin/blog/blog_view"
        })
    })
})

export const { useGetBlogsQuery } = Blogslice;
