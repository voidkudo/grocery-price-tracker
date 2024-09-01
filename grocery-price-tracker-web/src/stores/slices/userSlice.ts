import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoogleOAuthCredentail } from "../../types/googleOAuth";

interface UserState {
  value: GoogleOAuthCredentail | undefined,
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
    setUser: (state, action: PayloadAction<GoogleOAuthCredentail>) => {
      state.value = action.payload;
    },
  },
});

export const { resetUser, setUser } = userSlice.actions;

export default userSlice.reducer;