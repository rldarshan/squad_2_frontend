import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',  // Name for the slice
  baseQuery: fetchBaseQuery({ baseUrl: 'https://squad-2-backend.onrender.com/' }),
  endpoints: (builder) => ({
    // Login endpoint
    loginUser: builder.mutation({
      query: (userCredentials) => ({
        url: '/login',
        method: 'POST',
        body: userCredentials,
      }),
    }),

    // Register endpoint
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
