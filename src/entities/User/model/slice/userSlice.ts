import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../types/user";
import { User } from "../types/user";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
