export default function TodoItem({ todo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input 
          className="toggle" 
          type="checkbox" 
          checked={todo.completed} 
          readOnly // Tạm thời để readOnly vì chưa có logic đổi state
        />
        <label>{todo.text}</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
}