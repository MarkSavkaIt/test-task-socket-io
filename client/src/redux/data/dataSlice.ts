import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  [key: number]: any;
}

const initialState: CounterState = [];

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<CounterState>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = dataSlice.actions;

export default dataSlice;
