import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart:(state) =>{
      state.loading = true;
      state.error = null;
    },
    updateSuccess:(state, action) =>{
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailuer:(state,action) =>{
      state.loading = false;
      state.error = action.payload;
    },
  }
})

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateStart,
  updateSuccess,
  updateFailuer,
 
} = userReducer.actions;

export default userReducer.reducer;