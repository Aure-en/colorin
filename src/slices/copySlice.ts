import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Copy from '../ts/copy/copy';
import Store from '../ts/store';

const initialState: Copy[] = [];

const copySlice = createSlice({
  name: 'copy',
  initialState,
  reducers: {
    addCopy: {
      reducer(
        state,
        action: PayloadAction<{ x: number; y: number; id: string }>,
      ) {
        state.push(action.payload);
      },

      prepare({ x, y, id }) {
        return {
          payload: {
            id,
            x,
            y,
          },
        };
      },
    },

    removeCopy: {
      reducer(state, action: PayloadAction<{ id: string }>) {
        state.filter((copy) => copy.id !== action.payload.id);
      },

      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

export const { addCopy, removeCopy } = copySlice.actions;

export const getCopied = (state: Store): Copy[] => state.copy;

export default copySlice.reducer;
