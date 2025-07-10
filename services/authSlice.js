import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const autoSlice = createApi({
    reducerPath: "signupApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASEURL,
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body) => ({
                url: "/admin/auth/signup",
                method: "POST",
                body,
            }),
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: "/admin/auth/login",
                method: "POST",
                body,
            }),
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: '/admin/auth/logout',
                method: 'GET'
            })
        })
    }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = autoSlice;
