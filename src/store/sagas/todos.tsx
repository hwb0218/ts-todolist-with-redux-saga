import { all, put, call, takeLatest, fork } from "redux-saga/effects";
import { getTodosSuccess, getTodosFail } from "store/actions/todos";
import { TODOS_FETCH_REQUEST } from "store/actions/types";
import { fetchTodos } from "api";
import { ITodos } from "components/types";

function* getTodosSaga() {
  try {
    const todos: ITodos = yield call(fetchTodos);
    yield put(getTodosSuccess(todos));
  } catch (error: unknown) {
    yield put(getTodosFail(error));
  }
}

function* watchGetTodos() {
  yield takeLatest(TODOS_FETCH_REQUEST, getTodosSaga);
}

function* addTodosSaga() {}

function* editTodoSaga() {}

function* changeStatusSaga() {}

function* removeTodoSaga() {}

export function* todosSaga() {
  yield all([fork(watchGetTodos)]);
}
