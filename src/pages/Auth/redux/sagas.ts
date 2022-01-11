import axios from "../../../config/axios";
import { all, put, fork, takeLatest, select } from "redux-saga/effects";
import {
  loginRequestSuccess,
  registerRequestSuccess,
  setLoader,
  loginRequestFailure,
  registerRequestFailure,
} from "./actions";
import { LOGIN, REGISTER, FORGOT_PASSWORD, RESET_PASSWORD } from "./constants";
import { makeSelectAuthToken } from "../../../redux/selectors";
import { sagaErrorHandler } from "../../../commonFunctions/sagaErrorHandler";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Login Saga //
function* loginRequestSaga(payload: any): any {
  let data = {
    email: payload.email,
    password: payload.password,
    captcha_token: payload.captcha,
  };

  try {
    const response = yield axios.post(`users/login`, data);
    yield put(loginRequestSuccess(response.data.data));
    yield put(setLoader(false));
    if (response.data.data.user.role === 0) {
      payload.history.push("/dashboard");
    } else {
      payload.history.push("/home");
      toast.success(response.data.message);
    }
  } catch (error: any) {
    yield put(loginRequestFailure());
    yield sagaErrorHandler(error.response);
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN, loginRequestSaga);
}

// Resgister Saga //
function* registerResquestSaga(payload: any): any {
  let data = {
    username: payload.username,
    email: payload.email,
    password: payload.password,
    captcha_token: payload.captcha,
  };
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield axios.post(`users/register`, data, headers);
    yield put(registerRequestSuccess(response.data.data));
    payload.resetForm();
    toast.success(response.data.message);
    payload.history.push("/signin");
  } catch (error: any) {
    yield put(registerRequestFailure());
    yield sagaErrorHandler(error.response);
  }
}

function* watchRegister() {
  yield takeLatest(REGISTER, registerResquestSaga);
}

// Forget Saga //

function* forgetResquestSaga(payload: any): any {
  let data = {
    email: payload.email,
  };
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield axios.post(`users/forgot-password`, data, headers);
    payload.resetForm();
    toast.success(response.data.message);
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchForget() {
  yield takeLatest(FORGOT_PASSWORD, forgetResquestSaga);
}

// Reset Saga //

function* resetResquestSaga(payload: any): any {
  let data = {
    new_password: payload.new_password,
    access_token: payload.access_token,
  };

  try {
    const token = yield select(makeSelectAuthToken());
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield axios.post(`users/update-password`, data, headers);
    if (response.data.status == 400) {
      payload.history.push("/home");
    }
    payload.resetForm();
    toast.success(response.data.message);
    payload.history.push("/signin");
  } catch (error: any) {
    yield sagaErrorHandler(error.response);
  }
}

function* watchReset() {
  yield takeLatest(RESET_PASSWORD, resetResquestSaga);
}

export default function* authSaga() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchForget),
    fork(watchReset),
  ]);
}
