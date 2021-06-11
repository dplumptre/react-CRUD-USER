import { put } from "redux-saga/effects";
import axiosInstance from "../../Axios/axiosInstance";
import axios from "axios";
import {success,loading,postUserSuccess,postUserloading,deleteUserSuccess,editUserSuccess,getUserSuccess} from '../reducers/Users'

export function* userSaga(action) {
  try {

    yield put(loading());
    const CancelToken = yield axios.CancelToken; // remember always use plain axios for this one
    const source = yield CancelToken.source();
    // const resp = yield  axiosInstance.get(`get-answers?token=${action.token}`,{cancelToken:source.token});
    // const resp = yield axiosInstance.get(`users?token=${action.token}`, {
    //   cancelToken: source.token,
    // });
    const resp = yield axiosInstance.get(`users`, {
        cancelToken: source.token,
      });
    console.log(resp.data.result);
    yield put(success(resp.data.result));
  } catch (error) {
      console.log(error)
  }
}

export function* getUserSaga(action) {
  const id= action.payload;
  
	try {
		const CancelToken = yield axios.CancelToken; // remember always use plain axios for this one
		const source = yield CancelToken.source();
		const resp = yield axiosInstance.get(`user/${id}`, {
			cancelToken: source.token,
		});
		console.log(resp.data.result);
    yield put(getUserSuccess(resp.data.result)); // sending edit single user
    
	} catch (error) {
		console.log(error.response.data);
		yield put(error(error.response.data));
	}
}

export function* postUserSaga(action) {
	yield put(postUserloading());
	const mydata = action.payload;
	console.log(mydata);
	try {
		const CancelToken = yield axios.CancelToken; // remember always use plain axios for this one
		const source = yield CancelToken.source();
		const resp = yield axiosInstance.post("add-user", mydata, {
			cancelToken: source.token,
		});
		console.log(resp);
    yield put(postUserSuccess(resp.data.result));
    
	} catch (error) {
		console.log(error.response.data);
		yield put(error(error.response.data));
	}
}




export function* editUserSaga(action) {
	const mydata= action.payload;

	console.log(mydata[0]['data']);
	console.log(mydata[0]['id']);

	try {
		const CancelToken = yield axios.CancelToken; // remember always use plain axios for this one
		const source = yield CancelToken.source();
		const resp = yield axiosInstance.put(`update-user/${mydata[0]['id']}`, mydata[0]['data'], {
			cancelToken: source.token,
		});
		console.log(resp);
    yield put(editUserSuccess(resp.data.result)); // sending edit single user
    
	} catch (error) {
		console.log(error.response.data);
		yield put(error(error.response.data));
	}
}



export function* deleteUserSaga(action) {
  try {
    const id = action.payload;
    //yield put(loading());
    const CancelToken = yield axios.CancelToken; // remember always use plain axios for this one
    const source = yield CancelToken.source();
    const resp = yield axiosInstance.get(`delete-user/${id}`, {
        cancelToken: source.token,
      });
    console.log(resp.data.result);
    yield put(deleteUserSuccess(id));
  } catch (error) {
      console.log(error)
  }
}
