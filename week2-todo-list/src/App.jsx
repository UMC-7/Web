import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos]=useState([
    {id:1, task:"투두 만들어보기"},
    {id:2, task:"영상 시청하기"}
  ]);

  //1. 추가하기
  const addTodo=()=>{   //todo 목록에 항목 추가
    const todoId=Math.floor(Math.random()*100)+2;
    setTodos((prevTodos)=>[
      ...prevTodos,
      {id:todoId,task:text}
    ])
    setText('')
    console.log(todoId);
  };

  //2. 삭제하기
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  //3. 수정하기
  const [editingId,setEditingId]=useState('')
  const [editText,setEditText]=useState('')

  const updateTodo=(id,updateText)=>{
    setTodos((prev)=>
      prev.map((todo,_)=>
        todo.id===id?
          {...todo,task:updateText}
          :todo
      )
    )
    setEditingId('')
    setEditText('')
  }

  const [text,setText]=useState('');


  //렌더링 방지(새로고침 방지) 함수
  const handleSubmit=(e)=>{
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}> 
        <input 
          type='text'
          value={text}
          onChange={(e)=>setText(e.target.value)}/>
        <button 
          type='submit'
          onClick={()=>{
            addTodo();
          }}>
            할 일 등록
        </button>
      </form>
      <div>
        {todos.map((todo,_)=>
        <div style={{
          display:'flex', 
          justifyContent:'space-between',
          height:'25px' ,
          width:'30vw'}}>
            <div>
              {todo.id===editingId && 
                <input defaultValue={todo.task} onChange={(e)=>{
                  console.log(editingId+' '+e.target.value)
                  setEditText(e.target.value)}}/>}
              {todo.id!==editingId && 
                <p key={todo.id} style={{marginTop:'2px'}}>{todo.task}</p>}
              
            </div>
            <div>
              <button onClick={()=>{deleteTodo(todo.id);}}>삭제하기</button>
              {todo.id===editingId && 
                <button onClick={()=>{updateTodo(editingId,editText)}}>수정완료</button>}
              {todo.id!==editingId && 
                <button onClick={()=>setEditingId(todo.id)}>수정하기</button>}
            </div>
        </div> 
          
        )}
      </div>
    </>
  );
}

export default App;
