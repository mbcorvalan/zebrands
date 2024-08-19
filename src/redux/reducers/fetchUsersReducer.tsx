import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getGitHubUser } from '../../api/api';

interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

interface GitHubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}

interface UsersState {
  data: GitHubUser[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchGitHubUsers = createAsyncThunk<GitHubSearchResponse, string>(
  'users/fetchGitHubUsers',
  async (query) => {
    const response = await getGitHubUser(query);
    return response;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsers(state) {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchGitHubUsers.fulfilled,
        (state, action: PayloadAction<GitHubSearchResponse>) => {
          state.data = action.payload.items;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchGitHubUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { resetUsers } = usersSlice.actions;
export default usersSlice.reducer;