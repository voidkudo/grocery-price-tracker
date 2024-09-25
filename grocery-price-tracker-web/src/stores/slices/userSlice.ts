import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface UserState {
  value: User | undefined,
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
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
  },
});

export const { resetUser, setUser } = userSlice.actions;

export default userSlice.reducer;