import { useDispatch } from 'react-redux';
import { toggleTodoRequest, deleteTodoRequest } from '../redux/todos/slice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input 
          className="toggle" 
          type="checkbox" 
          checked={todo.completed} 
          // Khi click vào ô vuông Checkbox
          onChange={() => dispatch(toggleTodoRequest(todo.id))} 
        />
        
        <label>{todo.text}</label>
        
        <button 
          className="destroy"
          // Khi click vào dấu X màu đỏ
          onClick={() => dispatch(deleteTodoRequest(todo.id))}
        ></button>
      </div>
    </li>
  );
}