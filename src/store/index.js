import {
	configureStore,
	//combineReducers,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
//import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import usersReducer from "./reducers/Users";
import { watcherSaga } from "./sagas/index";
const sagaMiddleware = createSagaMiddleware();

// const rootReducer = combineReducers({
//   usersReducer: usersReducer
// })

const store = configureStore({
	reducer: {
		usersReducer: usersReducer,
	},
	middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
