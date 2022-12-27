import { configureStore } from '@reduxjs/toolkit';
import { phoneBook } from './addContactSlice';

export const store = configureStore({
  reducer: phoneBook.reducer,
});
