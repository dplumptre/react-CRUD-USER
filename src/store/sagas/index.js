import { takeEvery } from "redux-saga/effects";
import { userSaga,postUserSaga, deleteUserSaga, editUserSaga ,getUserSaga} from "./userSaga";
import { getUsers } from "../reducers/Users";
import { getUser } from "../reducers/Users";
import { postUser } from "../reducers/Users";
import { deleteUser } from "../reducers/Users";
import { editUser } from "../reducers/Users";

export function* watcherSaga() {
	yield takeEvery(getUsers.type, userSaga);
	yield takeEvery(getUser.type, getUserSaga);
	yield takeEvery(postUser.type, postUserSaga );
	yield takeEvery(deleteUser.type, deleteUserSaga );
	yield takeEvery(editUser.type, editUserSaga );
}
