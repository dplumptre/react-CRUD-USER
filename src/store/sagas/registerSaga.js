import { put } from "redux-saga/effects";
import axiosInstance from "../../Axios/axiosInstance";
import axios from "axios";
import {registerLoading,registerSuccess,registerError} from '../reducers/Register'



export function* registerSaga (action){
    yield put(registerLoading());
    const mydata = action.payload;
    console.log(mydata);
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        // const resp = yield  axiosInstance.post(`question/${action.id}?token=${action.token}`,action.info,{cancelToken:source.token});
        const resp = yield  axiosInstance.post('add-user',mydata,{cancelToken:source.token});
        console.log(resp);
        yield put(registerSuccess());
    }catch(error){
        console.log(error.response.data);
        yield put(registerError(error.response.data));
    }
}