import View from "./components/view";
import {useState} from 'react';
import './App.css'

function TodoListApp() {
  const [todos, setTodos] = useState([
    {id: 1, task: 'Noel Gallagher'},
    {id: 2, task: 'Liam Gallagher'}
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState(''); 

  // 1. 추가하기
  const addTodo = () => {
    
    if (text.trim().length === 0) {
      alert('Text the Todo List');
    }
    else {
      setTodos((prev) => [
        ...prev, 
        {id:Math.floor(Math.random() *100) + 2 , task: text}]);
      setText('');
    }
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((item) => item.id !== id));
  }; // item(현재 투두들)의 id와 온클릭으로 받은 id값의 일치 확인 후 filter 활용

  // 3. 수정하기
  const updateTodo = (id, text) => {
      setTodos((prev) => 
          prev.map((item) => item.id === id ? {...item, task: text} : item)
      ); 
      setEditingId('');
  };

  // 렌더링 방지 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h2>Osis please come to Korea ....!</h2>
      <h4>This part is mission 1</h4>

      <form className="inputContainer" onSubmit={handleSubmit}>
        <input className="input" type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <button className="button" onClick={()=> {addTodo()}} type="submit">할일 등록</button>
      </form> 
      <div className="modi-container">
        {todos.map((todo, _) => (
          <div  key={todo.id}style={{display: 'flex', gap: '20px'}}>
            {/* 수정이 아닐때 */}
            {editingId !== todo.id && (
              <div key={todo.id} style={{display: 'flex', gap: '10px'}}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div> 
            )}

            {/* 수정 중일때 */}
            {editingId === todo.id && (
              <div key={todo.id} style={{display: 'flex', gap: '10px'}}>
                <p>{todo.id}.</p>
                <input
                  className="input"
                  value={todo.task} 
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div> 
            )}
            <button className='deletebutton' onClick={() => {deleteTodo(todo.id)}}>삭제 하기</button>


            {/* editingId !== todo.id 수정이 아닌 상태 */}
            {/* editingId === todo.id 수정 중인 상태 */}
            {editingId === todo.id ? (
              <button className='editbutton' onClick={() => {updateTodo(editingId, editText)}}>수정 완료</button>
            ) : (
              <button className='editbutton' onClick={() => {setEditingId(todo.id)}}>수정하기</button>
            )}
          </div>
        ))}
      </div>
    </>
  )
}


function App() {

  return (
    <>
      <TodoListApp />
      <h4>This part is mission 2</h4>
      <View/>
    </>
  )
}

export default App


