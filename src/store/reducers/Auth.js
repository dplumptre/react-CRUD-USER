import { createSlice } from "@reduxjs/toolkit";

export const Auth = createSlice({
	name: "auth",
	initialState: {
		loading: false,
		success: false,
		token: null,
		user: {},
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
		postAuth: () => {},
		autoLogout: () => {},
		authLogoutSucceed: () => {},
		checkExpiry: () => {},
		checkAuthenticationState: () => {},
		loading: (state) => {
			return {
				...state,
				loading: true,
			};
		},
		error: (state, action) => {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		},
		success: (state, action) => {
			const data = action.payload;
			return {
				...state,
				loading: false,
				token: data.token,
				user: data.user,
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	LoadPageResetNow,
	checkAuthenticationState,
	checkExpiry,
	autoLogout,
	postAuth,
	authLogoutSucceed,
	error,
	success,
	loading,
} = Auth.actions;

export default Auth.reducer;
