import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todosReducer from './todos/slice';
import rootSaga from './rootSaga';

// 1. Tạo middleware cho Saga
const sagaMiddleware = createSagaMiddleware();

// 2. Khởi tạo Store
export const store = configureStore({
  reducer: {
    todos: todosReducer, // Kết nối todosSlice vào store chung
  },
  // Tắt thunk (mặc định của Toolkit) và thay bằng sagaMiddleware
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// 3. Khởi động Saga
sagaMiddleware.run(rootSaga);