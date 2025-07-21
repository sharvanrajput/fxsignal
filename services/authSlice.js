import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "authApi", // ✅ used in store.js
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASEURL,
    credentials: "include", // ✅ needed for cookies to persist sessions
  }),
  
  // ✅ Add tagTypes for cache invalidation
  tagTypes: ['Session'],
  
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
      // ✅ Invalidate session cache after login
      invalidatesTags: ['Session'],
    }),

    sessiondata: builder.query({
      query: () => "/admin/auth/me",
      // ✅ Tag this query so it can be invalidated
      providesTags: ['Session'],
      // ✅ Handle 401 errors gracefully (optional but recommended)
      transformErrorResponse: (response, meta, arg) => {
        if (response.status === 401) {
          return { status: 401, message: 'Not authenticated' };
        }
        return response;
      },
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "/admin/auth/logout",
        method: "GET", // ✅ or POST, based on backend
      }),
      // ✅ Invalidate session cache after logout
      invalidatesTags: ['Session'],
    }),

    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "/admin/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),

    otpverify: builder.mutation({
      query: (body) => ({
        url: "/admin/auth/verify-otp",
        method: "POST",
        body,
      }),
    }),

    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/admin/auth/reset-password",
        method: "POST",
        body,
      }),
    }),
  }),
});

// ✅ Export hooks for component usage
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useForgotPasswordMutation,
  useOtpverifyMutation,
  useSessiondataQuery,
  useResetPasswordMutation,
} = authSlice;