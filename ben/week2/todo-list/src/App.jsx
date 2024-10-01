import React, { useState } from 'react';
import './TodoList.css'; // CSS 파일을 import

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: editText } : todo)));
    setIsEditing(null);
    setEditText('');
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo List</h1>
      <Input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="새 할 일을 입력하세요"
        className="input-field"
      />
      <Button onClick={addTodo} className="add-button">추가</Button>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            {isEditing === todo.id ? (
              <>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="할 일을 수정하세요"
                  className="input-field"
                />
                <Button onClick={() => saveEdit(todo.id)} className="save-button">저장</Button>
              </>
            ) : (
              <>
                <span className="todo-text">{todo.text}</span>
                <Button onClick={() => startEditing(todo.id, todo.text)} className="edit-button">수정</Button>
                <Button onClick={() => deleteTodo(todo.id)} className="delete-button">삭제</Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default TodoList;
