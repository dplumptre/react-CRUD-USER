import { put } from "redux-saga/effects";
import axiosInstance from "../../Axios/axiosInstance";
import axios from "axios";
import { loading, success, error } from "../reducers/Account";
import {
	loadingAccount,
	successAccount,
	errorAccount,
} from "../reducers/GetAccount";

import {
	loadingAccountStatus,
	successAccountStatus,
	errorAccountStatus,
} from "../reducers/AccountStatus";
export function* accountSaga(action) {
	yield put(loading());
	const mydata = action.payload;
	console.log(typeof mydata);

	try {
		const CancelToken = yield axios.CancelToken; // remember always use plain axios for this one
		const source = yield CancelToken.source();
		//const resp = yield  axiosInstance.post(`question/${action.id}?token=${action.token}`,action.info,{cancelToken:source.token});
		const resp = yield axiosInstance.post("add-account", mydata, {
			cancelToken: source.token,
		});
		console.log(resp);
		console.log(resp.data.result);
		if (resp.data.result === "success") {
			yield put(success());
		} else {
			yield put(error(resp.data.result));
		}
	} catch (e) {
		console.log(e);
		yield put(error(e.response.data));
	}
}

export function* getAccountSaga(action) {
	try {
		yield put(loadingAccount());
		const CancelToken = yield axios.CancelToken; // remember always use plain axios for this one
		const source = yield CancelToken.source();
		// const resp = yield  axiosInstance.get(`get-answers?token=${action.token}`,{cancelToken:source.token});
		const resp = yield axiosInstance.get(`get-accounts`, {
			cancelToken: source.token,
		});
		console.log(resp.data.result);
		yield put(successAccount(resp.data.result));
	} catch (error) {
		console.log(error);
		yield put(errorAccount(error.response.data));
	}
}

export function* AccountStatusSaga(action) {
	const mydata = action.payload;
	console.log(mydata);

	try {
		yield put(loadingAccountStatus());
		const CancelToken = yield axios.CancelToken; // remember always use plain axios for this one
		const source = yield CancelToken.source();
		//const resp = yield  axiosInstance.post(`question/${action.id}?token=${action.token}`,action.info,{cancelToken:source.token});
		const resp = yield axiosInstance.post("get-status-by-post", mydata, {
			cancelToken: source.token,
		});
		console.log(resp.data.result);
		yield put(successAccountStatus(resp.data.result));
	} catch (e) {
		console.log(e);
		yield put(errorAccountStatus(e.response.data));
	}
}
