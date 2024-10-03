import { useState } from 'react';
import './App.css';
import Button from './assets/Button.jsx';
import Input from './assets/Input.jsx';

function App() {
  //투두리스트, 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos]=useState([
    {id:1, task:'투두 만들어보기'},
    {id:2, task: '서희 다애 가을'}
  ]);;

  const [text, setText]=useState('')

  const [editingId, setEditingId]=useState('');
  const [editText, setEditText]=useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('입력하세요');
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text }
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <Button onClick={addTodo} label="할 일 등록" />
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex', gap: '20px' }}>
            {editingId !== todo.id && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}번</p>
                <p>{todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}번</p>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="수정할 내용을 입력하세요"
                />
              </div>
            )}
            <Button onClick={() => deleteTodo(todo.id)} label="삭제하기" />
            {editingId === todo.id ? (
              <Button
                onClick={() => updateTodo(editingId, editText)}
                label="수정 완료"
              />
            ) : (
              <Button onClick={() => setEditingId(todo.id)} label="수정 진행" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;