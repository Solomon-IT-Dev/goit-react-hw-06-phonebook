import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    add({ items }, { payload }) {
      items.push(payload);
    },
    remove({ items }, { payload }) {
      return items.filter(item => item.id !== payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { add, remove } = contactsSlice.actions;

// Selectors
export const getContactsItems = state => state.contacts.items;
