import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://squad-2-backend.onrender.com/' }),
  endpoints: (builder) => ({
    // Login endpoint
    getAllPatient: builder.query({
      query: () => ({
        url: '/get_all_patients',
        method: 'GET',
      }),
    })
  }),
});

export const { useGetAllPatientQuery } = patientApi;