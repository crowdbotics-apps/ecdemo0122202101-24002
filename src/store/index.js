import apiReducer from "./reducers";
import customReducer from "./custom/reducers"
import rootSaga from "./sagas";
import customRootSaga from "./custom/sagas"
import authRootSaga from "../features/LoginAndSignup3195463/auth/sagas";
import authReducer from "../features/LoginAndSignup3195463/auth/reducers";
import articlesReducer from "../features/Articles5195461/store/reducers";
import articlesSagas from "../features/Articles5195461/store/sagas";
import { userRootSaga, userReducer } from "../features/UserProfile4195462/store";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

/**
 * this app uses React Native Debugger, but it works without it
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware /** more middlewares if any goes here */];

const store = createStore(
  combineReducers({
      apiReducer: apiReducer,
      customReducer: customReducer,
      authReducer: authReducer,
      articlesReducer: articlesReducer,
      userReducer: userReducer,
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(customRootSaga);
sagaMiddleware.run(authRootSaga);
sagaMiddleware.run(articlesSagas);
sagaMiddleware.run(userRootSaga);

export { store };
