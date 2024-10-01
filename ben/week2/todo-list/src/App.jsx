import React, { useState } from 'react';

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
    <div>
      <h1>Todo List</h1>
      <Input 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="새 할 일을 입력하세요" 
      />
      <Button onClick={addTodo}>추가</Button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {isEditing === todo.id ? (
              <>
                <Input 
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)} 
                  placeholder="할 일을 수정하세요" 
                />
                <Button onClick={() => saveEdit(todo.id)}>저장</Button>
              </>
            ) : (
              <>
                {todo.text}
                <Button onClick={() => startEditing(todo.id, todo.text)}>수정</Button>
                <Button onClick={() => deleteTodo(todo.id)}>삭제</Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default TodoList;
