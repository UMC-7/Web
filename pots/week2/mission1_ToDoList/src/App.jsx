import {useState} from 'react';
import './App.css'
import Button from './Button';
import Input from './Input'; 

function App() {
  //투두리스트, 화면에 출력되는 - 추가 삭제 수정
  const [todos, setTodos] = useState([
    {id:1, task:'투두만들어보기'}, 
    {id:2, task:'dkdkdkdk'},
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState();
  const [editText, setEditText] = useState('');
  //console.log(text)


  //1. 추가
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      {id: Math.floor(Math.random() * 100) + 2, task: text}
    ]);
    setText('');
  };


  //2. 삭제
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };


  //3. 수정
  const updateTodo = (id, text) => {
    setTodos((prev) => 
      prev.map((item) => item.id === id ? {...item, task:text} : item)
    );
    setEditingId('');
  };


  //랜더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
  <>
    <form onSubmit={handleSubmit} className='todo-form'>
      <input value={text} onChange={(e) => setText(e.target.value)} className='todo-button'/>
      <button onClick={addTodo} type = 'submit' className='todo-button2'>할일등록</button>
    </form>
    <div>
      {todos.map(({id, task}, _) =>
        <div className='todo-item'>
          {/* 수정이 아닐 때 */}
          {editingId !== id && (
            <div key={id} className="todo-item">
             <p>{id}번</p><p>{task}</p>
            </div>
          )}
          {/* 수정중일때 */}
          {editingId === id && (
            <div key={id} className="todo-item">
             <p>{id}번</p>
             <input
              defaultValue={task}
              onChange={(e) => setEditText(e.target.value)}/>
            </div>
          )}
          <button onClick={() => deleteTodo(id)} className='todo-button3'>삭제하기</button>
          {editingId === id ? (
            <button onClick={() => updateTodo(editingId, editText)} className='todo-button'>수정완료</button>
          ) : (<button onClick={() => setEditingId(id)} className='todo-button'>수정하기</button>)}
        </div>
      )}
    </div>
  </>
  );
}

export default App
