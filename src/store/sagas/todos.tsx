import { delay, put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { getTodos, ITodos } from "api";
import { getTodosSuccess, getTodosFail } from "store/actions/todos";
import { TODOS_FETCH_REQUEST } from "store/actions/types";

function* getTodosSaga() {
  try {
    const todos: ITodos = yield call(getTodos);
    yield put(getTodosSuccess(todos));
  } catch (error) {
    yield put(getTodosFail(error));
    console.log(typeof error);
    console.log(error);
  }
}

function* addTodosSaga() {}

function* editTodoSaga() {}

function* changeStatusSaga() {}

function* removeTodoSaga() {}

export function* todosSaga() {
  yield takeLatest(TODOS_FETCH_REQUEST, getTodosSaga);
}
