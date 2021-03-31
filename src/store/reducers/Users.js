import { createSlice } from '@reduxjs/toolkit';

export const User = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    getUsers: state => {},
    loading: state => {
      return {
        ...state,
        loading: true
      }
    },
    success: (state, action) => {
      const updateduser = action.payload
      return {
            ...state,
            loading:false,
            users:updateduser
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { getUsers, success,loading } = User.actions

export default User.reducer