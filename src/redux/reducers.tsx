import { combineReducers } from "redux";
import AuthReducer from "../pages/Auth/redux/reducers";
import { connectRouter } from 'connected-react-router'
import history from '../utils/history';


const rootReducer = combineReducers({
  Auth: AuthReducer,
  router: connectRouter(history),
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
