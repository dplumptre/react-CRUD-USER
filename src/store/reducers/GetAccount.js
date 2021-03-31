import { createSlice } from '@reduxjs/toolkit';

export const GetAccount = createSlice({
  name: 'account',
  initialState: {
    accounts: [],
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    LoadPageReset: () => {
        return {
            loading: false,
            success: false,
            error: "",
        };
    },
    getAccount: () => {},
    loadingAccount: state => {
      return {
        ...state,
        loading: true
      }
    },
    errorAccount: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    },
    successAccount: (state, action) => {
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
export const {  LoadPageReset, getAccount,errorAccount, successAccount,loadingAccount } = GetAccount.actions

export default GetAccount.reducer