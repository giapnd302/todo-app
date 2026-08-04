// src/components/Footer.jsx
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/todos/slice';

export default function Footer({ activeCount }) {
  const dispatch = useDispatch();
  
  // Lấy trạng thái filter hiện tại để làm viền đỏ (class="selected") cho nút đang được chọn
  const currentFilter = useSelector(state => state.todos.filter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> item{activeCount !== 1 ? 's' : ''} left
      </span>
      <ul className="filters">
        <li>
          <a 
            className={currentFilter === 'all' ? 'selected' : ''} 
            href="#/"
            onClick={(e) => { e.preventDefault(); dispatch(setFilter('all')); }}
          >
            All
          </a>
        </li>
        <li>
          <a 
            className={currentFilter === 'active' ? 'selected' : ''} 
            href="#/active"
            onClick={(e) => { e.preventDefault(); dispatch(setFilter('active')); }}
          >
            Active
          </a>
        </li>
        <li>
          <a 
            className={currentFilter === 'completed' ? 'selected' : ''} 
            href="#/completed"
            onClick={(e) => { e.preventDefault(); dispatch(setFilter('completed')); }}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
}