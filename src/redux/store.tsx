import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";
import { rootSaga } from "./sagas";
import history from "../utils/history";

const persistConfig = {
  key: "Auth",
  storage: storage,
  whitelist: ["Auth", "charity"], // which reducer want to store
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware, routerMiddleware(history)];
const w: any = window as any;
const composeEnhancers = w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { persistor, store };
