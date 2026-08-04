// src/components/Header.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoRequest } from '../redux/todos/slice';

export default function Header() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    // Chỉ xử lý khi người dùng nhấn phím Enter
    if (e.key === 'Enter') {
      // 1. FORM VALIDATION: Kiểm tra xem có trống hoặc chỉ có dấu cách không
      if (text.trim().length === 0) {
        return; // Dừng lại, không làm gì cả
      }

      // 2. Gửi action yêu cầu thêm Todo kèm theo nội dung text
      dispatch(addTodoRequest(text.trim()));

      // 3. Xóa trắng ô input sau khi enter
      setText('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text} // Gắn giá trị của input vào state
        onChange={(e) => setText(e.target.value)} // Cập nhật state khi gõ chữ
        onKeyDown={handleKeyDown} // Bắt sự kiện gõ phím
      />
    </header>
  );
}