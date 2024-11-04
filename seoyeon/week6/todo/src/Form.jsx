import { useContext, useState } from "react";
import './App.css'
import { TodoContext } from "./context/TodoContext";

const Form=()=>{
    const {
      text,
      setText,
      addTodo,
      handleSubmit} = useContext(TodoContext)

    return(
        <form onSubmit={handleSubmit}> 
        <input 
          type='text'
          value={text}
          onChange={(e)=>setText(e.target.value)}/>
        <button className="add-button" type='submit' onClick={()=>{addTodo();}}>
            할 일 등록
        </button>
      </form>
    )
}
export default Form;