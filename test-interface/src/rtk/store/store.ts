/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-redeclare */
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../reducer/app';

export const store = configureStore({
  reducer: {
    app: appReducer.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
