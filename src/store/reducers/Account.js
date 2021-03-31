import { createSlice } from '@reduxjs/toolkit';

export const Account = createSlice({
  name: 'account',
  initialState: {
    accounts: [],
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    LoadPageResetNow: () => {
        return {
            loading: false,
            success: false,
            error: "",
        };
    },
    addAccount: () => {},
    loading: state => {
      return {
        ...state,
        loading: true
      }
    },
    error: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    },
    success: (state, action) => {
      const data = action.payload
      return {
            ...state,
            loading:false,
            success:true,
            accounts:data
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const {  LoadPageResetNow, addAccount,error, success,loading } = Account.actions

export default Account.reducer