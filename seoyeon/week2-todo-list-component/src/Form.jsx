import { useState } from "react";

const Form=(props)=>{
    const {handleSubmit,todos,setTodos}=props

    const [text,setText]=useState('');

    const addTodo=()=>{   //todo 목록에 항목 추가
        const todoId=Math.floor(Math.random()*100)+2;
        setTodos((prevTodos)=>[
          ...prevTodos,
          {id:todoId,task:text}
        ])
        setText('')
        console.log(todoId);
    };

    return(
        <form onSubmit={handleSubmit}> 
        <input 
          type='text'
          value={text}
          onChange={(e)=>setText(e.target.value)}/>
        <button type='submit' onClick={()=>{addTodo();}}>
            할 일 등록
        </button>
      </form>
    )
}
export default Form;