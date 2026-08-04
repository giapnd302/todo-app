// src/redux/todos/slice.js
// src/redux/todos/slice.js
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
    // 1. Fetch
    fetchTodosRequest: (state) => { state.loading = true; },
    fetchTodosSuccess: (state, action) => { state.loading = false; state.list = action.payload; },
    fetchTodosFailure: (state, action) => { state.loading = false; state.error = action.payload; },
    
    // 2. Add
    addTodoRequest: (state, action) => {},
    addTodoSuccess: (state, action) => { state.list.push(action.payload); },
    addTodoFailure: (state, action) => { state.error = action.payload; },

    // 3. Toggle (Check/Uncheck)
    toggleTodoRequest: (state, action) => {},
    toggleTodoSuccess: (state, action) => {
      const index = state.list.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    toggleTodoFailure: (state, action) => { state.error = action.payload; },

    // 4. Delete
    deleteTodoRequest: (state, action) => {},
    deleteTodoSuccess: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload); 
    },
    deleteTodoFailure: (state, action) => { state.error = action.payload; },

    // 5. Filter
    setFilter: (state, action) => {
      state.filter = action.payload; 
    }
  }
});

// THỦ PHẠM CHÍNH LÀ ĐOẠN NÀY ĐÂY! Rất có thể bạn đã thiếu đoạn export này
export const { 
  fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
  addTodoRequest, addTodoSuccess, addTodoFailure,
  toggleTodoRequest, toggleTodoSuccess, toggleTodoFailure,
  deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure,
  setFilter
} = todosSlice.actions;

export default todosSlice.reducer;
