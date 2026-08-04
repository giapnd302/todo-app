// Dữ liệu giả ban đầu
let mockTodos = [
  { id: '1', text: 'Học React Hook', completed: true },
  { id: '2', text: 'Làm bài tập Redux Saga', completed: false },
  { id: '3', text: 'Tạo Pull Request', completed: false }
];

const DELAY_MS = 1000; // Giả lập độ trễ 1 giây

export const fetchTodosApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockTodos]), DELAY_MS);
  });
};

export const addTodoApi = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTodo = { id: Date.now().toString(), text, completed: false };
      mockTodos.push(newTodo);
      resolve(newTodo);
    }, DELAY_MS);
  });
};

export const toggleTodoApi = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockTodos = mockTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      const updatedTodo = mockTodos.find(todo => todo.id === id);
      resolve(updatedTodo);
    }, DELAY_MS);
  });
};

export const deleteTodoApi = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockTodos = mockTodos.filter(todo => todo.id !== id);
      resolve(id);
    }, DELAY_MS);
  });
};

export const editTodoApi = ({ id, newText }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockTodos = mockTodos.map(todo => 
        todo.id === id ? { ...todo, text: newText } : todo
      );
      const updatedTodo = mockTodos.find(todo => todo.id === id);
      resolve(updatedTodo);
    }, DELAY_MS);
  });
};