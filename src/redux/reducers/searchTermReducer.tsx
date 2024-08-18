import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchTerm = 'user' | 'repository';

interface SearchState {
  searchTerm: SearchTerm;
}

const initialState: SearchState = {
  searchTerm: 'user',
};

const searchSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    toggleSearchTerm: (state) => {
      state.searchTerm = state.searchTerm === 'user' ? 'repository' : 'user';
    },
    setSearchTerm: (state, action: PayloadAction<SearchTerm>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { toggleSearchTerm, setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
