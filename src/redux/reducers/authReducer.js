import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: "",
    password: ""
};

const authSlice = createSlice({
  name: 'Auth-Slice',
  initialState,
  reducers: {
    login(state, action) {
      state.login = action.payload},
    password(state, action) {
      state.password = action.payload} 
    }
  })

export const { login, password } = authSlice.actions
export default authSlice.reducer