import { createSlice } from "@reduxjs/toolkit";

export const Register = createSlice({
	name: "register",
	initialState: {
		registerLoading: false,
		registerSuccess: false,
		registerError: "",
	},
	reducers: {
		LoadPageReset: () => {
			return {
				registerLoading: false,
				registerSuccess: false,
				registerError: "",
			};
		},
		register: () => {},
		registerLoading: (state) => {
			return {
				...state,
				registerLoading: true,
			};
		},
		registerError: (state, action) => {
			return {
				...state,
				registerLoading: false,
				registerError: action.payload,
			};
		},
		registerSuccess: (state, action) => {
			return {
				...state,
				registerLoading: false,
				registerSuccess: true,
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	LoadPageReset,
	register,
	registerLoading,
	registerSuccess,
	registerError,
} = Register.actions;

export default Register.reducer;
