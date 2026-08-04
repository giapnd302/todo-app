// Dữ liệu giả ban đầu
let mockTodos = [
  { id: '1', text: 'Học React Hook', completed: false },
  { id: '2', text: 'Làm bài tập Redux Saga', completed: false },
  { id: '3', text: 'Tạo Pull Request', completed: false }
];

const DELAY_MS = 1000; // Giả lập độ trễ mạng 1 giây

// 1. Hàm lấy danh sách
export const fetchTodosApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Trả về bản sao của mảng
      resolve([...mockTodos]); 
    }, DELAY_MS);
  });
};

// 2. Hàm thêm mới
export const addTodoApi = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTodo = { 
        id: Date.now().toString(), 
        text: text, 
        completed: false // Mặc định khi thêm mới là chưa hoàn thành
      };
      mockTodos.push(newTodo);
      resolve(newTodo);
    }, DELAY_MS);
  });
};

// 3. HÀM CHECK/UNCHECK (TOGGLE) - ĐÂY CHÍNH LÀ THỦ PHẠM NẾU LỖI
export const toggleTodoApi = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Tìm và đảo ngược trạng thái completed (true -> false, false -> true)
      mockTodos = mockTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      
      // Tìm lại đúng cái todo vừa sửa để trả về cho Redux
      const updatedTodo = mockTodos.find(todo => todo.id === id);
      resolve(updatedTodo);
    }, DELAY_MS);
  });
};

// 4. Hàm xoá
export const deleteTodoApi = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Xoá todo khỏi mảng
      mockTodos = mockTodos.filter(todo => todo.id !== id);
      resolve(id);
    }, DELAY_MS);
  });
};