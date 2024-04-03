import { createSlice } from '@reduxjs/toolkit';

const premierSlice = createSlice({
  name: 'name',
  initialState: {
    dataName: {},
  },
  reducers: {
    nameFunction: (state, actions) => {
      state.dataName = { ...state.dataName, ...actions.payload };
    },
  },
});

export const { nameFunction } = premierSlice.actions;

export const nameFunctionReducer = premierSlice.reducer;

