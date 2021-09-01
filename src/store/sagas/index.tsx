import { all } from "redux-saga/effects";
import { todosSaga } from "store/sagas/todos";

function* rootSaga() {
  yield all([todosSaga()]);
}

export default rootSaga;
