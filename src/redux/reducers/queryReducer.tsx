import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryState {
  query: string;
}

const initialState: QueryState = {
  query: '',
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    resetQuery: (state) => {
      state.query = '';
    },
  },
});

export const { setQuery, resetQuery } = querySlice.actions;
export default querySlice.reducer;
