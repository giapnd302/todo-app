import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodoRequest, deleteTodoRequest, editTodoRequest } from '../redux/todos/slice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditText(todo.text); 
    }
  };

  const handleSubmit = () => {
    if (editText.trim()) {
      dispatch(editTodoRequest({ id: todo.id, newText: editText.trim() }));
    } else {
      dispatch(deleteTodoRequest(todo.id));
    }
    setIsEditing(false);
  };

  return (
    <li className={`${todo.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
      <div className="view">
        <input 
          className="toggle" 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => dispatch(toggleTodoRequest(todo.id))} 
        />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button 
          className="destroy"
          onClick={() => dispatch(deleteTodoRequest(todo.id))}
        ></button>
      </div>
      
      {isEditing && (
        <input 
          ref={editInputRef}
          className="edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSubmit} 
          onKeyDown={handleKeyDown}
        />
      )}
    </li>
  );
}