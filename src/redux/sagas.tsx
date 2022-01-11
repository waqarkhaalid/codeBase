import { all, fork } from "redux-saga/effects";
import AuthSaga from "../pages/Auth/redux/sagas";

export function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
