import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollPositionSchema } from "../types/ScrollPositionSchema";

const initialState: ScrollPositionSchema = {
  scroll: {},
};

export const scrollPositionSlice = createSlice({
  name: "scrollPosition",
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>
    ) => {
      // @ts-ignore
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: scrollPositionActions } = scrollPositionSlice;
export const { reducer: scrollPositionReducer } = scrollPositionSlice;
