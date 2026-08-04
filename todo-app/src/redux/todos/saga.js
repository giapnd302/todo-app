import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTodosApi, addTodoApi, toggleTodoApi, deleteTodoApi } from '../../api/todoService'; 
import { 
  fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
  addTodoRequest, addTodoSuccess, addTodoFailure,
  toggleTodoRequest, toggleTodoSuccess, toggleTodoFailure,
  deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure
} from './slice';

// Worker 1: Fetch
function* fetchTodosWorker() {
  try {
    const data = yield call(fetchTodosApi); 
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

// Worker 2: Add
function* addTodoWorker(action) {
  try {
    const newTodo = yield call(addTodoApi, action.payload); 
    yield put(addTodoSuccess(newTodo));
  } catch (error) {
    yield put(addTodoFailure(error.message));
  }
}

// Worker 3: Toggle
function* toggleTodoWorker(action) {
  try {
    const updatedTodo = yield call(toggleTodoApi, action.payload);
    yield put(toggleTodoSuccess(updatedTodo));
  } catch (error) {
    yield put(toggleTodoFailure(error.message));
  }
}

// Worker 4: Delete
function* deleteTodoWorker(action) {
  try {
    const deletedId = yield call(deleteTodoApi, action.payload);
    yield put(deleteTodoSuccess(deletedId));
  } catch (error) {
    yield put(deleteTodoFailure(error.message));
  }
}

// Watcher: Lắng nghe UI
export function* todosSaga() {
  yield takeLatest(fetchTodosRequest.type, fetchTodosWorker);
  yield takeLatest(addTodoRequest.type, addTodoWorker); 
  yield takeLatest(toggleTodoRequest.type, toggleTodoWorker);
  yield takeLatest(deleteTodoRequest.type, deleteTodoWorker);
}