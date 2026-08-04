// src/App.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { fetchTodosRequest } from './redux/todos/slice';

function App() {
  const dispatch = useDispatch();
  
  const todos = useSelector((state) => state.todos.list);
  const loading = useSelector((state) => state.todos.loading);
  const filter = useSelector((state) => state.todos.filter); // <-- THÊM: Lấy filter từ Redux

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const activeCount = todos.filter(todo => !todo.completed).length;

  // --- THÊM: Lọc danh sách trước khi truyền xuống TodoList ---
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed; // Chỉ lấy việc chưa làm
    if (filter === 'completed') return todo.completed; // Chỉ lấy việc đã làm
    return true; // 'all': Lấy tất cả
  });

  return (
    <section className="todoapp">
      <Header />
      
      {loading && (
        <div style={{ padding: '15px', textAlign: 'center', color: '#777', fontSize: '18px' }}>
          ⏳ Đang tải dữ liệu...
        </div>
      )}

      {!loading && todos.length > 0 && (
        <>
          {/* TRUYỀN filteredTodos thay vì todos gốc */}
          <TodoList todos={filteredTodos} /> 
          <Footer activeCount={activeCount} />
        </>
      )}
    </section>
  );
}

export default App;