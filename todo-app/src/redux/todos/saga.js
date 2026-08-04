// src/redux/todos/saga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTodosApi, addTodoApi } from '../../api/todoService'; // import thêm addTodoApi
// import thêm các action mới
import { 
  fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
  addTodoRequest, addTodoSuccess, addTodoFailure 
} from './slice';

// Worker cũ (Lấy danh sách)
function* fetchTodosWorker() {
  try {
    const data = yield call(fetchTodosApi); 
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

// --- THÊM WORKER MỚI (Thêm Todo) ---
function* addTodoWorker(action) {
  try {
    // action.payload chính là nội dung text truyền từ UI sang
    const newTodo = yield call(addTodoApi, action.payload); 
    yield put(addTodoSuccess(newTodo));
  } catch (error) {
    yield put(addTodoFailure(error.message));
  }
}

// Cập nhật Watcher
export function* todosSaga() {
  yield takeLatest(fetchTodosRequest.type, fetchTodosWorker);
  
  // Lắng nghe thêm action addTodoRequest
  yield takeLatest(addTodoRequest.type, addTodoWorker); 
}