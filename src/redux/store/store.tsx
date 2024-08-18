import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeReducer';
import searchReducer from '../reducers/searchTermReducer';


const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
  },
});

/**
 * Type representing the root state of the store.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;