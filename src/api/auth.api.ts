import { RegistrationBody, RegistrationResponse } from '@common/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://marathon-api.clevertec.ru/' }),
    endpoints: (builder) => ({
        registration: builder.mutation<RegistrationResponse, RegistrationBody>({
            query: (body) => ({ method: 'POST', url: 'auth/registration', body }),
        }),
    }),
});
