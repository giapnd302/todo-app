import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTodosApi, addTodoApi, toggleTodoApi, deleteTodoApi, editTodoApi } from '../../api/todoService'; 
import { 
  fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
  addTodoRequest, addTodoSuccess, addTodoFailure,
  toggleTodoRequest, toggleTodoSuccess, toggleTodoFailure,
  deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure,
  editTodoRequest, editTodoSuccess, editTodoFailure
} from './slice';

function* fetchTodosWorker() {
  try {
    const data = yield call(fetchTodosApi); 
    yield put(fetchTodosSuccess(data));
  } catch (error) { yield put(fetchTodosFailure(error.message)); }
}

function* addTodoWorker(action) {
  try {
    const newTodo = yield call(addTodoApi, action.payload); 
    yield put(addTodoSuccess(newTodo));
  } catch (error) { yield put(addTodoFailure(error.message)); }
}

function* toggleTodoWorker(action) {
  try {
    const updatedTodo = yield call(toggleTodoApi, action.payload);
    yield put(toggleTodoSuccess(updatedTodo));
  } catch (error) { yield put(toggleTodoFailure(error.message)); }
}

function* deleteTodoWorker(action) {
  try {
    const deletedId = yield call(deleteTodoApi, action.payload);
    yield put(deleteTodoSuccess(deletedId));
  } catch (error) { yield put(deleteTodoFailure(error.message)); }
}

function* editTodoWorker(action) {
  try {
    const updatedTodo = yield call(editTodoApi, action.payload);
    yield put(editTodoSuccess(updatedTodo));
  } catch (error) { yield put(editTodoFailure(error.message)); }
}

// WATCHER: Lắng nghe mọi yêu cầu từ UI
export function* todosSaga() {
  yield takeLatest(fetchTodosRequest.type, fetchTodosWorker);
  yield takeLatest(addTodoRequest.type, addTodoWorker); 
  yield takeLatest(toggleTodoRequest.type, toggleTodoWorker);
  yield takeLatest(deleteTodoRequest.type, deleteTodoWorker);
  yield takeLatest(editTodoRequest.type, editTodoWorker);
}