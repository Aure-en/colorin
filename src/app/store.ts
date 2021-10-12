import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import paletteReducer from '../slices/paletteSlice';
import copyReducer from '../slices/copySlice';
import settingsReducer from '../slices/settingsSlice';

export const store = configureStore({
  reducer: {
    palette: paletteReducer,
    copy: copyReducer,
    settings: settingsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
