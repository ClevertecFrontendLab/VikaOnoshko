import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = { isAuth: boolean; accessToken: string | null };

export const authSlice = createSlice({
    name: 'auth',
    initialState: (): AuthState => {
        const accessToken = localStorage.getItem('accessToken');

        return {
            isAuth: !!accessToken,
            accessToken,
        };
    },
    reducers: {
        setAccessToken: (state, action: PayloadAction<string | null>) => {
            state.accessToken = action.payload;
            state.isAuth = !!action.payload;
        },
        logout: (state) => {
            state.isAuth = false;
            state.accessToken = null;
            localStorage.removeItem('accessToken');
        },
    },
});
