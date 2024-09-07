import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  value: string,
};

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetSearchValue: (state) => {
      state.value = '';
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { resetSearchValue, setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;