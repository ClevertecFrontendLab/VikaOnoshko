import {
    ChangePasswordBody,
    ChangePasswordResponse,
    CheckEmailBody,
    CheckEmailResponse,
    ConfirmEmailBody,
    ConfirmEmailResponse,
    LoginBody,
    LoginResponse,
    RegistrationBody,
    RegistrationResponse,
} from '@common/types';
import { loaderSlice } from '@redux/loader.reducer';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://marathon-api.clevertec.ru/' }),
    endpoints: (builder) => ({
        registration: builder.mutation<RegistrationResponse, RegistrationBody>({
            query: (body) => ({ method: 'POST', url: 'auth/registration', body }),
            async onQueryStarted(_, api) {
                api.dispatch(loaderSlice.actions.setLoading(true));

                api.queryFulfilled.finally(() =>
                    api.dispatch(loaderSlice.actions.setLoading(false)),
                );
            },
        }),

        login: builder.mutation<LoginResponse, LoginBody>({
            query: (body) => ({ method: 'POST', url: 'auth/login', body }),
            async onQueryStarted(_, api) {
                api.dispatch(loaderSlice.actions.setLoading(true));

                api.queryFulfilled.finally(() =>
                    api.dispatch(loaderSlice.actions.setLoading(false)),
                );
            },
        }),

        checkEmail: builder.mutation<CheckEmailResponse, CheckEmailBody>({
            query: (body) => ({ method: 'POST', url: 'auth/check-email', body }),
            async onQueryStarted(_, api) {
                api.dispatch(loaderSlice.actions.setLoading(true));

                api.queryFulfilled.finally(() =>
                    api.dispatch(loaderSlice.actions.setLoading(false)),
                );
            },
        }),

        confirmEmail: builder.mutation<ConfirmEmailResponse, ConfirmEmailBody>({
            query: (body) => ({
                method: 'POST',
                url: 'auth/confirm-email',
                body,
                credentials: 'include',
            }),
            async onQueryStarted(_, api) {
                api.dispatch(loaderSlice.actions.setLoading(true));

                api.queryFulfilled.finally(() =>
                    api.dispatch(loaderSlice.actions.setLoading(false)),
                );
            },
        }),

        changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordBody>({
            query: (body) => ({
                method: 'POST',
                url: 'auth/change-password',
                body,
                credentials: 'include',
            }),
            async onQueryStarted(_, api) {
                api.dispatch(loaderSlice.actions.setLoading(true));

                api.queryFulfilled.finally(() =>
                    api.dispatch(loaderSlice.actions.setLoading(false)),
                );
            },
        }),
    }),
});
