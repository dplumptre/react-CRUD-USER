import {
	configureStore,
	//combineReducers,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
//import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import usersReducer from "./reducers/Users";
import registerReducer from "./reducers/Register";
import accountReducer from "./reducers/Account";
import getAccountReducer from "./reducers/GetAccount";
import accountStatusReducer from "./reducers/AccountStatus";
import authReducer from "./reducers/Auth";
import { watcherSaga } from "./sagas/index";
const sagaMiddleware = createSagaMiddleware();

// const rootReducer = combineReducers({
//   usersReducer: usersReducer
// })

const store = configureStore({
	reducer: {
		usersReducer: usersReducer,
		registerReducer: registerReducer,
		accountStatusReducer: accountStatusReducer,
		accountReducer: accountReducer,
		getAccountReducer: getAccountReducer,
		authReducer: authReducer,
	},
	middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
