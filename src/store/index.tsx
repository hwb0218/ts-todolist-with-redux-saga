import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSagas from "./sagas";

// saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();
// store에 마운트
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// saga 실행
sagaMiddleware.run(rootSagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
