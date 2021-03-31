import { createSlice } from '@reduxjs/toolkit';

export const AccountStatus = createSlice({
  name: 'account',
  initialState: {
    accountStatus: [],
    loadingAccount: false,
    successAccount: false,
    errorAccount: "",
  },
  reducers: {
    LoadPageReset: () => {
        return {
          loadingAccount: false,
          successAccount: false,
          errorAccount: "",
        };
    },
    getAccountStatus: () => {},
    loadingAccountStatus: state => {
      return {
        ...state,
        loadingAccount: true
      }
    },
    errorAccountStatus: (state, action) => {
        return {
            ...state,
            loadingAccount: false,
            errorAccount: action.payload,
        };
    },
    successAccountStatus: (state, action) => {
      const data = action.payload
      return {
            ...state,
            loadingAccount:false,
            successAccount:true,
            accountStatus:data
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const {  LoadPageReset, getAccountStatus,errorAccountStatus, successAccountStatus,loadingAccountStatus } = AccountStatus.actions

export default AccountStatus.reducer