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
  dataUsers: GitHubUser[];
  isLoadingUsers: boolean;
  errorUsers: string | null;
}

const initialState: UsersState = {
  dataUsers: [],
  isLoadingUsers: false,
  errorUsers: null,
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
      state.dataUsers = [];
      state.errorUsers = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubUsers.pending, (state) => {
        state.isLoadingUsers = true;
        state.errorUsers = null;
      })
      .addCase(
        fetchGitHubUsers.fulfilled,
        (state, action: PayloadAction<GitHubSearchResponse>) => {
          state.dataUsers = action.payload.items;
          state.isLoadingUsers = false;
          state.errorUsers = null;
        }
      )
      .addCase(fetchGitHubUsers.rejected, (state, action) => {
        state.isLoadingUsers = false;
        state.errorUsers = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { resetUsers } = usersSlice.actions;
export default usersSlice.reducer;