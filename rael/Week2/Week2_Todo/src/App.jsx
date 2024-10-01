import { useRef, useState } from 'react';
import './App.css'
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [todos, setTodos] = useState([{id: 1, task: '투두 만들어보기'}]);
  const nextID = useRef(1);

  const [text, setText] = useState('');

  const [editingId, setIsEditingId] = useState(''); // 수정하기를 누른 상태인지
  const [editText, setEditText] = useState(''); // 수정할 텍스트

  // 1. 추가하기
  const addTodo = () => {
    
    if (text.trim().length === 0) {
      alert('투두를 입력해주세요.');
    }
    else {
      setTodos((prev) => [...prev, {id: nextID.current, task: text}]);
      setText('');
      nextID.current += 1;
    }
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((item) => item.id !== id));
  }; // item(현재 투두들)의 id와 온클릭으로 받은 id값의 일치 확인 후 filter 활용

  // 3. 수정하기 (핵심)
  const updateTodo = (id, text) => {
      if (editText.trim().length === 0) {
      alert('수정할 내용을 입력해주세요.')
      }
      else {
      setTodos((prev) => 
          prev.map((item) => item.id === id ? {...item, task: text} : item)
      ); // item id와 온클릭 id가 일치하면 text 수정 : 아니면 item 그대로
      }
      setIsEditingId(''); // editingID 상태 초기화 -> input창 아니고 p로 돌아감
  };

  // 렌더링 방지 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>

      <h2 className='title'> Rael's TodoList!</h2>

      <form className='input_container' onSubmit={handleSubmit}>
        <Input classname='input' type='text' value={text} onchange={(e) => setText(e.target.value)}/>
        <Button classname="button" onclick={addTodo} text="할 일 등록"/>
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
                <Input 
                classname='input'
                dvalue={todo.task} 
                onchange={(e) => setEditText(e.target.value)}
                />
              </div> 
            )}
            <Button classname="deletebutton" onclick={() => {deleteTodo(todo.id)}} text="삭제하기" />


            {/* editingId !== todo.id 수정이 아닌 상태 */}
            {/* editingId === todo.id 수정 중인 상태 */}
            {editingId === todo.id ? (
              <Button classname="editbutton" onclick={() => {updateTodo(editingId, editText)}} text="수정완료" />
            ) : (
              <Button classname="editbutton" onclick={() => {setIsEditingId(todo.id)}} text="수정진행" />
            )}

            
          </div>
        ))}
      </div>

    </>
  )
}

export default App