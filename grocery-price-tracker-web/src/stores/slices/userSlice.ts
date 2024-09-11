import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoogleAuthCredentail } from "../../types/googleAuth";

interface UserState {
  value: GoogleAuthCredentail | undefined,
};

const initialState: UserState = {
  value: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.value = undefined;
    },
    setUser: (state, action: PayloadAction<GoogleAuthCredentail>) => {
      state.value = action.payload;
    },
  },
});

export const { resetUser, setUser } = userSlice.actions;

export default userSlice.reducer;