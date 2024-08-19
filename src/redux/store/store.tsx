import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeReducer';
import searchReducer from '../reducers/searchTermReducer';
import usersReducer from '../reducers/fetchUsersReducer';
import reposSlice from '../reducers/fetchRepoReducer';
import querySlice from '../reducers/queryReducer';



const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    users: usersReducer,
    repos: reposSlice,
    query: querySlice,
  },
});

/**
 * Type representing the root state of the store.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;