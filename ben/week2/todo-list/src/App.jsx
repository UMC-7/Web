import React, { useState } from 'react';

function TodoList() {
  // 상태 관리: 할 일 목록과 새로운 할 일의 내용을 위한 상태
  const [todos, setTodos] = useState([]); // 할 일 목록
  const [newTodo, setNewTodo] = useState(''); // 새 할 일 내용
  const [isEditing, setIsEditing] = useState(null); // 수정 중인 할 일 ID
  const [editText, setEditText] = useState(''); // 수정 중인 텍스트

  // 할 일 추가 함수
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo(''); // 입력 필드 초기화
    }
  };

  // 할 일 삭제 함수
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 할 일 수정 시작 함수
  const startEditing = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  // 수정된 할 일 저장 함수
  const saveEdit = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: editText } : todo)));
    setIsEditing(null); // 수정 모드 종료
    setEditText(''); // 수정 필드 초기화
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* 새로운 할 일을 입력하는 폼 */}
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="새 할 일을 입력하세요" 
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {/* 할 일 목록을 출력 */}
        {todos.map(todo => (
          <li key={todo.id}>
            {isEditing === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>저장</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => startEditing(todo.id, todo.text)}>수정</button>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
