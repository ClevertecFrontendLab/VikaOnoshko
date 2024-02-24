import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoaderState = { loading: boolean };

const initialState: LoaderState = { loading: false };

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});
