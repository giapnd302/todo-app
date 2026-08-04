import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { 
    list: [], 
    loading: false, 
    error: null,
    filter: 'all' // Mặc định là xem tất cả
  },
  reducers: {
    // 1. Fetch (Lấy danh sách)
    fetchTodosRequest: (state) => { state.loading = true; },
    fetchTodosSuccess: (state, action) => { 
      state.loading = false; 
      state.list = action.payload; 
    },
    fetchTodosFailure: (state, action) => { 
      state.loading = false; 
      state.error = action.payload; 
    },
    
    // 2. Add (Thêm Todo)
    addTodoRequest: (state, action) => {}, // payload: text
    addTodoSuccess: (state, action) => { 
      state.list.push(action.payload); 
    },
    addTodoFailure: (state, action) => { 
      state.error = action.payload; 
    },

    // 3. Toggle (Check/Uncheck Todo)
    toggleTodoRequest: (state, action) => {}, // payload: id
    toggleTodoSuccess: (state, action) => {
      const index = state.list.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    toggleTodoFailure: (state, action) => { 
      state.error = action.payload; 
    },

    // 4. Delete (Xoá Todo)
    deleteTodoRequest: (state, action) => {}, // payload: id
    deleteTodoSuccess: (state, action) => {
      // Lọc ra các item khác với item có id bị xoá
      state.list = state.list.filter(todo => todo.id !== action.payload); 
    },
    deleteTodoFailure: (state, action) => { 
      state.error = action.payload; 
    },

    // 5. Filter (Lọc danh sách)
    setFilter: (state, action) => {
      state.filter = action.payload; // payload: 'all' | 'active' | 'completed'
    }
  }
});

// XUẤT TẤT CẢ CÁC ACTION ĐỂ DÙNG Ở SAGA VÀ COMPONENT
export const { 
  fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
  addTodoRequest, addTodoSuccess, addTodoFailure,
  toggleTodoRequest, toggleTodoSuccess, toggleTodoFailure,
  deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure,
  setFilter
} = todosSlice.actions;

export default todosSlice.reducer;