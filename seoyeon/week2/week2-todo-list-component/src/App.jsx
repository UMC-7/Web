import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import TodoList from './TodoList.jsx'

function App() {

  //Todo 리스트
  const [todos,setTodos]=useState([
    {id: 1, task:'투두리스트 만들기~'},
    {id:2, task:'워크북 채우기~'}
  ])
  //Input 텍스트
  const [text,setText]=useState('');


  //1. todo 추가하기
  const addTodo=()=>{   //todo 목록에 항목 추가
    const todoId=Math.floor(Math.random()*100)+2;
    setTodos((prevTodos)=>[
      ...prevTodos,
      {id:todoId,task:text}
    ])
    setText('')
  };


  //렌더링 방지(새로고침 방지) 함수
  const handleSubmit=(e)=>{
    e.preventDefault();
  };

  return (
    <>
      <Form  handleSubmit={handleSubmit} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
