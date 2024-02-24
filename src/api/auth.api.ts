import {
    CheckEmailBody,
    CheckEmailResponse,
    ConfirmEmailBody,
    ConfirmEmailResponse,
    LoginBody,
    LoginResponse,
    RegistrationBody,
    RegistrationResponse,
} from '@common/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://marathon-api.clevertec.ru/' }),
    endpoints: (builder) => ({
        registration: builder.mutation<RegistrationResponse, RegistrationBody>({
            query: (body) => ({ method: 'POST', url: 'auth/registration', body }),
        }),

        login: builder.mutation<LoginResponse, LoginBody>({
            query: (body) => ({ method: 'POST', url: 'auth/login', body }),
        }),

        checkEmail: builder.mutation<CheckEmailResponse, CheckEmailBody>({
            query: (body) => ({ method: 'POST', url: 'auth/check-email', body }),
        }),

        confirmEmail: builder.mutation<ConfirmEmailResponse, ConfirmEmailBody>({
            query: (body) => ({ method: 'POST', url: 'auth/confirm-email', body }),
        }),
    }),
});
