import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeReducer';


const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

/**
 * Type representing the root state of the store.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;