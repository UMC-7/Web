import { useRef, useState } from 'react';
import './App.css';
import Button from './components/button';
import Input from './components/Input'

function App() {
  // 투두리스트, 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기'},
    { id: 2, task: '희연 해원 혜윤 건 찬민'},
  ]);
  
  const nextID = useRef(2); // 단순히 ID 값을 증가하기 위한 도구이므로 랜더링 주기에 영향을 주지 않는 useRef 사용
  const [text, setText] = useState(''); // 초기 입력값 상태관리
  const [editingId, setEditingId] = useState(''); // 수정 id 상태관리
  const [editText, setEditText] = useState(''); // 수정 내용 상태관리

  // 랜더링 방지
  //form 테그는 입력 받을 때 사용하는 테그인데
  //기본적으로 입력을 받을 때 리랜더링 되기 때문에
  // 이를 방지하기 위한 함수를 선언. 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    if(text.trim().length === 0) {
      alert("투두리스트를 입력해주세요!")
    }
    else {
    setTodos((prev) => [
      ...prev, {id: nextID.current, task: text},]);
    setText(''); // 입력 필드 초기화(랜더링 유도)
    nextID.current += 1;
    }  
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  } // 해당 Id를 제외한 배열로 갱신

  // 3. 수정하기(핵심)
  const updateTodo = (id, text) => {
    if(editText.trim().length === 0) {
      //alert("수정할 내용을 입력해주세요!") 아무것도 입력하지 않아도 되돌아가는 거 고려해서
      //alert 안 나오게 하는게 더 사용자 입장에서 좋은듯.
    } 
    else {
    setTodos((prev) => 
      prev.map((item) => (item.id === id ? {...item, task: text} : item)));
    };
    setEditingId(''); // 상태 변화를 이르켜 리랜더링
    setEditText(''); // 수정 입력 필드 초기화
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input 
          className='todo-input'
          type = 'text'
          value={text}
          placeholder='할 일을 입력하세요'
          onChange={(e)=> setText(e.target.value)}
        />
        <Button onClick={addTodo} type='submit' className='add-button'>
          할 일 등록
        </Button> 
      </form>
      <div>
        {todos.map((todo, _) => (
          <div key={todo.id} style={{ display: 'flex', gap: '20px'}}>
            {/* 수정이 아닐때*/}
            {editingId !== todo.id && (
            <div key={todo.id} style={{ display: 'flex', gap: '5px'}}>
              <p>{todo.id}. </p>
              <p>{todo.task}</p>
            </div>
            )}
            {/* 수정중 상태일때 */}
            {editingId === todo.id && (
            <div key={todo.id} style={{ display: 'flex', gap: '5px'}}>
              <p>{todo.id}. </p>
              <Input
                className='edit-input'
                type='text'
                defaultValue={todo.task}
                onChange={(e) => setEditText(e.target.value)}/>
            </div>
            )}
            <Button onClick={ () => deleteTodo(todo.id)} className='delete-button'>삭제하기</Button>

            {/* editingId !== todo.id 수정이 아닌 상태 */}
            {/* editingId === todo.id 수정 중인 상태 */}
            {editingId === todo.id ? (
              <Button onClick={ () => updateTodo(editingId, editText)} className='updateComplete-button'>수정완료</Button>
            ) : (
              <Button onClick={ () => setEditingId(todo.id)} className='edit-button'>수정하기</Button>
            )}
          </div> 
          ))
        }
       </div>
    </>
  );
};

export default App;