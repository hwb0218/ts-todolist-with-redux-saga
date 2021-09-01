import { all, fork } from "redux-saga/effects";
import { watchTodosSaga } from "store/sagas/todos";
/* 
all함수를 사용해서 제너레이터 함수를 배열의 형태로 인자로 넣어주면 
병렬적으로 실행되고, 전부 resolve될때까지 기다린다.
*/
function* rootSaga() {
  yield all([fork(watchTodosSaga)]);
}

export default rootSaga;
