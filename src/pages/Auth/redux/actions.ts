import {
  LOGOUT,
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  SET_LOADER,
  LOGIN_FAILURE,
  REGISTER_FAILURE
} from "./constants";

export const logoutRequest = () => ({
  type: LOGOUT,
});

export const loginRequest = (data: any) => ({
  type: LOGIN,
  payload: data,
});

export const loginRequestSuccess = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});
export const loginRequestFailure = () => ({
  type: LOGIN_FAILURE,  
});
export const registerRequest = (data: any) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const registerRequestSuccess = (data: any) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};
export const registerRequestFailure = () => ({
  type: REGISTER_FAILURE
});
export const forgotPassword = (data: any) => {
  return {
    type: FORGOT_PASSWORD,
    payload: data,
  };
};
export const resetPassword = (data: any) => {
  return {
    type: RESET_PASSWORD,
    payload: data
  };
};
export const setLoader = (data: any) => {
  return {
    type: SET_LOADER,
    payload: data
  };
};