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

// worker saga는 watcher saga에서 action이 dispatch되면 실행한다.
// put effect는 redux 스토어에 액션을 디스패치한다.
function* getTodosSaga() {
  try {
    const todos: ITodos = yield call(fetchTodos);
    yield put(getTodosSuccess(todos));
  } catch (error: unknown) {
    yield put(getTodosFail(error));
  }
}

// call effect는 다른 saga들이나 promise등을 동기적으로 호출한다.
// 때문에 응답이 오기전 다음 작업을 진행하지 않는다.
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

// dispatch된 action을 바라보고 있는 watcher saga
// takeLatest의 경우 여러개의 action들이 동시에 트리거될 경우 마지막 action만 처리한다.
export function* watchTodosSaga() {
  yield takeLatest(TODOS_FETCH_REQUEST, getTodosSaga);
  yield takeLatest(ADD_TODO_SUCCEED, addTodoSaga);
  yield takeLatest(TOGGLE_TODO_CHECK_SUCCEED, toggleTodoCheckSaga);
  yield takeLatest(REMOVE_TODO_SUCCEED, removeTodoSaga);
  yield takeLatest(EDIT_TODO_SUCCEED, EditTodoSaga);
}
