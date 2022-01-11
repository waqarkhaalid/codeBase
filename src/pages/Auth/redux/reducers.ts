import {
  LOGIN_SUCCESS,
  LOGIN_OUT,
  SET_LOADER,
  LOGOUT,
  LOGIN,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
} from "./constants";
import produce from "immer";
import { REGISTER } from "redux-persist/es/constants";

const initialState = {
  user: null,
  token: null,
  loader: false,
  pending: false,
};

const Auth = produce((state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      state.pending = true;
      break;
    case LOGIN_SUCCESS:
      state.user = action.payload.user;
      state.token = action.payload.access_token;
      state.pending = false;
      break;
    case LOGIN_FAILURE:
      state.pending = false;
      break;
    case REGISTER_SUCCESS:
      state.pending = false;
      break;
    case REGISTER_FAILURE:
      state.pending = false;
      break;
    case SET_LOADER:
      state.loader = action.payload;
      break;
    case LOGIN_OUT:
      state.token = null;
      state.user = null;
      break;
    case LOGOUT:
      state.user = null;
      state.token = null;
      break;
    default:
  }
}, initialState);

export default Auth;
