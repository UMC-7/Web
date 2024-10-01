import { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([{id: 1, task: '투두 만들어보기'}]);

  const [text, setText] = useState('');

  const [editingId, setIsEditingId] = useState(''); // 수정하기를 누른 상태인지
  const [editText, setEditText] = useState('');

  // 1. 추가하기
  const addTodo = () => {
    //if (text.trim().length === 0) {
    //  alert('투두를 입력해주세요.')
    //}
    setTodos((prev) => [...prev, {id: Math.floor(Math.random() * 100) + 2, task: text}]);
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  // 3. 수정하기 (핵심)
  const updateTodo = (id, text) => {
    setTodos((prev) => 
      prev.map((item) => item.id === id ? {...item, task: text} : item)
    );
    setIsEditingId('');
  };

  // 렌더링 방지 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form className='input_container' onSubmit={handleSubmit}>
        <input className='input' type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <button className='button' onClick={() => addTodo()} type='submit'>할 일 등록</button>
      </form>
      <div className='container'>
        {todos.map((todo, _) => (
          <div className='todolist' style={{display: 'flex', gap: '20px'}}>
            {/* 수정이 아닐때 */}
            {editingId !== todo.id && (
              <div className='listitem' key={todo.id} style={{display: 'flex', gap: '10px'}}>
                <p className='list'>{todo.id}.</p>
                <p className='list'>{todo.task}</p>
              </div> 
            )}

            {/* 수정 중일때 */}
            {editingId === todo.id && (
              <div className='listitem' key={todo.id} style={{display: 'flex', gap: '10px'}}>
                <p className='list'>{todo.id}.</p>
                <input 
                className='input'
                defaultValue={todo.task} 
                onChange={(e) => setEditText(e.target.value)}
                />
              </div> 
            )}
            <button className='deletebutton' onClick={() => deleteTodo(todo.id)}>삭제하기</button>

            {/* editingId !== todo.id 수정이 아닌 상태 */}
            {/* editingId === todo.id 수정 중인 상태 */}
            {editingId === todo.id ? (
              <button className='editbutton' onClick={() => updateTodo(editingId, editText)}>수정완료</button>
            ) : (
              <button className='editbutton' onClick={() => setIsEditingId(todo.id)}>수정진행</button>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
