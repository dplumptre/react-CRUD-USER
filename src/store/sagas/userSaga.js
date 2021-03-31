import { put } from "redux-saga/effects";
import axiosInstance from "../../Axios/axiosInstance";
import axios from "axios";
import {success,loading} from '../reducers/Users'

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