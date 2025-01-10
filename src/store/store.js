import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { patientApi } from './api/patientApi';

// Create the Redux store
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]:authApi.reducer,
    [patientApi.reducerPath]:patientApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(patientApi.middleware),
});
