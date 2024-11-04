import { createContext } from "react";
import { useState } from "react";

//데이터를 담고 있음
export const TodoContext = createContext();

export function TodoContextProvider({children}){

    //Todo 리스트
    const [todos,setTodos]=useState([
        {id: 1, task:'투두리스트 만들기~'},
        {id:2, task:'워크북 채우기~'}
    ])    
    //입력 텍스트
    const [text,setText]=useState('');

    //1. todo 추가하기
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

    //3. todo 수정하기

    //수정하는 todo 항목 id
    const [editingId,setEditingId]=useState('')
    const [editText,setEditText]=useState('')

    //수정하기
    const updateTodo=(id,updateText)=>{
        setTodos((prev)=>
          prev.map((todo,_)=>
            todo.id===id?
              {...todo,task:updateText} : todo
          )
        )
        setEditingId('')
        setEditText('')
    }

    //렌더링 방지(새로고침 방지) 함수
    const handleSubmit=(e)=>{
        e.preventDefault();
    };

    return <TodoContext.Provider value={{
        text,
        setText,
        todos,
        setTodos,
        editingId,
        setEditingId,
        editText,
        setEditText,
        addTodo,
        deleteTodo,
        updateTodo,
        handleSubmit
    }}>{children}</TodoContext.Provider> 
}