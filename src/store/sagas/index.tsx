import { all, fork } from "redux-saga/effects";
import { todosSaga } from "store/sagas/todos";

function* rootSaga() {
  yield all([fork(todosSaga)]);
}

export default rootSaga;
