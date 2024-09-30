import { useState } from 'react'
import React from 'react'
import Todo from './todo'

const TodoList=(props)=>{
    const {todos,setTodos}=props
    //수정하는 todo 항목 id
    const [editingId,setEditingId]=useState('')
    const [editText,setEditText]=useState('')

    //삭제하기
    const deleteTodo=(id)=>{
        setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
    }
    //수정하기
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
    const fixEditText=(text)=>{
        setEditText(text)
    }
    const fixEditingId=(id)=>{
        setEditingId(id)
    }

    return(
        <div>
            {todos.map((todo,_)=>
            <Todo id={todo.id} task={todo.task} isEditing={todo.id===editingId} 
            editText={editText} setEditText={fixEditText} deleteTodo={deleteTodo} updateTodo={updateTodo}
            setEditingId={fixEditingId}/>
            )}
        </div>
    )
}
export default TodoList;