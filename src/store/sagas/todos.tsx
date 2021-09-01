import { put, call, takeLatest } from "redux-saga/effects";
import { getTodos, addTodo, toggleTodoCheck, removeTodo, editTodo } from "store/actions/todos";
import {
  TODOS_FETCH_REQUEST,
  ADD_TODO_SUCCEED,
  TOGGLE_TODO_CHECK_SUCCEED,
  REMOVE_TODO_SUCCEED,
  EDIT_TODO_SUCCEED,
} from "store/actions/types";
import {
  fetchTodos,
  fetchAddTodo,
  fetchToggleTodoCheck,
  fetchRemoveTodo,
  fetchEditTodo,
  IResponse,
} from "api";
import { ITodos } from "types";

const { getTodosSuccess, getTodosFail } = getTodos;
const { addTodoFail } = addTodo;
const { toggleTodoCheckFail } = toggleTodoCheck;
const { removeTodoFail } = removeTodo;
const { editTodoFail } = editTodo;

function* getTodosSaga() {
  try {
    const todos: ITodos = yield call(fetchTodos);
    yield put(getTodosSuccess(todos));
  } catch (error: unknown) {
    yield put(getTodosFail(error));
  }
}

function* addTodoSaga() {
  try {
    const res: IResponse = yield call(fetchAddTodo);
    alert(res.message);
  } catch (error: unknown) {
    yield put(addTodoFail(error));
  }
}

function* toggleTodoCheckSaga() {
  try {
    const res: IResponse = yield call(fetchToggleTodoCheck);
    alert(res.message);
  } catch (error: unknown) {
    yield put(toggleTodoCheckFail(error));
  }
}

function* removeTodoSaga() {
  try {
    const res: IResponse = yield call(fetchRemoveTodo);
    alert(res.message);
  } catch (error: unknown) {
    yield put(removeTodoFail(error));
  }
}

function* EditTodoSaga() {
  try {
    const res: IResponse = yield call(fetchEditTodo);
    alert(res.message);
  } catch (error: unknown) {
    yield put(editTodoFail(error));
  }
}

export function* todosSaga() {
  yield takeLatest(TODOS_FETCH_REQUEST, getTodosSaga);
  yield takeLatest(ADD_TODO_SUCCEED, addTodoSaga);
  yield takeLatest(TOGGLE_TODO_CHECK_SUCCEED, toggleTodoCheckSaga);
  yield takeLatest(REMOVE_TODO_SUCCEED, removeTodoSaga);
  yield takeLatest(EDIT_TODO_SUCCEED, EditTodoSaga);
}
