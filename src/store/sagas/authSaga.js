import { put } from "redux-saga/effects";
import axiosInstance from "../../Axios/axiosInstance";
import axios from "axios";
import { loading, success, error } from "../reducers/Auth";

export function* authSaga(action) {
	yield put(loading());
	const mydata = action.payload;
	console.log(mydata);
	try {
		const CancelToken = yield axios.CancelToken; // remember always use plain axios for this one
		const source = yield CancelToken.source();
		const resp = yield axiosInstance.post("auth/login", mydata, {
			cancelToken: source.token,
		});
		console.log(resp);
		//yield put(success());
	} catch (error) {
		console.log(error.response.data);
		yield put(error(error.response.data));
	}
}
