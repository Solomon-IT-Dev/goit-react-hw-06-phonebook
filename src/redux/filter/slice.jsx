import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter({ value }, { payload }) {
      value = payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

// Selectors
export const getFilterValue = state => state.filter.value;
