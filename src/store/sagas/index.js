import { takeEvery } from "redux-saga/effects";
import {userSaga} from './userSaga';
import {getUsers} from '../reducers/Users';
import { register} from "../reducers/Register";
import { registerSaga } from "./registerSaga";
import { accountSaga,getAccountSaga,AccountStatusSaga} from "./accountSaga";
import {addAccount } from '../reducers/Account';
import {getAccount} from "../reducers/GetAccount";
import {getAccountStatus} from "../reducers/AccountStatus";

export function* watcherSaga() {
    yield takeEvery(getUsers.type, userSaga);
    yield takeEvery(register.type,registerSaga);
    yield takeEvery(addAccount.type, accountSaga);
    yield takeEvery(getAccount.type, getAccountSaga);
    yield takeEvery(getAccountStatus.type, AccountStatusSaga);
}

