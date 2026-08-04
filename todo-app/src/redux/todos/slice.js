import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { 
    list: [], 
    loading: false, 
    error: null,
    filter: 'all' 
  },
  reducers: {
    // 1. Lấy danh sách
    fetchTodosRequest: (state) => { state.loading = true; },
    fetchTodosSuccess: (state, action) => { state.loading = false; state.list = action.payload; },
    fetchTodosFailure: (state, action) => { state.loading = false; state.error = action.payload; },
    
    // 2. Thêm
    addTodoRequest: (state, action) => {}, 
    addTodoSuccess: (state, action) => { state.list.push(action.payload); },
    addTodoFailure: (state, action) => { state.error = action.payload; },

    // 3. Đổi trạng thái Check
    toggleTodoRequest: (state, action) => {}, 
    toggleTodoSuccess: (state, action) => {
      const index = state.list.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) { state.list[index] = action.payload; }
    },
    toggleTodoFailure: (state, action) => { state.error = action.payload; },

    // 4. Xoá
    deleteTodoRequest: (state, action) => {}, 
    deleteTodoSuccess: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload); 
    },
    deleteTodoFailure: (state, action) => { state.error = action.payload; },

    // 5. Sửa nội dung (Chữ)
    editTodoRequest: (state, action) => {}, 
    editTodoSuccess: (state, action) => {
      const index = state.list.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) { state.list[index].text = action.payload.text; }
    },
    editTodoFailure: (state, action) => { state.error = action.payload; },

    // 6. Lọc
    setFilter: (state, action) => { state.filter = action.payload; }
  }
});

// XUẤT TẤT CẢ ACTIONS
export const { 
  fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
  addTodoRequest, addTodoSuccess, addTodoFailure,
  toggleTodoRequest, toggleTodoSuccess, toggleTodoFailure,
  deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure,
  editTodoRequest, editTodoSuccess, editTodoFailure,
  setFilter
} = todosSlice.actions;

export default todosSlice.reducer;